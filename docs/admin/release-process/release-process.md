# Release Process

## Overview of Release Process

The release process is divided into several steps, which ensure that the versioning, changelog updates, and publishing are done systematically.

## Release Process Steps

- [Version Check Upon PR Merge](#version-check-upon-pr-merge)
- [Trigger Build and Publish Job](#trigger-build-and-publish-job)
- [Automatic Changelog Update](#automatic-changelog-update)
- [Release Creation and Publishing](#release-creation-and-publishing)

## Additional Content

- [Manual Workflow Execution](#manual-workflow-execution)
- [Release Process Flow Diagram](#release-process-flow-diagram)
- [NPM_PUBLISH Token Configuration](#npm_publish-token-configuration)

This process is designed to minimize errors and automate as much of the release process as possible.

## Version Check Upon PR Merge

Once the PR is approved and merged into the main branch, a check is performed to see if the version has been bumped:

- **Has the version been bumped?**
  - If **NO**, the process terminates.
  - If **YES**, the `build-and-publish-job` is triggered.

## Trigger Build and Publish Job

When the `build-and-publish-job` is triggered, a PR is created or updated to include all commits since the last release, updating the `CHANGELOG.md` file. This PR is labeled with `autorelease:pending`.

- **Is the merged PR the release-please PR?**
  - If **NO**, the process ends after the PR is created or updated.
  - If **YES**, the process continues to release creation.

## Automatic Changelog Update

When preparing for a new version release, the changelog can be updated automatically based on commit messages and PR titles through a pull request. This process simplifies the maintenance of an accurate and up-to-date changelog.

## Release Creation and Publishing

After the `release-please` PR is merged:

1. A release and tag are created with the version specified in `package.json`.
2. The `release-please` PR label is changed to `autorelease:tagged`.
3. The package is published to npm to the [@catena-x/portal-shared-components library](https://npmjs.com/package/@catena-x/portal-shared-components)

This structured process ensures consistency in versioning and changelog updates, while also automating the release and publishing steps to reduce manual intervention.

## Manual Workflow Execution

If the workflow is executed manually and there is no release commit but the package version has been updated:

1. **Release-please** will automatically bump the version according to its default approach, based on the commit history and changes detected. [Learn more about release-please](https://github.com/googleapis/release-please?tab=readme-ov-file#release-please).

2. This ensures that even without a release commit, the versioning remains consistent and follows semantic versioning principles.

## Release Process Flow Diagram

![Project Diagram](../../static/release-process.png)

## NPM_PUBLISH Token Configuration

The automated release process requires a valid NPM authentication token stored as a GitHub secret named `NPM_PUBLISH`. This token enables the workflow to publish packages to the [@catena-x/portal-shared-components library](https://npmjs.com/package/@catena-x/portal-shared-components) on npm.

If needed, the token should be updated in the following manner:

### How to Update the NPM_PUBLISH Token

1. **Generate a new NPM token**:
   - Log in to [npmjs.com](https://www.npmjs.com/) with an account that has publish permissions for the `@catena-x/portal-shared-components` package
   - Go to your profile settings and navigate to "Access Tokens"
   - Create a new token with "Automation" type (recommended for CI/CD)
   - Copy the generated token immediately (it won't be shown again)

2. **Update the GitHub secret**:
   - Create a Helpdesk ticket to the Eclipse Foundation at [gitlab.eclipse.org/eclipsefdn/helpdesk](https://gitlab.eclipse.org/eclipsefdn/helpdesk/-/issues)
   - Request an update to the `NPM_PUBLISH` secret for the portal-shared-components repository
   - **Do not include the token directly in the ticket** - instead, indicate that you have a new token ready to provide
   - Coordinate with the Eclipse Foundation supporter to share the token securely via:
     - Direct 1-to-1 chat/message
     - Secure email to the assigned supporter
     - Other secure communication method as directed by the supporter
   - Reference the original secret creation ticket if needed (e.g., [issue #3270](https://gitlab.eclipse.org/eclipsefdn/helpdesk/-/issues/3270))

## Reference Documents

For more detailed information about how release-please works and how to configure it, refer to the following resources:

- [How release-please works?](https://github.com/googleapis/release-please?tab=readme-ov-file#how-should-i-write-my-commits)
- [How do I change the release version number?](https://github.com/googleapis/release-please?tab=readme-ov-file#how-do-i-change-the-version-number)

## NOTICE

This work is licensed under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).

- SPDX-License-Identifier: Apache-2.0
- SPDX-FileCopyrightText: 2024 Contributors
- Source URL: https://github.com/eclipse-tractusx/portal-shared-components
