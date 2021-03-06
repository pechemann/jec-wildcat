//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { TestSuite, Test } from "jec-juta";
import { expect, assert } from "chai";
import { ArchetypePropertiesProcessor } from "../../../../../src/com/onsoft/wildcat/util/ArchetypePropertiesProcessor";
import * as utils from "../../../../../utils/test-utils/utilities/ArchetypePropertiesProcessorTestUtils";

@TestSuite({
  description: "Test the ArchetypePropertiesProcessor class methods"
})
export class ArchetypePropertiesProcessorTest {

  @Test({
    description: "should set the right properties in the specified file"
  })
  public mapPropertiesTest():void {
    const processor:ArchetypePropertiesProcessor =
                                             new ArchetypePropertiesProcessor();
    processor.setContext(utils.REQUEST, null);
    expect(processor.mapProperties(utils.FILE)).to.equal(utils.RESULT);
  }
}