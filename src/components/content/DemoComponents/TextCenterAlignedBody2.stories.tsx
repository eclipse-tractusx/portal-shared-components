/********************************************************************************
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { TextCenterAlignedBody2 as Component } from './TextCenterAlignedBody2'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Component> = {
  args: {
    provider: {
      subTitles: [
        "In this example, an SME produces a batch of gears with batch number XX1235509 and part number 5A52625. After the parts have been manufactured, the SME creates a digital twin for this batch in the <strong class='tooltip'>Digital Twin Registry<0>Each traceable object is mapped via a digital twin and registered in the Digital Twin Registry</0></strong> using the <strong class='tooltip'>Batch<0>Represents the master data of a batch after the assembly process. Relevant for manufacturers of components with large batches, which are produced under the same manufacturing conditions and bundled in a batch number.</0></strong> data model in accordance with the Catena-X standards. In addition, a <strong class='tooltip'>Catena-X Unique ID<0>Catena-X ID - Universally Unique Identifier (UUID): Each object (raw material, component or vehicle) receives a unique Catena-X ID for an unequivocally identification in the Catena-X data room.</0></strong> is generated for the batch so that it can be clearly identified in the Catena-X ecosystem. The <strong class='tooltip'>EDC<0>The Eclipse Dataspace Connector (EDC) is the standard connector within the Catena-X network that ensures secure and sovereign data exchange.</0></strong> provides the customer with a data offer to retrieve this data from the digital twin. The physical components (gears) are then sent to the customer.<1></1><1></1><1></1>",
        "The customer receives the SME's batch of gears and scans them when the transmission is manufactured. He also creates a digital twin and a Catena-X unique ID for the transmission (serial number 21B294301258, part number 5A52479). He uses the <strong class='tooltip'>SerialPartTypization<0>Represents the master data of a component with its own serial number after the assembly process. Relevant for manufacturers of serialized individual parts or vehicle manufacturers.</0></strong> data model to register his digital twin. He makes the information from the digital twin available to his customer, in this case to the OEM, via a corresponding data offer in the EDC. To logically link the two digital twins (batch of gears to transmissions), the Catena-X Unique ID of the batch is determined via a look-up in the Digital Twin Registry and stored in the digital twin of the transmission using the <strong class='tooltip'>AssemblyPartRelation<0>Represents the relationship between the components after the assembly process. For example, which batch (gear wheel, raw material) is installed in which serialized part (transmission) in which vehicle.</0></strong> data model. This logical link creates the Catena-X data chain.<1></1><1></1><1></1>",
        'The same process happens at all levels, as in the example above, between the customer and the OEM.<1></1><1></1><1></1>',
      ],
    },
  },
}
