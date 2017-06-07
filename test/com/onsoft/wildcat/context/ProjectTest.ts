//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import { TestSuite, Test, BeforeClass } from "jec-juta";
import { expect } from "chai";
import { Project } from "../../../../../src/com/onsoft/wildcat/context/Project";

@TestSuite({
  description: "Test the Project class properties"
})
export class ProjectTest {

  public project:Project = null;

  @BeforeClass()
  public initProject():void {
    this.project = new Project();
  }

  @Test({
    description: "Should have a 'version' property set to 'null'"
  })
  public versionTest():void {
    expect(this.project).to.have.property("version", null);
  }
  
  @Test({
    description: "Should have a 'title' property set to 'null'"
  })
  public titleTest():void {
    expect(this.project).to.have.property("title", null);
  }
  
  @Test({
    description: "Should have a 'description' property set to 'null'"
  })
  public descriptionTest():void {
    expect(this.project).to.have.property("description", null);
  }
  
  @Test({
    description: "Should have a 'author' property set to 'null'"
  })
  public authorTest():void {
    expect(this.project).to.have.property("author", null);
  }
}