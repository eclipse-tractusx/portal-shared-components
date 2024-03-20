#!/bin/bash

###############################################################
# Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
#
# See the NOTICE file(s) distributed with this work for additional
# information regarding copyright ownership.
#
# This program and the accompanying materials are made available under the
# terms of the Apache License, Version 2.0 which is available at
# https://www.apache.org/licenses/LICENSE-2.0.
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
#
# SPDX-License-Identifier: Apache-2.0
###############################################################

#
# Bash utils for GitHub API
#
# prerequisites:
#   - GITHUB_TOKEN enviroment variable set to token with repo scope

export REPO_OWNER=eclipse-tractusx
export REPO_NAME=portal-shared-components

list-pulls() {
    curl -sL \
        -X GET \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer $GITHUB_TOKEN"\
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls
}

create-pull-request() {
    CC=$1
    BRANCH=$(echo $CC | awk '{gsub(/[^a-zA-Z0-9_]+/,"-");}1')
    DESC=$2
    WHY=$3
    ISSUE=${4:-'n/a'}
    read -r -d '' RAW_BODY << EOM
## Description
$DESC

## Why
$WHY

## Issue
$ISSUE

## Checklist
- [x] I have followed the [contributing guidelines](https://github.com/eclipse-tractusx/portal-assets/blob/main/developer/Technical%20Documentation/Dev%20Process/How%20to%20contribute.md#commit-and-pr-guidelines)
- [x] I have performed a self-review of my own code
- [x] I have successfully tested my changes locally
EOM
    BODY=$(echo $RAW_BODY | sed -z 's/\n/\\n/g')
    curl -sL \
        -X POST \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer $GITHUB_TOKEN"\
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls \
        -d '{"title":"'$CC'","body":"'$BODY'","head":"'$REPO_OWNER':'$BRANCH'","base":"main"}'
}

next-release() {
    if [[ $# -ne 3 && $# -ne 4 ]]; then
        cat >&2 << EOM
next-release - performs all steps for new release

CAUTION - USE THIS ONLY IF YOU ARE SURE YOU WANT TO:
    - increment version patchlevel
    - upgrade all packages and DEPENDENCIES file
    - create a new branch
    - add, commit and push ALL files
    - raise PR

prerequisites:
    - set environment variable GITHUB_TOKEN to valid token with repo scope

usage:
    next-release <title> <desc> <why> [<issue>]

example:
    export GITHUB_TOKEN=ghp_*****
    next-release \\
        'feat(cli): amazing pull request cli' \\
        'CLI for pull requests' \\
        'now it takes only one command to raise pr'

EOM
      return -1
    fi

    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    if [ "$CURRENT_BRANCH" != "main" ]; then
        cat >&2 << EOM
You are on branch
    $CURRENT_BRANCH
We recommend you execute this from current
    main
branch

Are you sure you want to continue (y/n)? 
EOM
        read answer
        if [ "$answer" = "${answer#[Yy]}" ]; then 
            return -2
        fi
    fi
    CC=$1
    BRANCH=$(echo $CC | awk '{gsub(/[^a-zA-Z0-9_]+/,"-");}1')
    PR_ARGS=$(for arg in "$@"
do
   echo \'$arg\'
done)
    ARGS=$(echo $PR_ARGS | sed -z 's/\n/ /g')
    cat >&2 << EOM
This will execute:

    yarn version --patch
    yarn upgrade
    yarn licenses list | head -n -1 > DEPENDENCIES
    git checkout -b '$BRANCH'
    git add -A
    git commit -m '$CC'
    git push origin '$BRANCH'
    create-pull-request $ARGS

Are you sure you want to continue (y/n)? 
EOM
    read answer
    if [ "$answer" = "${answer#[Yy]}" ]; then 
        return -3
    fi
    yarn version --patch
    yarn upgrade
    yarn licenses list | head -n -1 > DEPENDENCIES
    yarn pretty
    git checkout -b $BRANCH
    git add -A
    git commit -m $CC
    git push origin $BRANCH
    echo ''
    create-pull-request $@ | jq '.html_url'
}

next-release $@
