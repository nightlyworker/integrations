"use strict";var __awaiter=this&&this.__awaiter||function(o,e,t,i){return new(t||(t=Promise))((function(a,s){function d(o){try{l(i.next(o))}catch(o){s(o)}}function c(o){try{l(i.throw(o))}catch(o){s(o)}}function l(o){var e;o.done?a(o.value):(e=o.value,e instanceof t?e:new t((function(o){o(e)}))).then(d,c)}l((i=i.apply(o,e||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0});const chai_1=require("chai");require("mocha");const common_1=require("./common"),services_1=require("../services");let MicrosoftTasks=common_1.IntegrationsLib.getTaskService(services_1.TaskServiceType.Microsoft),TodoistTasks=common_1.IntegrationsLib.getTaskService(services_1.TaskServiceType.Todoist),GoogleTasks=common_1.IntegrationsLib.getTaskService(services_1.TaskServiceType.Google);describe("Microsoft Task Service",()=>{let o="AQMkADAwATM3ZmYAZS1hMmExLTMyNTUALTAwAi0wMAoALgAAA13v5w3ACrdPrweVZk_YKxUBALS0AOnC7aw0RLsxvEfe4v81AAACARIAAAA",e="";it("Create task group",()=>__awaiter(void 0,void 0,void 0,(function*(){const e="new task group for testing",t=e;console.log(o=yield MicrosoftTasks.createTaskGroup(e)),chai_1.expect(t).to.equal(e)}))),it("Create task",()=>__awaiter(void 0,void 0,void 0,(function*(){const t="new task name for testing",i={title:t};console.log(e=yield MicrosoftTasks.createTask(i,o)),chai_1.expect(i.title).to.equal(t)}))),it("Get task group",()=>__awaiter(void 0,void 0,void 0,(function*(){var e=yield MicrosoftTasks.getTaskGroup(o);console.log(e),chai_1.expect(e.id).to.equal(o)}))),it("Get task",()=>__awaiter(void 0,void 0,void 0,(function*(){var t=yield MicrosoftTasks.getTaskById(e,o);console.log(t),chai_1.expect(t.id).to.equal(e)}))),it("Get all task groups",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield MicrosoftTasks.getAllTaskGroups();console.log(o)}))),it("Update task group",()=>__awaiter(void 0,void 0,void 0,(function*(){const e="UPDATED TASK OR TASK GROUP FOR TESTING",t=e;console.log(yield MicrosoftTasks.updateTaskGroup(o,e)),chai_1.expect(t).to.equal(e)}))),it("Update task",()=>__awaiter(void 0,void 0,void 0,(function*(){const t={id:e,title:"updated task name"};console.log(yield MicrosoftTasks.updateTask(e,t,o)),chai_1.expect(t.title).to.equal("updated task name")}))),it("Delete task group",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=yield MicrosoftTasks.deleteTaskGroup(o);console.log(e),chai_1.expect(e).to.equal(!0)}))),it("Delete task",()=>__awaiter(void 0,void 0,void 0,(function*(){const t=yield MicrosoftTasks.deleteTask(e,o);console.log(t),chai_1.expect(t).to.equal(!0)})))}),describe("Todoist Task Service",()=>{let o="",e="";it("Create Task",()=>__awaiter(void 0,void 0,void 0,(function*(){const e={title:"New Task Name",dueDate:{date:new Date(2018,5,5,17,23,42,11)}};console.log(o=yield TodoistTasks.createTask(e)),chai_1.expect(e.title).to.equal("New Task Name")}))),it("Create Task Group",()=>__awaiter(void 0,void 0,void 0,(function*(){const o="New Task Group Name",t=o;console.log(e=yield TodoistTasks.createTaskGroup(o)),chai_1.expect(t).to.equal("New Task Group Name")}))),it("Get Task by Id",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=yield TodoistTasks.getTaskById(o);console.log(e),chai_1.expect(e.title).to.equal("New Task Name")}))),it("Get Task Group",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield TodoistTasks.getTaskGroup(e);console.log(o),chai_1.expect(o.name).to.equal("New Task Group Name")}))),it("Get All Tasks",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=yield TodoistTasks.getAllTasks();console.log(e),chai_1.expect(e[0].id).to.equal(o)}))),it("Get All Task Groups",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield TodoistTasks.getAllTaskGroups();console.log(o),chai_1.expect(o[0].name).to.equal("Inbox")}))),it("Update Task",()=>__awaiter(void 0,void 0,void 0,(function*(){const e={title:"BIG UPDATED TASK",id:o};console.log(yield TodoistTasks.updateTask(o,e)),chai_1.expect(e.title).to.equal("BIG UPDATED TASK")}))),it("Update Task Group",()=>__awaiter(void 0,void 0,void 0,(function*(){const o="New Updated Name",t=o;console.log(yield TodoistTasks.updateTaskGroup(e,o)),chai_1.expect(t).to.equal(o)}))),it("Delete Task",()=>__awaiter(void 0,void 0,void 0,(function*(){const e=yield TodoistTasks.deleteTask(o);console.log(e),chai_1.expect(e).to.equal(!0)}))),it("Delete Task Group",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield TodoistTasks.deleteTaskGroup(e);console.log(o),chai_1.expect(o).to.equal(!0)})))}),describe("Google Task Service",()=>{let o="",e="";it("Create task group",()=>__awaiter(void 0,void 0,void 0,(function*(){e=yield GoogleTasks.createTaskGroup("Tasks from VS")}))),it("Create task",()=>__awaiter(void 0,void 0,void 0,(function*(){const t={title:"testing from VS",dueDate:{date:new Date}};o=yield GoogleTasks.createTask(t,e)}))),it("Get tasklist",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield GoogleTasks.getTaskGroup(e);console.log(o)}))),it("Get task",()=>__awaiter(void 0,void 0,void 0,(function*(){var t=yield GoogleTasks.getTaskById(o,e);console.log(t),chai_1.expect(t.id).to.equal(o)}))),it("Update task group",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield GoogleTasks.updateTaskGroup(e,"updated group name from VS");console.log(o)}))),it("Update task",()=>__awaiter(void 0,void 0,void 0,(function*(){const t={title:"updated task from VS",dueDate:void 0},i=yield GoogleTasks.updateTask(o,t,e);console.log(i)}))),it("Get all Google task group",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield GoogleTasks.getAllTaskGroups();console.log(o)}))),it("Get all Google task",()=>__awaiter(void 0,void 0,void 0,(function*(){const o=yield GoogleTasks.getAllTasks();console.log(o)}))).timeout(5e3),it("delete task",()=>__awaiter(void 0,void 0,void 0,(function*(){yield GoogleTasks.deleteTask(o,e)}))),it("delete task group",()=>__awaiter(void 0,void 0,void 0,(function*(){yield GoogleTasks.deleteTaskGroup(e)})))});