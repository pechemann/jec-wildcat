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

import { TestSuite, Test, BeforeAll } from "jec-juta";
import { expect } from "chai";
import * as sinon from "sinon";
import { TaskImpl } from "../../../../../../utils/test-utils/classes/TaskImpl";
import { DefaultTaskRunner } from "../../../../../../src/com/onsoft/wildcat/tasks/core/DefaultTaskRunner";
import { TaskRunner } from "../../../../../../src/com/onsoft/wildcat/tasks/core/TaskRunner";
import * as utils from "../../../../../../utils/test-utils/utilities/TaskTestsUtils";

@TestSuite({
  description: "Test the DefaultTaskRunner methods"
})
export class DefaultTaskRunnerTest {

  public task:TaskImpl = null;
  public taskRunner:TaskRunner = null;

  @BeforeAll()
  public initTest():void {
    this.task = new TaskImpl();
    this.taskRunner = new DefaultTaskRunner();
  }

  @Test({
    description: "should invoke the success callback method"
  })
  public runTest():void {
    this.taskRunner.run(this.task, (message:string)=> {
      expect(message).equal(utils.SUCCESS_MSG);
    });
  }
  
  @Test({
    description: "should call the execute method on the specified task"
  })
  public executeTaskTest():void {
    const spy:any = sinon.spy(this.task, "execute");
    this.taskRunner.run(this.task, (message:string)=> {
      sinon.assert.calledOnce(spy);
      sinon.restore();
    });
  }
}
