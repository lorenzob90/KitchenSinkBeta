$(document).ready(function() {
  com.fc.CustomEventListeners = {};
  // LIBRARIES CODE
  function LoginLibGIOVANNI() {
    loginlibgiovanni_varmap = {};
    loginlibgiovanni_varmap._debugService = null;

    function WorkflowLibrary() {
      workflowlibrary_varmap = {};
      workflowlibrary_varmap._debugService = null;
      workflowlibrary_varmap._initiatorVar = null;
      workflowlibrary_varmap._initiator = null;
      workflowlibrary_varmap._userName = null;
      workflowlibrary_varmap._userPassw = null;
      workflowlibrary_varmap._processDefKey = null;
      workflowlibrary_varmap._urlSetup = null;
      workflowlibrary_varmap._taskToBeCompleted = null;
      workflowlibrary_varmap._processData = null;
      workflowlibrary_varmap.tempDict = null;
      workflowlibrary_varmap.tempDict1 = null;
      workflowlibrary_varmap._task = null;
      workflowlibrary_varmap._formData = null;
      workflowlibrary_varmap._processVariabes = null;
      workflowlibrary_varmap.tempNum = null;
      workflowlibrary_varmap._tasks = null;
      workflowlibrary_varmap.tempList = null;
      workflowlibrary_varmap._outcomes = null;
      workflowlibrary_varmap._processDefId = null;
      workflowlibrary_varmap._processInstId = null;
      workflowlibrary_varmap._taskId = null;
      workflowlibrary_varmap._formProperties = null;
      workflowlibrary_varmap._formKey = null;
      workflowlibrary_varmap._formName = null;
      workflowlibrary_varmap._formFields = null;
      workflowlibrary_varmap._formId = null;
      workflowlibrary_varmap._processInstance = null;
      workflowlibrary_varmap._processInstances = null;
      workflowlibrary_varmap.tempParam = null;
      workflowlibrary_varmap.tempN2 = null;
      workflowlibrary_varmap._templateKey = null;
      workflowlibrary_varmap.tempListKey = null;
      workflowlibrary_varmap._outcomeAndFieldMapping = null;
      workflowlibrary_varmap._templateType = null;
      workflowlibrary_varmap._currentInitiator = null;
      workflowlibrary_varmap.tempList1 = null;

      function mathRandomInt(a, b) {
        if(a > b) {
          // Swap a and b to ensure a is smaller.
          var c = a;
          a = b;
          b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
      }
      /**
       * Describe this function...
       */
      this.testInitSDKforgetful = testInitSDKforgetful;

      function testInitSDKforgetful() {
        return new Promise(function(resolve, reject) {
          // Block#: C?[y]QkXNHz}A_BP6!zX
          workflowlibrary_varmap._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'forgetfulUser', '4mn3s14C!', 'SDKv11TestFlow', 'https://develop.snapclinical.net:8443']);
          // Block#: AiP%e2SaJeRe?3)t;VAQ
          workflowlibrary_varmap._initiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'initiator'));
          // Block#: Bn5ViK1:e8/%r}h$f7|s
          workflowlibrary_varmap._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userName'));
          // Block#: J9z#8t3+mdYF_P%kQuIA
          workflowlibrary_varmap._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userPassw'));
          // Block#: Eh^@o)%:ej63I{G%zFGB
          workflowlibrary_varmap._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'processDefKey'));
          // Block#: +EEDyY6L{9So^0|bW2Up
          workflowlibrary_varmap._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'urlSetup'));
        });
      }
      /**
       * Describe this function...
       */
      this.TestInitSDK = TestInitSDK;

      function TestInitSDK() {
        return new Promise(function(resolve, reject) {
          // Block#: rQO{,%cUbTaY=47}Q56g
          workflowlibrary_varmap._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'lorenzo+02@foneclay.com', '123456', 'SDKv11TestFlow', 'https://develop.snapclinical.net:8443']);
          // Block#: X1X:~yjfb+;@SH`tUzH+
          workflowlibrary_varmap._initiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'initiator'));
          // Block#: VM9o$anfu2m0n5Y-mzkB
          workflowlibrary_varmap._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userName'));
          // Block#: f$2q36h{3_EXvMmy[{h$
          workflowlibrary_varmap._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userPassw'));
          // Block#: z=mD)62`^v(+5,tTevOJ
          workflowlibrary_varmap._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'processDefKey'));
          // Block#: P:@L;%C93,h].q1{Eb69
          workflowlibrary_varmap._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'urlSetup'));
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflowWithCredentials = initWorkflowWithCredentials;

      function initWorkflowWithCredentials(User, Password, initiator) {
        return new Promise(function(resolve, reject) {
          // Block#: zC@!f!v3k}}*b|GXa$-u
          if(!(User == null || Password == null)) {
            // Block#: ]^$Y;X0-}*l_4$nA?jB9
            workflowlibrary_varmap._userName = User;
            // Block#: Tx:Fiz?m4vg5,~ypEHr;
            workflowlibrary_varmap._userPassw = Password;
            // Block#: fYiCub|QVm,4;am/r5Ax
            com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://develop.snapclinical.net:8443","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
            com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(workflowlibrary_varmap._userName, workflowlibrary_varmap._userPassw, workflowlibrary_varmap._userName, "mobileApp", "https://develop.snapclinical.net:8443");
            // Block#: r]_8{Ov/L2qxdxQq0.DT
            if(initiator == null) {
              // Block#: u]~/HF,82OZm!?sA;$h]
              workflowlibrary_varmap._initiator = '';
            } else {
              // Block#: L?Dm~(C;%$KM[cs^wt{C
              workflowlibrary_varmap._initiator = initiator;
            }
          }
          // Block#: ^s$Sn}g4Wrilbw03t41H
          eraseParsedVars().then(response => {;
          });
          // Block#: Y@S#J}`:]1w3U^FU}d7F
          console.log('SDK initWorkflow with credentials called');
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push('SDK initWorkflow with credentials called');
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTask = completeAndGetNextTask;

      function completeAndGetNextTask(outcomeObj) {
        return new Promise(function(resolve, reject) {
          // Block#: 7=KJb9ZpU,se~aM[d,0g
          console.log(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: mysWPqPsV*o4%n_)0nH9
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._taskToBeCompleted, 'outcome')) {
            // Block#: A~!@U:B@{vHpa{R?sQ#{
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'outcome', outcomeObj);
          }
          // Block#: *AL$m8VnvpB+=K%.x9[g
          console.log(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._taskToBeCompleted)))].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._taskToBeCompleted)))].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: Tb%Z0:Q`rId2rhD:=/4l
          console.log(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(workflowlibrary_varmap._taskToBeCompleted))));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(workflowlibrary_varmap._taskToBeCompleted))));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: ^Vv#,#ip6}#r84@zpsv%
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(workflowlibrary_varmap._taskToBeCompleted,
            function(process_data) {
              // Block#: !F:A=9i{n^MTKen4#xJ;
              workflowlibrary_varmap._processData = process_data;
              // Block#: .}]B1v{@Ij+I6k[?]uut
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !fTLMH]:Zf0c|W{kE/[V
              console.log(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 26NQ/=^-rX@1,8O|CP#/
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: $2Mybx(ARQF?F..vx3Kc
              console.log(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: oDp}wFLVeirCQ#0?:^_m
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getInitVar = getInitVar;

      function getInitVar() {
        // Block#: gPq~?;_z-~G_(Bcn^=|d
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [workflowlibrary_varmap._initiator, workflowlibrary_varmap._userName, workflowlibrary_varmap._userPassw, workflowlibrary_varmap._processDefKey, workflowlibrary_varmap._urlSetup]);
        // Block#: N?w23TNVy09rj$)*e(Y3
        console.log(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessWithVars = startNewProcessWithVars;

      function startNewProcessWithVars(processDefKey, forceStartNewInstance, listOfVars) {
        return new Promise(function(resolve, reject) {
          // Block#: l`Yd*l[g8F.wxD10iBmH
          workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: fs7fA;$I_%*D,Q_;ej0e
          if(listOfVars != null) {
            // Block#: x7z{V{^lJy:6v9A:):i~
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(listOfVars, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string']))
            // Block#: Gd:QsRFiPFHepLX^;awJ
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'processVariables', listOfVars);
          }
          // Block#: $;SbM8S3Y=bM..5rEksT
          workflowlibrary_varmap._processDefKey = processDefKey;
          // Block#: (P${f{/X=Gx8=ZK=F3nT
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, workflowlibrary_varmap.tempDict1), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: YpWf.ePiTX),W68/JQ?j
              workflowlibrary_varmap._processData = process_data;
              // Block#: ^z?^L68XOE@d2!(k.7B8
              parseProcessData(false, null).then(response => {;
              });
              // Block#: TgLhWKzt0^{|!u~bXzy*
              console.log(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 9cQ,mM6!Y|yAmOz0d:rg
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: ~r=HiT_6_QbNMax2ZFL.
              console.log(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: ]g3vK,Q.($GQ{;;p2FkF
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTaskById = completeAndGetNextTaskById;

      function completeAndGetNextTaskById(outcomeId) {
        return new Promise(function(resolve, reject) {
          // Block#: Yvtdyc_^[]=}cSnI*~4e
          console.log(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: b#$ien{n?@z|Tuv9=bl8
          if(doesExistOutcome(outcomeId)) {
            // Block#: 5y1H.}mF7iDlhW.Iz_Xd
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'outcome', getOutcome(outcomeId));
          }
          // Block#: qI{slP6*N3L0!OWa8/pz
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(workflowlibrary_varmap._taskToBeCompleted,
            function(process_data) {
              // Block#: XdDy=(Gj`rF-EuuI.hEb
              workflowlibrary_varmap._processData = process_data;
              // Block#: !pxYgrn2JJKS#y%ha5xV
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !s|V2~N*I;QtUp3W*$~?
              console.log(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: @`ke?Ic1NMo4q~Vs8KRW
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: J=y3t29Dhb#p[*-{K]u#
              console.log(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: RN_Tr*,Y:K?.OtKTT$rK
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflow = initWorkflow;

      function initWorkflow() {
        return new Promise(function(resolve, reject) {
          // Block#: hSdJ!zGqd3nW`R(|Sf|b
          eraseParsedVars().then(response => {;
          });
          // Block#: 1,)Pmk4]Lm63aroPtn?T
          console.log('SDK initWorkflow without credentials called');
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push('SDK initWorkflow without credentials called');
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessData = getProcessData;

      function getProcessData() {
        // Block#: cJWzC?e4K2.s.bS5T3z+
        console.log(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._processData;
      }
      /**
       * To check if another task is available (true)
       * or the current flow is at the end (false).
       */
      this.doesExistCurrentTask = doesExistCurrentTask;

      function doesExistCurrentTask() {
        // Block#: =8(Ef*9BC62$E7_l3P#d
        console.log('CurrentTask: ');
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push('CurrentTask: ');
          workflowlibrary_varmap.debugService.printLog();
        }
        // Block#: p7lzgBtkx$1VaQ;ah~M0
        console.log(workflowlibrary_varmap._task);
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._task);
          workflowlibrary_varmap.debugService.printLog();
        }
        // Block#: _yNMsE4};MK%xzk^NnAp
        if(workflowlibrary_varmap._task == null) {
          return false;
        }
        // Block#: Dx14Nbp7RJ%;nhUmlA%g
        if((com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task)) == null) {
          return false;
        }
        return !!(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task)).length;
      }
      /**
       * Describe this function...
       */
      this.getCurrentTask = getCurrentTask;

      function getCurrentTask() {
        // Block#: A//H39vF:Nwf4)0Ptt)[
        console.log(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._task;
      }
      /**
       * Describe this function...
       */
      this.getForm = getForm;

      function getForm() {
        // Block#: hi_6#X@QWmYo``}%E6ns
        console.log(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._formData))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._formData))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formData;
      }
      /**
       * Describe this function...
       */
      this.setProcessVariable = setProcessVariable;

      function setProcessVariable(name2, value, type) {
        return new Promise(function(resolve, reject) {
          // Block#: fl``|]bZhX,hsd+4=UBz
          console.log(['SDK setProcessVariable num of vars: ', safeLength(workflowlibrary_varmap._processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['SDK setProcessVariable num of vars: ', safeLength(workflowlibrary_varmap._processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: /#+h`aY2tR8.(S4nB`Jc
          if(doesExistCurrentTask()) {
            // Block#: z-p:pd.s)zS|{{7^r{[c
            if(doesContainProcessVariableName(name2)) {
              // Block#: }rNCd{le_?[aGymKA/FM
              workflowlibrary_varmap.tempNum = 0;
              // Block#: Re(v%NPcP]DK#yyeoy!w
              var item_list = workflowlibrary_varmap._processVariabes;
              for(var item_index in item_list) {
                item = item_list[item_index];
                // Block#: ^!7$,e6QAx)K!Ixl.0mT
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
                  // Block#: *S+*GL/c@On+rlqx,}55
                  workflowlibrary_varmap.tempDict = item;
                  // Block#: J5@4/Gl5WsPEv-DhwD7/
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'value', value);
                  // Block#: R.N)idyNnfb7(I+skE3s
                  workflowlibrary_varmap._processVariabes[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
                }
                // Block#: 7/Us9:R!s_F~=37{d^Q?
                workflowlibrary_varmap.tempNum = workflowlibrary_varmap.tempNum + 1;
              }
            } else {
              // Block#: K8{b.]4*)fBtMo7}Ds[G
              workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'type', 'value'], [name2, type, value]);
              // Block#: wFb8gv7liSAXvA_Jgk.A
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap._processVariabes, workflowlibrary_varmap.tempDict)
            }
            // Block#: )}(N9doX5kiVPt#_uk5@
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._task, 'processVariables', workflowlibrary_varmap._processVariabes);
            // Block#: D-i;X3`Uwn^AClSlvd:5
            workflowlibrary_varmap._tasks[0] = workflowlibrary_varmap._task;
            // Block#: +a61$mWaDwwZKQTEgH~Y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'tasks', workflowlibrary_varmap._tasks);
            // Block#: fPHS4XlNp%eN-:,XOjB,
            console.log(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(workflowlibrary_varmap._processVariabes)));
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(workflowlibrary_varmap._processVariabes)));
              workflowlibrary_varmap.debugService.printLog();
            }
            // Block#: KlEG$rEaQ~Rk}950-A8S
            workflowlibrary_varmap.tempNum = getIndexOfVarInTaskToBeCompleted(name2);
            // Block#: ]SDFJ:[~R3NMXK*$@h~i
            workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'processVariables'));
            // Block#: I+_=:xhSHjH!OU$iVp(-
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "EQ", -1)) {
              // Block#: vN3ZQdo#dvO^)W0M/v`Z
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, workflowlibrary_varmap.tempDict)
            } else {
              // Block#: `g*^=/2Ty+Z434}h4Wjv
              workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
            }
            // Block#: @uV`SeGSX@u!S/V=^_:y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'processVariables', workflowlibrary_varmap.tempList);
            // Block#: {,PP60KJ^8T[^~BYqau~
            console.log(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(workflowlibrary_varmap.tempList)));
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(workflowlibrary_varmap.tempList)));
              workflowlibrary_varmap.debugService.printLog();
            }
          } else {
            // Block#: 31gi0ioB4Lvw}%V_e2v[
            console.log('SDK no current Task ... nothing to do');
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push('SDK no current Task ... nothing to do');
              workflowlibrary_varmap.debugService.printLog();
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.startFlow = startFlow;

      function startFlow() {
        return new Promise(function(resolve, reject) {
          // Block#: zTc|qmmU[Gt6iSegQ#l!
          startNewProcessInstance(workflowlibrary_varmap._processDefKey, true).then(response => {;
            if(response.name === "success") {
              // Block#: J?:2@%=k(-w=!#FR(G$M
              ShowProcessInfo().then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: %de7v4oS+C:*cqE:Vnbu
              console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: i26()7nO]yfWLMni[tzg
              AppendInfo('-- startFlow  ON FAILURE ', (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data))).then(response => {;
              });
            }
          });
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessVariables = getProcessVariables;

      function getProcessVariables() {
        // Block#: E`snYA58/d#sQh_a17C[
        console.log(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._processVariabes))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._processVariabes))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._processVariabes;
      }
      /**
       * To retrieve all the outcomes coming from the current form.
       */
      this.getOutcomes = getOutcomes;

      function getOutcomes() {
        // Block#: sy(^MV.6A9]*3VwE5d=[
        console.log(String('SDK getFormOutcomes  number of items: ') + String(safeLength(workflowlibrary_varmap._outcomes)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormOutcomes  number of items: ') + String(safeLength(workflowlibrary_varmap._outcomes)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._outcomes;
      }
      /**
       * Describe this function...
       */
      this.parseProcessData = parseProcessData;

      function parseProcessData(onlyTasks, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: @gAO(;-Sg]8To(=X}re4
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._processData, 'tasks')) {
            // Block#: Yr/Jjy)mmHX]y^R@fYj.
            if(onlyTasks) {
              // Block#: LFd#A)k1i#tv7du[`:iA
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'processDefinitionId', workflowlibrary_varmap._processDefId);
              // Block#: DEb*@bhZ(iB+Q*4jdIfX
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'processInstanceId', workflowlibrary_varmap._processInstId);
            } else {
              // Block#: SP]WIS;PVMZed}w;E,%l
              workflowlibrary_varmap._processDefId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._processData, 'processDefinitionId'));
              // Block#: )-n$f=^RE^s%/u/v5CG`
              workflowlibrary_varmap._processInstId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._processData, 'processInstanceId'));
            }
            // Block#: {)K1fEF5ZmskQZ(gCUMf
            workflowlibrary_varmap._tasks = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._processData, 'tasks'));
            // Block#: -|}FM!p8ouLw27^W5+^X
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap._tasks.length, "NEQ", 0)) {
              // Block#: hjaU2,-{9{E4g6;?bkQH
              if(taskName == null) {
                // Block#: wznhThYgRvX5+o#UsnFF
                workflowlibrary_varmap.tempNum = 0;
              } else {
                // Block#: l+-TCIW([@{]dFmVzBKP
                workflowlibrary_varmap.tempNum = findTask(taskName);
              }
              // Block#: EKSB-:X05^]lT.T}3xo$
              console.log(['SDK  Parse process data using this index    ', workflowlibrary_varmap.tempNum, ' to select the task in the list'].join(''));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(['SDK  Parse process data using this index    ', workflowlibrary_varmap.tempNum, ' to select the task in the list'].join(''));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 9n(mzPhQVqIP@tsP9}Q,
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "GTE", 0)) {
                // Block#: %Y.h?!mLo?*:XJ`?HC(x
                workflowlibrary_varmap._task = workflowlibrary_varmap._tasks[workflowlibrary_varmap.tempNum];
                // Block#: @s+xVTyZu?vH{3/QqK/M
                workflowlibrary_varmap._taskId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'taskId'));
                // Block#: ;lkB|GpVV+eKQ-NXc.[p
                workflowlibrary_varmap._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['taskId', 'processVariables'], [workflowlibrary_varmap._taskId, []]);
                // Block#: /n)2UnL6A#Yt+#`@=/!I
                console.log(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: w(1=`TR5)MjF5YS%4//%
                workflowlibrary_varmap._processVariabes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'processVariables'));
                // Block#: dt-R4,=3zf*9/Lf2{s(k
                workflowlibrary_varmap._formProperties = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'formProperties'));
                // Block#: 13nFK!PGr8GVn`j}+K0a
                buildOutcomeAndFieldMappingList().then(response => {;
                });
                // Block#: tlpg10)NnX990p@Dib{h
                buildCurrentInitiator().then(response => {;
                });
                // Block#: lQV-ld|j0(,1c+}iRQK2
                workflowlibrary_varmap._formKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'formKey'));
                // Block#: _xH3pb~tChiPpQO_m7%4
                if(workflowlibrary_varmap._formKey != null) {
                  // Block#: o(t:yCA-?1Xwkj5l.`bo
                  if(workflowlibrary_varmap._formKey != '') {
                    // Block#: Dcm3,A1%m7(Ld0be,b6q
                    console.log(workflowlibrary_varmap._task);
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._task);
                      workflowlibrary_varmap.debugService.printLog();
                    }
                    // Block#: ~|?3Hc+J|7y0s?}/MYHc
                    workflowlibrary_varmap._formData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'formData'));
                    // Block#: [?w3ImWd`tU6Gy)$L$oG
                    console.log(workflowlibrary_varmap._formData);
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._formData);
                      workflowlibrary_varmap.debugService.printLog();
                    }
                    // Block#: I_.O{No3oop2:d(jf,+^
                    workflowlibrary_varmap._formName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'name'));
                    // Block#: `iy*JV!dKW79X(^@lpt,
                    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'fields')) == null) {
                      // Block#: f3ws+*g.~+!U]N$xxR11
                      workflowlibrary_varmap._formFields = [];
                    } else {
                      // Block#: 6#|4G~yZXaOXUC/z9-3W
                      workflowlibrary_varmap._formFields = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'fields'));
                    }
                    // Block#: [%[RlD+;SFjjw_#uXGLy
                    console.log(workflowlibrary_varmap._formFields);
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._formFields);
                      workflowlibrary_varmap.debugService.printLog();
                    }
                    // Block#: 8Bokob5@%F}4F$o9O-Ym
                    workflowlibrary_varmap._outcomes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'outcomes'));
                    // Block#: `GuQb`Ket2{nA?)ypK%+
                    workflowlibrary_varmap._formId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'id'));
                    // Block#: 3mR|bI,_w:xDPPp!`yWL
                    buildTemplateKey().then(response => {;
                    });
                    // Block#: *(vF8uJk=}.eajVrOY5S
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData', com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'key', 'name', 'fields'], [workflowlibrary_varmap._formId, workflowlibrary_varmap._formKey, workflowlibrary_varmap._formName, []]));
                    // Block#: 4ztn~_pPUfT+$CuSOtcZ
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'outcome', com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary());
                    // Block#: SbEu^j+BhYGK*7#yBG;H
                    console.log(['SDK  task to be completed, added ', 'formId formKey and formName:', workflowlibrary_varmap._formId, ' ', workflowlibrary_varmap._formKey, ' ', workflowlibrary_varmap._formName, '  and fields as empty list'].join(''));
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(['SDK  task to be completed, added ', 'formId formKey and formName:', workflowlibrary_varmap._formId, ' ', workflowlibrary_varmap._formKey, ' ', workflowlibrary_varmap._formName, '  and fields as empty list'].join(''));
                      workflowlibrary_varmap.debugService.printLog();
                    }
                  }
                }
              } else {
                // Block#: *w]5bGrB$}/{=EwsppeN
                eraseParsedTasks().then(response => {;
                });
              }
            } else {
              // Block#: }cF{ubs(?uKMmX=_xdGE
              eraseParsedTasks().then(response => {;
              });
            }
          } else {
            // Block#: R`K;C%o,{rT^ES.)8EH;
            if(onlyTasks == false) {
              // Block#: E#Cds}sp)(bP`iRL`A@h
              eraseParsedVars().then(response => {;
              });
            } else {
              // Block#: DT_2-W;?,?{zDoe@jp)o
              eraseParsedTasks().then(response => {;
              });
            }
          }
        });
      }
      /**
       * To set the value of a specific field (addressed by its id) in the current form.
       */
      this.setField = setField;

      function setField(id, value) {
        return new Promise(function(resolve, reject) {
          // Block#: TzKGO;g_YjLqhS#0X?XE
          workflowlibrary_varmap.tempNum = 0;
          // Block#: Gmr6DFY_$]$Onm?wH=K8
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "LT", workflowlibrary_varmap._formFields.length)) {
            // Block#: ya6:gp/0UhHZ^jZ,n{ws
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formFields[workflowlibrary_varmap.tempNum], 'id'), "EQUAL", id)) {
              // Block#: BbpN{WQk!0#mQr.=Y1L;
              workflowlibrary_varmap.tempDict = workflowlibrary_varmap._formFields[workflowlibrary_varmap.tempNum];
              // Block#: ;,+{i7(;#tUIDzDdf{KF
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'value', value);
              // Block#: lUqh=7+A/C(IshM=g9Rk
              workflowlibrary_varmap._formFields[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
              // Block#: MAcVF+F1OQH~RUf4yV(d
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._formData, 'fields', workflowlibrary_varmap._formFields);
              // Block#: XU[?$x9Vd_{6#8=^H.?5
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._task, 'formData', workflowlibrary_varmap._formData);
              // Block#: o6A9$vEvQ$CX`hZNDqc,
              workflowlibrary_varmap._tasks[0] = workflowlibrary_varmap._task;
              // Block#: 6IEe*mXQ+Hb:/3;b%:n~
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'tasks', workflowlibrary_varmap._tasks);
              // Block#: $GFA%qdt(C`srr69+Q1@
              console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', workflowlibrary_varmap.tempNum].join(''));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', workflowlibrary_varmap.tempNum].join(''));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: uR5[y9z{]{l:~;r1?V9c
              workflowlibrary_varmap.tempNum = getIndexOfFieldInTaskToBeCompleted(id);
              // Block#: _E;9Ai[d5z:$/`.c%=~I
              workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData'), 'fields'));
              // Block#: xML5Wx(Qp/zE(45t7ol!
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "EQ", -1)) {
                // Block#: UI[pML9Gr$GM?Q/B9gg8
                com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, workflowlibrary_varmap.tempDict)
                // Block#: of_9V_*h-7[70WY{BH#1
                console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
              } else {
                // Block#: jYu#z)/4=AT3N1OT.QDA
                workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
                // Block#: v0v6MPF7=oRnhD2iJyJj
                console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', workflowlibrary_varmap.tempNum].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', workflowlibrary_varmap.tempNum].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
              }
              // Block#: v#u]|-I^I$=I%Ra[/shq
              workflowlibrary_varmap.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData'));
              // Block#: )fj(zVkdRK;R9vGUb5`u
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'fields', workflowlibrary_varmap.tempList);
              // Block#: 4!+*uIn7R;Tlg62eD_}_
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData', workflowlibrary_varmap.tempDict1);
              // Block#: :u:dF[+1Igp{Y96s#Af1
              workflowlibrary_varmap.tempNum = workflowlibrary_varmap._formFields.length;
            }
            // Block#: J*42yn66r4)vZ1]G,:{R
            workflowlibrary_varmap.tempNum = workflowlibrary_varmap.tempNum + 1;
          }
        });
      }
      /**
       * Describe this function...
       */
      this.eraseParsedVars = eraseParsedVars;

      function eraseParsedVars() {
        return new Promise(function(resolve, reject) {
          // Block#: :;k}H}ugLxKk@y`$!0.+
          workflowlibrary_varmap._processDefId = '';
          // Block#: 4#+=3[=gnmpKOQe+lS2b
          workflowlibrary_varmap._processInstId = '';
          // Block#: @klgC/T(4IX/WgYh24=/
          workflowlibrary_varmap._processData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: Tu5:|4f`Q0HDD8OoLA;9
          eraseParsedTasks().then(response => {;
          });
        });
      }
      /**
       * Describe this function...
       */
      this.eraseProcessInstances = eraseProcessInstances;

      function eraseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: rxyAb{L]yataOl5ty$~p
          workflowlibrary_varmap._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: j%g1*^M^9htiO1N,!vXP
          workflowlibrary_varmap._processInstances = [];
        });
      }
      /**
       * Describe this function...
       */
      this.getFormProperties = getFormProperties;

      function getFormProperties() {
        // Block#: Q9K_jdXSe}PAge/y=Im@
        console.log(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._formProperties))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._formProperties))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formProperties;
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldByRef = findFieldByRef;

      function findFieldByRef(UIObjRef) {
        // Block#: E`%o_%L1dGWeMJRKQrxZ
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: AmMLWFRjWTe2^Zsu;kDQ
        if(UIObjRef == null) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: A|bEyO8:0#l8IBVOquC+
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(UIObjRef, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: 0-fD_8Yu$rxjLln(~]Z.
        var item_list2 = workflowlibrary_varmap._formFields;
        for(var item_index2 in item_list2) {
          item = item_list2[item_index2];
          // Block#: }:t(bf}yQx-BclxW}L/T
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'params')) {
            // Block#: !?53|IPkE6/t6r+R#ADI
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref')) {
              // Block#: U0Zp:/!GtSl{nv+A!ed%
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref'), "EQUAL", UIObjRef)) {
                // Block#: jO4#NAf@zsC)3Q48by)U
                workflowlibrary_varmap.tempDict = item;
              }
            }
          }
        }
        // Block#: Avn^RG~mVyG$vg%D6oud
        console.log(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFormKey = getFormKey;

      function getFormKey() {
        // Block#: UF+`UV=b`,zevWhv#k+]
        console.log(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formKey)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formKey)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formKey;
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessInstance = startNewProcessInstance;

      function startNewProcessInstance(processDefKey, forceStartNewInstance) {
        return new Promise(function(resolve, reject) {
          // Block#: }q/,[;-@$g=WGfa}:bNG
          workflowlibrary_varmap.tempParam = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: _.a@//oU1{WOm%#o/xf1
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempParam, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string'])]);
          // Block#: zIQs3yCF/NkA(?4/|u-v
          if(workflowlibrary_varmap._initiator != null) {
            // Block#: ;/m,htUp.hBP{I/Ez~XO
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
              // Block#: sPF35ko=|eWU*@pLPx7M
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempParam, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: @]Ba!E=3tn~Oj+Wf+FOr
          workflowlibrary_varmap._processDefKey = processDefKey;
          // Block#: w?kgPk4G/`abd)qr0~)@
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, workflowlibrary_varmap.tempParam), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: 4f$QXZ+E0Aq{G1kdn:BL
              workflowlibrary_varmap._processData = process_data;
              // Block#: Ffc^U`Q4:KIi:s8TwD)p
              parseProcessData(false, null).then(response => {;
              });
              // Block#: YNvH8H}e45(z6)yl=%zg
              console.log(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: `XnGAXK_~8#a8^^1Q0pB
              resolve({
                name: "success",
                data: workflowlibrary_varmap._processData
              });
            },
            function(error_data) {
              // Block#: QxAXGB2r!RBjr?P,.I/w
              console.log(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: FWJsGFdBn_II9yj_]B1g
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfFieldInTaskToBeCompleted = getIndexOfFieldInTaskToBeCompleted;

      function getIndexOfFieldInTaskToBeCompleted(id) {
        // Block#: 5=t7)tc,=*|1%EX*E:ar
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._taskToBeCompleted, 'formData')) {
          // Block#: e^MNyo:cL}rgzwQiDh:W
          workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData'), 'fields'));
          // Block#: I8*RkEssW?gZN6oC^`fv
          workflowlibrary_varmap.tempN2 = 0;
          // Block#: Rmax|B_*1=ZM(jS@if@z
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempN2, "LT", workflowlibrary_varmap.tempList.length)) {
            // Block#: Vd=`^eeI0qj+J}/%LOK$
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempN2], 'id'), "EQUAL", id)) {
              return workflowlibrary_varmap.tempN2;
            }
            // Block#: Z{Jl#bGbdcj];r]_hB?%
            workflowlibrary_varmap.tempN2 = workflowlibrary_varmap.tempN2 + 1;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.doesContainProcessVariableName = doesContainProcessVariableName;

      function doesContainProcessVariableName(target) {
        // Block#: V|qJmmTDcBN/R;.~0*!x
        if(target == null || com.fc.JavaScriptDistLib.TextLib.textComparison(target, "EQUAL", '')) {
          return false;
        }
        // Block#: ryPt/oi=;{`_=;[IsFSs
        var item_list3 = workflowlibrary_varmap._processVariabes;
        for(var item_index3 in item_list3) {
          item = item_list3[item_index3];
          // Block#: /~(YAz$I4GpUepu5HhmT
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", target)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getTemplateKey = getTemplateKey;

      function getTemplateKey() {
        // Block#: +I(?+Ahsb|IJ:@-Qd^qq
        console.log(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._templateKey)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._templateKey)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._templateKey;
      }
      /**
       * Describe this function...
       */
      this.parseProcessInstances = parseProcessInstances;

      function parseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: A+6!5KzJQo/kx!@}Et:g
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap._processInstances.length, "GT", 0)) {
            // Block#: f5%|B..:cO+qaH/~Zye1
            workflowlibrary_varmap._processInstance = workflowlibrary_varmap._processInstances[0];
            // Block#: c-;=6HC9M$?A#fcC5)-2
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._processInstance, 'processInstanceId')) {
              // Block#: e1I,qRai}Ej2NQ_D2mB|
              console.log(['SDK parseProcessInstances num of instances: ', workflowlibrary_varmap._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processInstance)))].join(''));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(['SDK parseProcessInstances num of instances: ', workflowlibrary_varmap._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processInstance)))].join(''));
                workflowlibrary_varmap.debugService.printLog();
              }
            }
          } else {
            // Block#: ]Hdx)(J/f!Pd:P7lp,Z1
            workflowlibrary_varmap._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: 13[HIvY12@6=}71jk5/I
            console.log('SDK parseProcessInstances NO instances');
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push('SDK parseProcessInstances NO instances');
              workflowlibrary_varmap.debugService.printLog();
            }
          }
        });
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveProcessInstances = getActiveProcessInstances;

      function getActiveProcessInstances(processDefKey, latestVersion) {
        return new Promise(function(resolve, reject) {
          // Block#: z2@:P7^44=~j)4}58Q-Y
          workflowlibrary_varmap._processDefKey = processDefKey;
          // Block#: j*]!vGv^qc[AGgp]`PY8
          workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processDefinitionKey'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._processDefKey))]);
          // Block#: 4t|Sp9YrZXU$Hx`=Lu};
          if(latestVersion != null) {
            // Block#: 5Z/WWUm#YB_jGZ?aCUMk
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'latestVersion', latestVersion);
          }
          // Block#: (?q[nPn/3eWB8,eb:c)W
          if(workflowlibrary_varmap._initiator != null) {
            // Block#: EwO-oR3l$s-)J!ZV]?OJ
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
              // Block#: KjohidB/ikkCe{|^PnsL
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: $J:L#(;s|~*0GI[NeS,n
          console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: d4nuXQ:5M8V2yVC2y+cp
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/flow-api/snap-api/get-process-instances', "POST", JSON.stringify(workflowlibrary_varmap.tempDict1),
            function(data) {
              // Block#: ~wZ/RQ.G`)9#C+xdt?lo
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(data, 'processInstances')) {
                // Block#: r6o$^E*L7-2jj(nbidL1
                workflowlibrary_varmap._processInstances = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'processInstances'));
                // Block#: W@/NoI4WJ=cM9gHZ]Z{1
                console.log('SDK getActiveProcessInstances success');
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push('SDK getActiveProcessInstances success');
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: ^*^ulNcZnM=2C;BIiBe!
                parseProcessInstances().then(response => {;
                });
                // Block#: y/ur{vaAvbQV?t^(uQqL
                resolve({
                  name: "success",
                  data: data
                });
              } else {
                // Block#: gh%$j0MN=-[jO#@E^*nZ
                console.log('SDK getActiveProcessInstances NO processInstances field in dictionary');
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push('SDK getActiveProcessInstances NO processInstances field in dictionary');
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: FKr.fH,-V)8]rYEgqsS2
                resolve({
                  name: "failure",
                  data: data
                });
              }
            },
            function(error) {
              // Block#: Fy|bVWQgN?k:ln$%r/3`
              console.log(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: R5:`s`FGH$IfPAZQ_IT_
              resolve({
                name: "failure",
                data: error
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.printoutListOfDict = printoutListOfDict;

      function printoutListOfDict(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: aLpZNj6,C{nQZ/8N/?+5
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {
            // Block#: oa!7k8bDPEV(7Yz{Gq2d
            workflowlibrary_varmap.tempListKey = [];
            // Block#: JNrWv?.{/%v[C^[I+C$`
            workflowlibrary_varmap.tempListKey = (com.fc.JavaScriptDistLib.Dictionary.getKeys(inputListOfObj[0]));
            // Block#: ]aeoYkEpa;]uy2w`G{*{
            var indexpo1_end = inputListOfObj.length;
            var indexpo1_inc = 1;
            if(1 > indexpo1_end) {
              indexpo1_inc = -indexpo1_inc;
            }
            for(indexpo1 = 1; indexpo1_inc >= 0 ? indexpo1 <= indexpo1_end : indexpo1 >= indexpo1_end; indexpo1 += indexpo1_inc) {}
          }
        });
      }
      /**
       * To retrieve all data coming from all the fields in the current form.
       */
      this.getFields = getFields;

      function getFields() {
        // Block#: 2AE2h7pC5GiDeqp.l2RD
        console.log(String('SDK getFields  number of items: ') + String(safeLength(workflowlibrary_varmap._formFields)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFields  number of items: ') + String(safeLength(workflowlibrary_varmap._formFields)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formFields;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMappingNames = getOutcomeAndFieldMappingNames;

      function getOutcomeAndFieldMappingNames() {
        // Block#: }]hO!V5itfl+*{@e+3t;
        workflowlibrary_varmap.tempList = [];
        // Block#: =E!_C0Emn$i=4w5BY1U{
        var item_list4 = workflowlibrary_varmap._outcomeAndFieldMapping;
        for(var item_index4 in item_list4) {
          item = item_list4[item_index4];
          // Block#: (`rebY,UT0Yp!34(.Ddb
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'))))
        }
        // Block#: URUoW(x4w51U!V.Ij+ls
        console.log(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap.tempList))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap.tempList))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getRadioButtons = getRadioButtons;

      function getRadioButtons(id) {
        // Block#: kL~]$:SJ`oHep_=_meyI
        workflowlibrary_varmap.tempList = [];
        // Block#: O5*Z-q4DqKqp:D5TDq8|
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: ?lZ`A_qD[jdQ2wwoB5)z
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: `7;|(C`F]~KCQv~l|D9k
            workflowlibrary_varmap.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: pl9Eqx:ncTQfLCrr~aD2
        console.log(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getFormName = getFormName;

      function getFormName() {
        // Block#: aKTnD6jr`A{q{YTZwO7Z
        console.log(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formName)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formName)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formName;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMapping = getOutcomeAndFieldMapping;

      function getOutcomeAndFieldMapping() {
        // Block#: HYJJO3YM}m5PH)dot_;L
        console.log(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._outcomeAndFieldMapping;
      }
      /**
       * Describe this function...
       */
      this.eraseParsedTasks = eraseParsedTasks;

      function eraseParsedTasks() {
        return new Promise(function(resolve, reject) {
          // Block#: `1)6I?;*46Elnhk!$W-%
          workflowlibrary_varmap._tasks = [];
          // Block#: ]erpGI6Z!az:aaD*0IMe
          workflowlibrary_varmap._task = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: tsGx{m1uu,{DX]t/$:1A
          workflowlibrary_varmap._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: L$AjHOz3TmMbAy:IH!6(
          workflowlibrary_varmap._taskId = '';
          // Block#: E/4U*6@{zzW-2_iiNoAv
          workflowlibrary_varmap._processVariabes = [];
          // Block#: yvsCWM*;UKj4XKK6hFA4
          workflowlibrary_varmap._formKey = '';
          // Block#: 4DX?v}b)@G|W2MFTa=;M
          workflowlibrary_varmap._formName = '';
          // Block#: }n|T|=,dlISig~Y?W-Mx
          workflowlibrary_varmap._formProperties = [];
          // Block#: -?Waxyi;sEo1UMZiyL]Y
          workflowlibrary_varmap._outcomeAndFieldMapping = [];
          // Block#: rE)vDJewW2F{[A7rk$#5
          workflowlibrary_varmap._templateType = '';
          // Block#: _is#z`ZULGZl!a_NauGg
          workflowlibrary_varmap._templateKey = '';
          // Block#: Ayd96ng%IgXwf28dtSEx
          workflowlibrary_varmap._formData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: pHR%GqwfZG[oqh_(Y0MH
          workflowlibrary_varmap._formFields = [];
          // Block#: {YG|c3Fb12Ro}cZ[9gCq
          workflowlibrary_varmap._outcomes = [];
          // Block#: |[z2#-caB;%Pd/=[|f31
          workflowlibrary_varmap._formId = '';
        });
      }
      /**
       * To retrieve all data coming from a specific
       * field (addressed by its id) in the current form.
       */
      this.getField = getField;

      function getField(id) {
        // Block#: xL!qrflVW3U]^6E[Ka7X
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: )sJIHe}gUXt?_9iK+^0?
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: XgNIt?jJ6?T9CsWs3/:U
        var item_list5 = workflowlibrary_varmap._formFields;
        for(var item_index5 in item_list5) {
          item = item_list5[item_index5];
          // Block#: !`bO*xQV7m:mj+Q|}a*}
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: %]a_L$pkI|-oIgp;d_^~
            workflowlibrary_varmap.tempDict = item;
          }
        }
        // Block#: {qd=G*Ep}cbKLFgQA)m?
        console.log(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFieldAttribute = getFieldAttribute;

      function getFieldAttribute(id, attribute) {
        // Block#: AE8/N]U,,8buovGLSUT^
        workflowlibrary_varmap.tempDict = getField(id);
        // Block#: .Fqp|67m^Ay!]7@~[6)L
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, attribute))) {
          return null;
        }
        // Block#: AMknf3K|MoXZ{H:1R/_Z
        console.log(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getCheckBoxFields = getCheckBoxFields;

      function getCheckBoxFields() {
        // Block#: KgYQHyA[{0h%=dh`_w=w
        workflowlibrary_varmap.tempList = [];
        // Block#: x=6]f[D:]WW2.Ae_b(LN
        var item_list6 = workflowlibrary_varmap._formFields;
        for(var item_index6 in item_list6) {
          item = item_list6[item_index6];
          // Block#: !VHezD%rcRIQgXbY6I#-
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'boolean') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'FormField')
          ) {
            // Block#: W.R+J~2c.47gbb7g=0Kr
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, item)
          }
        }
        // Block#: H2)WXl^eh~i-@e^Sdj_m
        console.log(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(workflowlibrary_varmap.tempList)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(workflowlibrary_varmap.tempList)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getProcessVariable = getProcessVariable;

      function getProcessVariable(name2) {
        // Block#: ;#jDl#n`yf:1,8;:lnAR
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: XltA0Qsjuc@qZk+g@D:~
        if(name2 == null) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: @(^uxre=m-ru5AROPHfj
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(name2, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: .t6K,XR}:7`WLDV*s|bh
        var item_list7 = workflowlibrary_varmap._processVariabes;
        for(var item_index7 in item_list7) {
          item = item_list7[item_index7];
          // Block#: M[|u!ld}E3HE4Gq?d?Cb
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
            // Block#: l}su24J5MF;*~WC.!bw!
            workflowlibrary_varmap.tempDict = item;
          }
        }
        // Block#: XwO+q]~ZbFl5q];Gp1h{
        console.log(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFormProperty = getFormProperty;

      function getFormProperty(id) {
        // Block#: P==W8qd^sLKt/U/T!A`O
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: NjA`f7iC6R|Nvuuh_zHT
        if(id == null) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: ZN%M9~+IRToLl{9Tvj;W
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: 7i.OVNCzsfdlV2q4u7%G
        if(workflowlibrary_varmap._formProperties != null) {
          // Block#: lzsZLHdLML%ib`^$UT~b
          var item_list8 = workflowlibrary_varmap._formProperties;
          for(var item_index8 in item_list8) {
            item = item_list8[item_index8];
            // Block#: /x7cK`HZ;{.hb0lNE]Uo
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              // Block#: nj@:3IQ:)z(t:K9Ob{T@
              workflowlibrary_varmap.tempDict = item;
            }
          }
        }
        // Block#: K8AE]-RKuIY5h7=!{^BM
        console.log(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveTasks = getActiveTasks;

      function getActiveTasks(processDefKey, processInstanceId, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: ey(cV_wHzhJ9H6qXD]37
          workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: f12dw.TGq}s(s1yD^/lp
          if(processDefKey != null) {
            // Block#: J6Z=cf|3x%@18q=k5[q)
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processDefKey, "EQUAL", '')) {
              // Block#: HB|OVu=^enpx,j^/]R6s
              workflowlibrary_varmap._processDefKey = processDefKey;
              // Block#: rL:v7E@!K_U=|k_~WrLT
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'processDefinitionKey', workflowlibrary_varmap._processDefKey);
            }
          }
          // Block#: 4!R@`C:h_-#N0Z0Rep2}
          if(processInstanceId != null) {
            // Block#: ?t}~z.*O`5RA;}2sJD;I
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processInstanceId, "EQUAL", '')) {
              // Block#: oCeYVNOV{Zy{9F$2Gj9~
              workflowlibrary_varmap._processInstId = processInstanceId;
              // Block#: [vM2Gu]]r2A^|hQ2c$D/
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'processInstanceId', workflowlibrary_varmap._processInstId);
            }
          }
          // Block#: /8$vg`tlvr)I/-qrnq)f
          if(workflowlibrary_varmap._initiator != null) {
            // Block#: bGv$z]%iZx_hy^A(mn]$
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
              // Block#: m,a3ucfMrL!k_U,{_EO0
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: /Ow/jfKcIa%l$Qr_T{C~
          com.fc.JavaScriptDistLib.SnapClinical.getActiveTasks(workflowlibrary_varmap.tempDict1,
            function(active_tasks) {
              // Block#: Y+XH|qV1|L_]qsg1Qys%
              workflowlibrary_varmap._processData = active_tasks;
              // Block#: K.t.2K}]vIh6/Mf#l.3b
              parseProcessData(true, taskName).then(response => {;
              });
              // Block#: /HzjPf1m|C+|jS~?f0;T
              console.log(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: Yc3-G+0JFUnjl+/[0S4u
              resolve({
                name: "success",
                data: active_tasks
              });
            },
            function(error_data) {
              // Block#: ?is]iK53/8^j+r-H;FuH
              console.log(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 2Uo.6@:,;O.;_YLzMYC5
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getCurrentInitiator = getCurrentInitiator;

      function getCurrentInitiator() {
        // Block#: $9@jRx_-Dx:f$AAw6RA$
        console.log(String('SDK getCurrentInitiator: ') + String(workflowlibrary_varmap._currentInitiator));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getCurrentInitiator: ') + String(workflowlibrary_varmap._currentInitiator));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._currentInitiator;
      }
      /**
       * Describe this function...
       */
      this.buildTemplateKey = buildTemplateKey;

      function buildTemplateKey() {
        return new Promise(function(resolve, reject) {
          // Block#: [SyH.#_-!8t(}vV+!]^r
          workflowlibrary_varmap._templateKey = '';
          // Block#: Ag5u~N%yOV)||l]b0^lU
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._formData, 'properties')) {
            // Block#: iWd7*23H#sqw+wfT^MFF
            workflowlibrary_varmap.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'properties'));
            // Block#: j@$$-rt-WX$u2}g.j5Ak
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict1, 'templateKey')) {
              // Block#: GhC~vu/a#D(a~p%@KXYR
              workflowlibrary_varmap._templateKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict1, 'templateKey'));
            }
          }
        });
      }
      /**
       * To set the value of a specific field (addressed
       * by its UIObjRef) in the current form.
       */
      this.setFieldByRef = setFieldByRef;

      function setFieldByRef(UIObjRef, value) {
        return new Promise(function(resolve, reject) {
          // Block#: PkA[wrI4fzxst0S;MTh/
          setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id')), (com.fc.JavaScriptDistLib.TextLib.convertToText(value))).then(response => {;
          });
          // Block#: zrA8?}+!5{(%@ttT3R:R
          console.log(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfVarInTaskToBeCompleted = getIndexOfVarInTaskToBeCompleted;

      function getIndexOfVarInTaskToBeCompleted(name2) {
        // Block#: keut5NnNVASw]WxPR@s;
        workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'processVariables'));
        // Block#: 6B7]HI%Y.#Ryu:^p|8Vl
        workflowlibrary_varmap.tempN2 = 0;
        // Block#: |oK40tIWA!G)nm0(!#{#
        while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempN2, "LT", workflowlibrary_varmap.tempList.length)) {
          // Block#: ``J|E}D/!f~A@;(OT{jy
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempN2], 'name'), "EQUAL", name2)) {
            return workflowlibrary_varmap.tempN2;
          }
          // Block#: +9z_@/4V1Jjk$_#N5B.v
          workflowlibrary_varmap.tempN2 = workflowlibrary_varmap.tempN2 + 1;
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.setQueryVarInitiator = setQueryVarInitiator;

      function setQueryVarInitiator(inputDict) {
        // Block#: I`C*@9m{sn9c]v}6dnv*
        workflowlibrary_varmap.tempDict = inputDict;
        // Block#: [S_s%}=?(;v%vsnm]:{p
        if(workflowlibrary_varmap._initiator != null) {
          // Block#: Xw|Dfl+,w{-|0ltSXXli
          if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
            // Block#: ;t],Gxq}M}S+%nP90]7;
            if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, 'queryVariables'))) {
              // Block#: nO3?[}L8RY0-9[hmN[+q
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'queryVariables', []);
            }
            // Block#: 2Sp2gT#p/y!IWM5vevAa
            workflowlibrary_varmap.tempNum = 0;
            // Block#: Y}SNhFxy2P/ExErGTg2!
            workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'queryVariables'));
            // Block#: h8r8Dw9qtI7.+.LJkN_+
            var item_list9 = workflowlibrary_varmap.tempList;
            for(var item_index9 in item_list9) {
              item = item_list9[item_index9];
              // Block#: JRdHih:eqQ-g?iGN$d_j
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
                // Block#: Ta+xCSU=LZd)lxB3NgjU
                workflowlibrary_varmap.tempDict1 = item;
                // Block#: Ih]Yt~lm~L4A$drxq]tF
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'value', workflowlibrary_varmap._initiator);
                // Block#: M6cW/C`;U/q^fS9L[Ej*
                workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict1;
                // Block#: b8XTt8?7G*(ol#^n()E_
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'queryVariables', workflowlibrary_varmap.tempList);
                // Block#: ekdY(*D4A!*$smi,OF{p
                console.log(['SDK setQueryVarInitiator .. updating initiator value at index: ', workflowlibrary_varmap.tempNum, '  value is: ', workflowlibrary_varmap._initiator].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK setQueryVarInitiator .. updating initiator value at index: ', workflowlibrary_varmap.tempNum, '  value is: ', workflowlibrary_varmap._initiator].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: m?AKo%Adnv9FMq6Dt:7b
                if(true) {
                  return workflowlibrary_varmap.tempDict;
                }
              }
              // Block#: aT~mP3uMj`0L^4p[X$8%
              workflowlibrary_varmap.tempNum = workflowlibrary_varmap.tempNum + 1;
            }
            // Block#: ouS*NN(l-!a8Ff4n!qee
            workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string']);
            // Block#: -?k/m#jcx/L7BU^]q)=C
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, workflowlibrary_varmap.tempDict1)
            // Block#: zwxfx]Snmt,dhQIVd/x$
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'queryVariables', workflowlibrary_varmap.tempList);
            // Block#: du/brfY=h5-7zd%K:04|
            console.log(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(workflowlibrary_varmap._initiator));
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(workflowlibrary_varmap._initiator));
              workflowlibrary_varmap.debugService.printLog();
            }
          }
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * To retrieve the name of a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldNameByRef = findFieldNameByRef;

      function findFieldNameByRef(UIObjRef) {
        // Block#: 82f25)8;O:)08a%$#cU_
        workflowlibrary_varmap.tempDict = findFieldByRef(UIObjRef);
        // Block#: dZ6]%)-~$L%6{Mk55nI3
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, 'name')) {
          // Block#: XFP`bPN%G@!O_uD.FJ$A
          workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'));
        } else {
          // Block#: vu%vGt,6Uk:8L8PK=zm!
          workflowlibrary_varmap.tempParam = '';
        }
        // Block#: c~^fO3=s}Uv?m-iM}1%a
        console.log(['findFieldNameByRef: ', UIObjRef, ' name: ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldNameByRef: ', UIObjRef, ' name: ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.findTask = findTask;

      function findTask(taskName) {
        // Block#: WTC6-HfO,mUMX(#YO3~2
        if(taskName == null) {
          return 0;
        }
        // Block#: wsgIeYDT,l}jybt9a`;a
        var index_end = workflowlibrary_varmap._tasks.length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: 6_Q{yudk/vZ52}y]C],a
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._tasks[index], 'name'), "EQUAL", taskName)) {
            return index;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.getDropDown = getDropDown;

      function getDropDown(id) {
        // Block#: xpHGkF|gd$#}]6DXju!`
        workflowlibrary_varmap.tempList = [];
        // Block#: k{zx,_t0ebEM0Van4H6Z
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: gfCE?yFUub11fN8:|xka
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: r:H~(ApVAgsg%=0IG@/]
            workflowlibrary_varmap.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: vF*EB]#~pvJ}^{~QI{v7
        console.log(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.buildOutcomeAndFieldMappingList = buildOutcomeAndFieldMappingList;

      function buildOutcomeAndFieldMappingList() {
        return new Promise(function(resolve, reject) {
          // Block#: !zTRIn_acFMrK?Qf3uuD
          workflowlibrary_varmap._outcomeAndFieldMapping = [];
          // Block#: s9I,tr88FpWEs8]EaSP}
          workflowlibrary_varmap._templateType = '';
          // Block#: -@#eG~U^wUN{4U5{;s%q
          var item_list10 = workflowlibrary_varmap._formProperties;
          for(var item_index10 in item_list10) {
            item = item_list10[item_index10];
            // Block#: ?xKhVH~{w,}O*{s)K4lp
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'outcomeAndFieldMapping')) {
              // Block#: ,O7OB-6,?b!frFT$`:Iz
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'enum')) {
                // Block#: =udcCLDdQ[hOmcD?;RJQ
                workflowlibrary_varmap._outcomeAndFieldMapping = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'enumValues'));
              }
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'TemplateType')) {
              // Block#: bfT8Pyt-47nEF{@LPX/*
              workflowlibrary_varmap._templateType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
            }
          }
          // Block#: AOC3_A!HOy:1Vt=_jSkr
          console.log(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping)));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping)));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: IqKY2LntscRsSm9L0vt,
          console.log(String('SDK buildTemplateType: ') + String(workflowlibrary_varmap._templateType));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK buildTemplateType: ') + String(workflowlibrary_varmap._templateType));
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.setCheckBoxFields = setCheckBoxFields;

      function setCheckBoxFields(checkBoxValues) {
        return new Promise(function(resolve, reject) {
          // Block#: _XrnXkK56IqcC5i6s/4L
          workflowlibrary_varmap.tempList = checkBoxValues;
          // Block#: ~/0+F:mGWg/`jvO#WdDp
          var item_list11 = workflowlibrary_varmap.tempList;
          for(var item_index11 in item_list11) {
            item = item_list11[item_index11];
            // Block#: ]-AtzMIeHm7qiJ7+f;D{
            setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id')), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'))).then(response => {;
            });
          }
          // Block#: KqQYWVs-xp8oPJJ2DD+/
          console.log(['SDK setCheckBoxFields   set the value of ', safeLength(workflowlibrary_varmap.tempList), 'item/items'].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['SDK setCheckBoxFields   set the value of ', safeLength(workflowlibrary_varmap.tempList), 'item/items'].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getFieldValue = getFieldValue;

      function getFieldValue(id) {
        // Block#: s6FqVVq=NZ#ucQQU3:zG
        workflowlibrary_varmap.tempParam = getFieldAttribute(id, 'value');
        // Block#: $6dm%.yz`%+?YAu@Tl]~
        console.log(['SDK getFieldValue id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFieldValue id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getFieldLabel = getFieldLabel;

      function getFieldLabel(id) {
        // Block#: p|}E|`~~yY28XRG_.w6w
        workflowlibrary_varmap.tempParam = getFieldAttribute(id, 'name');
        // Block#: Tn]~AZrqwG*RLVYIvt%b
        console.log(['SDK getFieldName id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFieldName id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * To retrieve the value of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldValueByRef = findFieldValueByRef;

      function findFieldValueByRef(UIObjRef) {
        // Block#: -pa`9ks9V+mL|=~ak=fe
        workflowlibrary_varmap.tempParam = findFieldByRef(UIObjRef);
        // Block#: ;WKPLteeJU.q2Aljj_Dy
        if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempParam)).length) {
          return '';
        }
        // Block#: VZl5#iC7FW`s7g:hqcj(
        workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempParam, 'value'));
        // Block#: cg,DLy$PagPQ6zV#fP1$
        console.log(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempParam))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempParam))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.ShowProcessInfo = ShowProcessInfo;

      function ShowProcessInfo() {
        return new Promise(function(resolve, reject) {
        });
      }
      /**
       * Describe this function...
       */
      this.printoutListOfStrings = printoutListOfStrings;

      function printoutListOfStrings(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: ?xT;8-,qmT0}VudEmXag
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {}
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessVariableValue = getProcessVariableValue;

      function getProcessVariableValue(name2) {
        // Block#: $A+E]85X)9yix.DB)Pe)
        workflowlibrary_varmap.tempDict1 = getProcessVariable(name2);
        // Block#: S{VIIeX4HqAy{5dPron=
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict1, 'value')) {
          return null;
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict1, 'value');
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyAttribute = getFormPropertyAttribute;

      function getFormPropertyAttribute(id, attribute) {
        // Block#: $Qypr}D:dDnS34}Rv^qh
        workflowlibrary_varmap.tempDict = getFormProperty(id);
        // Block#: PWK?Ib/jr67@[`=+[bgs
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, attribute))) {
          return null;
        }
        // Block#: Q^9U[?RhR^]#/6M@7BHx
        console.log(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getOutcomeName = getOutcomeName;

      function getOutcomeName(id) {
        // Block#: ^ymSIrW:$f28p@6[SI@U
        workflowlibrary_varmap.tempParam = '';
        // Block#: ~{)~$)O/yh)O{Y%5CQ#X
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return '';
        }
        // Block#: 4lvrEM]*#hq^O2]:Qm=:
        var item_list12 = workflowlibrary_varmap._outcomes;
        for(var item_index12 in item_list12) {
          item = item_list12[item_index12];
          // Block#: TEa|F|P8n,!X.Ll;G_}3
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: 76Faw_b`B(+D/HE5v^H4
            workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
          }
        }
        // Block#: 37=4oHW1KOquM92@|%S/
        console.log(String('SDK getOutcomeName by id : ') + String(workflowlibrary_varmap.tempParam));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcomeName by id : ') + String(workflowlibrary_varmap.tempParam));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.doesExistOutcome = doesExistOutcome;

      function doesExistOutcome(id) {
        // Block#: Hmb|}(N-?u9Vam.DojFf
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: WAad5%@cF]|J0Nu-+d=c
        var item_list13 = workflowlibrary_varmap._outcomes;
        for(var item_index13 in item_list13) {
          item = item_list13[item_index13];
          // Block#: LGQ-c:Ry^kl]E9.SdcSR
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            return true;
          }
        }
        return false;
      }
      /**
       * To retrieve the id of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldIDByRef = findFieldIDByRef;

      function findFieldIDByRef(UIObjRef) {
        // Block#: ~g_kuTs~[S)9RPjA6vB5
        workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id'));
        // Block#: CKAAyvw./=$iA+pq.L9n
        console.log(['findFieldIdByRef: ', UIObjRef, ' ID: ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldIdByRef: ', UIObjRef, ' ID: ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyName = getFormPropertyName;

      function getFormPropertyName(id) {
        // Block#: J*-rAsH1kZb=7ib9-N-t
        workflowlibrary_varmap.tempParam = getFormPropertyAttribute(id, 'name');
        // Block#: -o{Mn9!*Tgzb4jE5Ifi5
        console.log(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstRadioButtonField = getIdofFirstRadioButtonField;

      function getIdofFirstRadioButtonField() {
        // Block#: c;r0yn;{i`q,NI`93T2{
        var item_list14 = workflowlibrary_varmap._formFields;
        for(var item_index14 in item_list14) {
          item = item_list14[item_index14];
          // Block#: fe0oj*!QQ5WMS14rD3Rk
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.safeLength = safeLength;

      function safeLength(inputList) {
        // Block#: glI,/-IIC2m3q(#B@0pr
        if(inputList == null) {
          return 0;
        }
        // Block#: GSO$$)x|O|7tr+uS(*0v
        if(!inputList.length) {
          return 0;
        }
        return inputList.length;
      }
      /**
       * Describe this function...
       */
      this.logout = logout;

      function logout() {
        return new Promise(function(resolve, reject) {
          // Block#: u(:]sWW4V9dP{N4Cu^RO
          com.fc.JavaScriptDistLib.SnapClinical.logout(
            function(success_data) {
              // Block#: Ok%CB-Pd]q`:=/s8+J~K
              workflowlibrary_varmap._userName = 'forgetfulUser';
              // Block#: k]Y|kiMp/QXlyIFv2`Tk
              workflowlibrary_varmap._userPassw = '4mn3s14C!';
              // Block#: #WB`ciB-+DICSB@d}Uc;
              com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://develop.snapclinical.net:8443","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
              com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(workflowlibrary_varmap._userName, workflowlibrary_varmap._userPassw, workflowlibrary_varmap._userName, "mobileApp", "https://develop.snapclinical.net:8443");
              // Block#: 8H)qgG~54Cre=yoJ3iiJ
              initWorkflowWithCredentials(null, null, null).then(response => {;
              });
              // Block#: bUgGqtb.bf$Ht^Y-%QR3
              console.log('SDK logout success');
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push('SDK logout success');
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: ]{kwGk%MfjXgc]IVsPa?
              resolve({
                name: "then",
                data: 'SDK logout success'
              });
            },
            function(error_data) {
              // Block#: j/x[.Z^.A%$APcwqf-6x
              console.log(String('SDK logout error:') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK logout error:') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: c?I`L,=.hrOd?}[1-Ou/
              resolve({
                name: "catch",
                data: (String('SDK logout error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))))
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.buildVar = buildVar;

      function buildVar(name2, value) {
        // Block#: w)Yy*@v@2W+!Xz%A9Iko
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], [name2, value]);
        // Block#: p~+:u^kv.$ZD!j]b4eXU
        console.log(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getOutcome = getOutcome;

      function getOutcome(id) {
        // Block#: z_OwH@Vp!,|V.m?-5rR7
        workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: aeK}#_56a0FW1;FlI/RA
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict1;
        }
        // Block#: @-q#8vSu_;2Fy2N.F])N
        var item_list15 = workflowlibrary_varmap._outcomes;
        for(var item_index15 in item_list15) {
          item = item_list15[item_index15];
          // Block#: n6w*.;8h*VC,sx]BPLCz
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: =c~Nd@B.[P1(9iv[U:0C
            workflowlibrary_varmap.tempDict1 = item;
          }
        }
        // Block#: Q:N_kRnFcj/3%}|gFkR,
        console.log(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict1;
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.doesExistField = doesExistField;

      function doesExistField(id) {
        // Block#: G72*ZfWyTVTTF*YW+;u3
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: 0-zs0K4{G%DLexMoi@1l
        if(workflowlibrary_varmap._formFields != null) {
          // Block#: $8p*?d{P+-m|/n`#OWXv
          var item_list16 = workflowlibrary_varmap._formFields;
          for(var item_index16 in item_list16) {
            item = item_list16[item_index16];
            // Block#: imU3?.3TfXu=qUOz[4Vg
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'id')) {
              // Block#: O{V`?*@eRf||XBK]`Z2J
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
                return true;
              }
              // Block#: u]nwgfv?0gzJ4|QKa8ba
              console.log(String('SDK  doesExistField (true) by ID ') + String(id));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK  doesExistField (true) by ID ') + String(id));
                workflowlibrary_varmap.debugService.printLog();
              }
            }
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.AppendInfo = AppendInfo;

      function AppendInfo(name2, value) {
        return new Promise(function(resolve, reject) {
        });
      }
      /**
       * To retrieve the template type you have associated
       * to the current task. This is a specific value set
       * in the form properties section as TemplateType.
       */
      this.getTemplateType = getTemplateType;

      function getTemplateType() {
        // Block#: i[TClUtvG0?cy,~h2[3n
        console.log(String('SDK getTemplateType: ') + String(workflowlibrary_varmap._templateType));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getTemplateType: ') + String(workflowlibrary_varmap._templateType));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._templateType;
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyValue = getFormPropertyValue;

      function getFormPropertyValue(id) {
        // Block#: DH;d_..2@hQzhZWl3Qay
        workflowlibrary_varmap.tempParam = getFormPropertyAttribute(id, 'value');
        // Block#: P%{C|4nOh(7dS)67dHv(
        console.log(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstDropDownField = getIdofFirstDropDownField;

      function getIdofFirstDropDownField() {
        // Block#: (6HA`fN(9Sz3W(Lz8Ocd
        var item_list17 = workflowlibrary_varmap._formFields;
        for(var item_index17 in item_list17) {
          item = item_list17[item_index17];
          // Block#: pl5}DXcGGD{yp*vWMxKW
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.buildCurrentInitiator = buildCurrentInitiator;

      function buildCurrentInitiator() {
        return new Promise(function(resolve, reject) {
          // Block#: #dx0sJ3OcN9E!dSn,@w}
          workflowlibrary_varmap._currentInitiator = '';
          // Block#: jHrhOwD8VquA{dXlLdJ*
          workflowlibrary_varmap.tempList1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'processVariables'));
          // Block#: TyeWO=ugu[|]vH}2ZvkP
          var item_list18 = workflowlibrary_varmap.tempList1;
          for(var item_index18 in item_list18) {
            item = item_list18[item_index18];
            // Block#: 9?C74H7ixEt$W%90ZT~;
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
              // Block#: yI~y8%,|JLTZifJ/^dAU
              workflowlibrary_varmap._currentInitiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'));
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessInstanceId = getProcessInstanceId;

      function getProcessInstanceId() {
        // Block#: q=)Sb$0J9f2h/7C~Wi}#
        console.log(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._processInstId)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._processInstId)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._processInstId;
      }
    };
    var workflowlibrary = new WorkflowLibrary();
    loginlibgiovanni_varmap._enteredEmail = null;
    loginlibgiovanni_varmap._enteredPIN = null;
    loginlibgiovanni_varmap._currentUserStatus = null;
    loginlibgiovanni_varmap._settingPIN = null;
    loginlibgiovanni_varmap._verificationCode = null;
    loginlibgiovanni_varmap._loginAttempts = null;
    loginlibgiovanni_varmap._numericGrid = null;
    loginlibgiovanni_varmap._currentFieldID = null;
    /**
     * Describe this function...
     */
    this.getUserLanguage = getUserLanguage;

    function getUserLanguage() {
      return new Promise(function(resolve, reject) {
        // Block#: .hy%r*hiK|U5_2-`D$Ez
        com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/user/search/whatLanguage', "GET", JSON.stringify(),
          function(data) {
            // Block#: F]zD^;VXeI)ffMo..%0G
            if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'language')) != null) {
              // Block#: @lHzb33@%]_v=J[C|YSp
              com.fc.JavaScriptDistLib.Storage.add('language', com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'language')))
            }
            // To start a new instance of the workflow or to resume the last run of it.
            // You must specify
            // - processDefinitionKey will be your Process Identifier (text)
            // - forceStartNewInstance will be set to true if you want to start
            // a new instance or to false if you need to resume an old one.
            // Block#: c3Gm,j6E|K{UYPBjSoWv
            workflowlibrary.startNewProcessInstance('logInDemoV12', true).then(response => {;
              if(response.name === "success") {
                // Block#: %DUZOPEFza8#PIsD._!|
                console.log(response.data);
                if(loginlibgiovanni_varmap.debugService && loginlibgiovanni_varmap.debugService.active) {
                  loginlibgiovanni_varmap.debugService.traces.push(response.data);
                  loginlibgiovanni_varmap.debugService.printLog();
                }
                // Block#: AojOsV(|n,mMWi3aTb!}
                resolve({
                  name: "then",
                  data: response.data
                });
              }
              if(response.name === "failure") {
                // Block#: -2s?x7zpon~Hq]fo?iFB
                console.log(response.data);
                if(loginlibgiovanni_varmap.debugService && loginlibgiovanni_varmap.debugService.active) {
                  loginlibgiovanni_varmap.debugService.traces.push(response.data);
                  loginlibgiovanni_varmap.debugService.printLog();
                }
                // Block#: 3cwgPgsr-7)yHk@.kNrZ
                resolve({
                  name: "catch",
                  data: response.data
                });
              }
            });
          },
          function(error) {
            // To start a new instance of the workflow or to resume the last run of it.
            // You must specify
            // - processDefinitionKey will be your Process Identifier (text)
            // - forceStartNewInstance will be set to true if you want to start
            // a new instance or to false if you need to resume an old one.
            // Block#: l/X+,QGDtSuELSU;tpb)
            workflowlibrary.startNewProcessInstance('logInDemoV12', true).then(response => {;
              if(response.name === "success") {
                // Block#: uB-cdn(WdUT*~omhXg`u
                console.log(response.data);
                if(loginlibgiovanni_varmap.debugService && loginlibgiovanni_varmap.debugService.active) {
                  loginlibgiovanni_varmap.debugService.traces.push(response.data);
                  loginlibgiovanni_varmap.debugService.printLog();
                }
                // Block#: m!wBqETj:Qi#IrUcI/,o
                resolve({
                  name: "then",
                  data: response.data
                });
              }
              if(response.name === "failure") {
                // Block#: hP@N-J~L7tD2g-AlErfm
                console.log(response.data);
                if(loginlibgiovanni_varmap.debugService && loginlibgiovanni_varmap.debugService.active) {
                  loginlibgiovanni_varmap.debugService.traces.push(response.data);
                  loginlibgiovanni_varmap.debugService.printLog();
                }
                // Block#: T*T-f}sAfr6a=]Fwn;~9
                resolve({
                  name: "catch",
                  data: response.data
                });
              }
            });
          });
      });
    }
    /**
     * Describe this function...
     */
    this.executeLogin = executeLogin;

    function executeLogin() {
      return new Promise(function(resolve, reject) {
        // Block#: HV}*rq]_JoG84dK0hSl[
        if(loginlibgiovanni_varmap._enteredEmail == null) {
          // Block#: ;oS`t$,uFmxTv|gRftId
          loginlibgiovanni_varmap._enteredEmail = (com.fc.JavaScriptDistLib.Storage.getValue('email'));
        }
        // To setup the user name and the password to access to the
        // workflow. Start from here to interact with the workflow.
        // Block#: ZSC`sK[|^Gv~,?cnL--+
        workflowlibrary.initWorkflowWithCredentials(loginlibgiovanni_varmap._enteredEmail, loginlibgiovanni_varmap._enteredPIN, null).then(response => {;
        });
        // Block#: 3.o)@RR8mF3QX/?}QjQM
        getUserLanguage().then(response => {;
          if(response.name === "then") {
            // Block#: @2P]3]d!8etH.[7xPV8s
            resolve({
              name: "then",
              data: response.data
            });
          }
          if(response.name === "catch") {
            // Block#: cIm:XvYV1Cvs8Spfd:uT
            resolve({
              name: "catch",
              data: response.data
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.isValidEmail = isValidEmail;

    function isValidEmail(email) {
      return com.fc.JavaScriptDistLib.TextLib.textMatchWithRegex(com.fc.JavaScriptDistLib.TextLib.convertToRegExp('(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', ""), email);
    }
    /**
     * Describe this function...
     */
    this.pageFactory = pageFactory;

    function pageFactory(templateId) {
      return new Promise(function(resolve, reject) {
        // Block#: iHm4)eLc^~L[_.6$R-C#
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(templateId, "EQUAL", 'S7MultipleText')) {
          // Block#: vcymk(F,0cK)V)z+E@+G
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LoginFinalScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'LoginFinalScreen'
          }, 'LoginFinalScreen', 'LoginFinalScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(templateId, "EQUAL", 'S12ResetPin')) {
          // Block#: 533u*-guF|5JKjPyZz+t
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LoginForgotScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'LoginForgotScreen'
          }, 'LoginForgotScreen', 'LoginForgotScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(templateId, "EQUAL", 'S9Pin')) {
          // Block#: p`upyg9gE~Q|Qajsxf*e
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LoginPINScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'LoginPINScreen'
          }, 'LoginPINScreen', 'LoginPINScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else {
          // Block#: x{;7p?.xF*f$f!sH6sa.
          if(getStatus() != null) {
            // Block#: Vtv~5(rI6@pS9W:ra:*k
            loginlibgiovanni_varmap._currentUserStatus = getStatus();
            // Block#: }6q|%$qkE-gHDH({*.cI
            onLoginCompleted(getStatus()).then(response => {;
            });
          } else {
            // Block#: ~Z}#1@Pt7czyBaHngoVd
            executeLogin().then(response => {;
              if(response.name === "then") {
                // Block#: =|ws+uv#:u:O.y5%J7M*
                loginlibgiovanni_varmap._currentUserStatus = getStatus();
                // Block#: 8kJs^wJC~izy,xWXa~aP
                onLoginCompleted(getStatus()).then(response => {;
                });
              }
              if(response.name === "catch") {
                // Block#: #.u|GgYr5X5tua9i~7{)
                loginlibgiovanni_varmap._currentUserStatus = getStatus();
                // Block#: ][qCGL{Wp#A!$8R+RbHo
                onLoginCompleted(getStatus()).then(response => {;
                });
              }
            });
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.askForPin = askForPin;

    function askForPin() {
      let question = null;
      return new Promise(function(resolve, reject) {
        // Block#: gD)un_.H?ueR}Mn7s:J4
        question = (com.fc.JavaScriptDistLib.Dialog.create('Message', 'Do you want to reset your PIN?'));
        // Block#: twrC-aF]VSsx{x@V#K)`
        com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', question)
        // Block#: -d.6-gq|Lgk%mvOhM8Fs
        com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', question)
        // Block#: 2!@_tm`ONF115b)L{4$_
        com.fc.JavaScriptDistLib.Dialog.show(question, function(button_title) {
          // Block#: dyZ;3jTf.dWzwcu#=}MG
          resolve({
            name: "on select",
            data: button_title
          });
        })
      });
    }
    /**
     * Describe this function...
     */
    this.showError = showError;

    function showError(message) {
      return new Promise(function(resolve, reject) {
        // Block#: 44gk%pQHO{fpZ7T2NB-q
        com.fc.JavaScriptDistLib.Dialog.show(com.fc.JavaScriptDistLib.Dialog.create('Error', message), function(button_title) {
        })
      });
    }
    /**
     * Describe this function...
     */
    this.getFirstField = getFirstField;

    function getFirstField(fields) {
      // Block#: T99XD^;LVo86%R8_iCM6
      if(fields == null || com.fc.JavaScriptDistLib.MathLibrary.mathCompare(fields.length, "EQ", 0)) {
        return null;
      }
      return fields[0];
    }
    /**
     * Describe this function...
     */
    this.getSecondField = getSecondField;

    function getSecondField(fields) {
      // Block#: ^Um|B)rTpG8WZXG.]j:4
      if(fields == null || com.fc.JavaScriptDistLib.MathLibrary.mathCompare(fields.length, "LTE", 1)) {
        return null;
      }
      return fields[1];
    }
    /**
     * Describe this function...
     */
    // Describe this function...
    this.getStatus = getStatus;

    function getStatus() {
      // Describe this function...
      // Describe this function...
      // Block#: 8|e`kInsxJ-tLu3E4T*C
      if(workflowlibrary.getFormProperties() == null || com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary.getFormProperties().length, "EQ", 0)) {
        return null;
      }
      return workflowlibrary.getFormPropertyValue('status');
    }
    /**
     * Describe this function...
     */
    this.startLoginProcess = startLoginProcess;

    function startLoginProcess() {
      return new Promise(function(resolve, reject) {
        // Block#: %b2qbJk(g%(SUWPwXBF-
        if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'email')) {
          // Block#: BdB|($]0Gm4g_]^n%R``
          loginlibgiovanni_varmap._settingPIN = false;
          // Block#: Ne12JZ8(6P6rrT;]Q)Gu
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LoginPINScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'LoginPINScreen'
          }, 'LoginPINScreen', 'LoginPINScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else {
          // Block#: 2}~HHadSVI5I6_{!H#ZR
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LoginNoUserScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'LoginNoUserScreen'
          }, 'LoginNoUserScreen', 'LoginNoUserScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        }
      });
    }
    /**
     * Describe this function...
     */
    this.onLoginCompleted = onLoginCompleted;

    function onLoginCompleted(userStatus) {
      return new Promise(function(resolve, reject) {
        com.fc.CustomEventListeners["onLoginCompleted"] && com.fc.CustomEventListeners["onLoginCompleted"](userStatus);
      });
    }
    /**
     * Describe this function...
     */
    this.initTheWorkflow = initTheWorkflow;

    function initTheWorkflow() {
      return new Promise(function(resolve, reject) {
        // Block#: 6SUHB$ZHhm[Abb8I~,_r
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginNoUserScreen", true); // Block#: n?3#gz72(ecCafDcPA=v
        if(loginlibgiovanni_varmap._verificationCode == null) {
          // Block#: 2p[`O!WG!*H1qtjyWd|~
          loginlibgiovanni_varmap._verificationCode = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("codeInput");
        }
        // To setup the user name and the password to access to the
        // workflow. Start from here to interact with the workflow.
        // Block#: cOj9#P0=h_Kn}1MUtcm_
        workflowlibrary.initWorkflowWithCredentials(loginlibgiovanni_varmap._verificationCode, 'P4ssw0RD$!', null).then(response => {;
        });
        // Block#: ?49T$r14plvX$M)Z6qzq
        getUserLanguage().then(response => {;
          if(response.name === "then") {
            // Block#: Q^R|/!HwuAotaZ5cne;D
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginNoUserScreen", false); // Block#: IRaeeQZ_mh|upp_w3zJw
            loginlibgiovanni_varmap._settingPIN = true;
            // Describe this function...
            // Block#: *7?qA$c5Hqvms!vLs5J?
            pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "catch") {
            // Block#: p5Hasy2~p3$6Z?Gw^0(=
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginNoUserScreen", false); // Block#: Gd*%O3Axp)z9sCS?E:%M
            showError('Entered verification code is not valid!').then(response => {;
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.setPIN = setPIN;

    function setPIN() {
      return new Promise(function(resolve, reject) {
        // Block#: edH2AK+!GxxT%!lOA;SD
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", true); // Describe this function...
        // Block#: rg.~7bgMYJS[@7S[B.B6
        if(workflowlibrary.getFormPropertyValue('email') != null) {
          // Describe this function...
          // Block#: _}e1A+}Snm#|hgOgu?x`
          com.fc.JavaScriptDistLib.Storage.add('email', workflowlibrary.getFormPropertyValue('email'))
        }
        // To set the value of a specific field (addressed by its id) in the current form.
        // To retrieve all data coming from all the fields in the current form.
        // Block#: ZF6xtznhRny`-53}l{qX
        workflowlibrary.setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(getFirstField(workflowlibrary.getFields()), 'id')), loginlibgiovanni_varmap._enteredPIN).then(response => {;
        });
        // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: $If+5:X%Ww+2~oz+;D}y
        workflowlibrary.completeAndGetNextTaskById('continue').then(response => {;
          if(response.name === "success") {
            // Block#: pKE03RVN;pDS.XQ!bK=*
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Describe this function...
            // Block#: /aFUTI!Mmm.@{9t;xvx#
            pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: Q{iH+UyGfz4pIokJc$!?
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Block#: 9{6YZv%i4{,FlWS.-fR}
            showError('Could not set your PIN').then(response => {;
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.loginWithCredentials = loginWithCredentials;

    function loginWithCredentials() {
      return new Promise(function(resolve, reject) {
        // Block#: `D@vCbOl-IT``a5P#V^8
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", true); // Block#: d4~ggC!$Gr9DoS?uWoN#
        executeLogin().then(response => {;
          if(response.name === "then") {
            // Block#: UHn8SWf0b=f{#.9,7UpR
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Describe this function...
            // Block#: ln)+v`_Miik5~z2:DhcS
            pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "catch") {
            // Block#: D*)oS)~-iX7TEDc([4WV
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Block#: py$mE$s5[v~/q|`c#B~4
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINMessage", 'Invalid Credentials'); // Block#: yTAH3(Qqa9t.eAOj)+oa
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._loginAttempts, "LT", 2)) {
              // Block#: !(fiQzxew4N.3_QfTD/3
              loginlibgiovanni_varmap._loginAttempts = loginlibgiovanni_varmap._loginAttempts + 1;
              // Block#: e6YVsJUGCF,4va!8e24:
              loginlibgiovanni_varmap._enteredPIN = '';
              // Block#: (zb~)WQ#qM2,};OZ88~K
              updateEnteredCircles().then(response => {;
              });
            } else {
              // Block#: !;*dC_`b$A|.i@:on89}
              runForgotPIN().then(response => {;
              });
            }
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.updateEnteredCircles = updateEnteredCircles;

    function updateEnteredCircles() {
      return new Promise(function(resolve, reject) {
        // Block#: =U]?x9aS~2aC68vtmTsa
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 0)) {
          // Block#: D^v+AUQc2%-PGjm9Q;kO
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-empty"></div>     <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>  <div class="pin-key-empty"></div> <div class="pin-key-empty"></div>     <div class="pin-key-empty"></div>    </div>');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 1)) {
          // Block#: /3PRyYomw,6|P3NeFu$e
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-full"></div>     <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>  <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>    </div>');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 2)) {
          // Block#: 4m0^-vE(P,cI942WaEkw
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-full"></div>     <div class="pin-key-full"></div>       <div class="pin-key-empty"></div>      <div class="pin-key-empty"></div> <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>      </div>');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 3)) {
          // Block#: n@|xlZ8O+TJ)69NpmpwL
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-full"></div>     <div class="pin-key-full"></div>       <div class="pin-key-full"></div>      <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>    </div>');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 4)) {
          // Block#: r,4z@{jd2vf%B!A}B|G@
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-full"></div>     <div class="pin-key-full"></div>       <div class="pin-key-full"></div>      <div class="pin-key-full"></div> <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>      </div>');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 5)) {
          // Block#: 1}|UY{QA}6+$`lUndF~D
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-full"></div>     <div class="pin-key-full"></div>       <div class="pin-key-full"></div>      <div class="pin-key-full"></div>   <div class="pin-key-full"></div>   <div class="pin-key-empty"></div>    </div>');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 6)) {
          // Block#: 5Y3]NxJ$RKhX6qt%GPbl
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-full"></div>     <div class="pin-key-full"></div>       <div class="pin-key-full"></div>      <div class="pin-key-full"></div> <div class="pin-key-full"></div>   <div class="pin-key-full"></div>      </div>');
        }
      });
    }
    /**
     * Describe this function...
     */
    this.runForgotPIN = runForgotPIN;

    function runForgotPIN() {
      return new Promise(function(resolve, reject) {
        // Block#: Gh6zoIm3I:R]8J@(/IC0
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", true); // To setup the user name and the password to access to the
        // workflow. Start from here to interact with the workflow.
        // Block#: ]r*RD:j;Y3V0@1$tNE{#
        workflowlibrary.initWorkflowWithCredentials('forgetfulUser', '4mn3s14C!', null).then(response => {;
        });
        // Block#: IjeTlp5K;3ktq%-1kp)Q
        if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'email')) {
          // To start a new instance of the workflow or to resume the last run of it.
          // You must specify
          // - processDefinitionKey will be your Process Identifier (text)
          // - forceStartNewInstance will be set to true if you want to start
          // a new instance or to false if you need to resume an old one.
          // Block#: iA!Zw^k-!K8.rNT,t/Ld
          workflowlibrary.startNewProcessWithVars('mobileResetPinDemoV12', true, [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'scope', 'type', 'value'], ['email', 'local', 'string', (com.fc.JavaScriptDistLib.Storage.getValue('email'))])]).then(response => {;
            if(response.name === "success") {
              // Block#: !!9=)*SG;|w|t.{yIC/W
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Describe this function...
              // Block#: aQC^ka5q}c-x.z)vLvnb
              pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: F{Ver0TC`uoMgr9fyOks
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Block#: `|@x4%6a?mnvu3}f]R:s
              showError('Something went wrong').then(response => {;
              });
            }
          });
        } else {
          // To start a new instance of the workflow or to resume the last run of it.
          // You must specify
          // - processDefinitionKey will be your Process Identifier (text)
          // - forceStartNewInstance will be set to true if you want to start
          // a new instance or to false if you need to resume an old one.
          // Block#: T{YE+%-w8QYAni}k;6f)
          workflowlibrary.startNewProcessInstance('mobileResetPinDemoV12', true).then(response => {;
            if(response.name === "success") {
              // Block#: KFn_s{M+bp(6Mu2lEpQz
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Describe this function...
              // Block#: ni$uC=u!(?=nRYG?Q3ek
              pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: Tq]d$G~mbk!uI)hzB18;
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginPINScreen", false); // Block#: !X}q!G{KLicRa/6}cxb,
              showError('Something went wrong').then(response => {;
              });
            }
          });
        }
      });
    }
    /**
     * Describe this function...
     */
    this.initRecoverScreen = initRecoverScreen;

    function initRecoverScreen() {
      let currentField = null;
      return new Promise(function(resolve, reject) {
        // Block#: ,LH/!=,y[^BJ%@OPD;Km
        loginlibgiovanni_varmap._currentFieldID = null;
        // Block#: E:17Xix_kVhds},7S*=h
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FP1input", ''); // Block#: ?^w56_Cl37M{%.ygm{.1
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FP2input", ''); // Block#: kQZRTeko}yNB$`}fKOQF
        $('[obj-name="errorLbl22"]').hide(); // Block#: PjLE%uR;_!S0#L-jAA3,
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("recoverContent", '"<style>   @import url(\'https://fonts.googleapis.com/css?family=Montserrat:100\'); .welcome-wrapper {     font-family: \'Montserrat\', sans-serif;    text-align: center;      color: #434343;       border-radius: 10px; box-shadow:none; padding:0px;   } .welcome-title { text-transform: uppercase; letter-spacing: 3px; font-size: 30px; font-weight: 100; color: #ffffff;    }  .welcome-subtitle {  color: #ffffff;   font-weight: 100; letter-spacing: .3px; }  tr,   td {  vertical-align: middle;   }   </style> <div class="welcome-wrapper"></div>"'); // Describe this function...
        // Block#: v{i:EE}bfr@]R,7!=}FE
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("recoverContent", (workflowlibrary.getFormPropertyName('infoText'))); // Describe this function...
        // Block#: 99_Pjd5Bq;*u$cO^cbJ(
        if(workflowlibrary.doesExistOutcome('back')) {
          // Block#: GIwypLg0NC(av|H-fKYc
          $('[obj-name="loginBack"]').show();
        } else {
          // Block#: e6kWOxB1/%!d2#6y+`?Q
          $('[obj-name="loginBack"]').hide();
        }
        // Block#: *mD+g,+:.]@lF{k%i@:8
        hideAllInputs().then(response => {;
        });
        // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
        // Block#: HA[r~;H5Sk/x/:/OP,lF
        if(workflowlibrary.findFieldIDByRef('FP1input') != null) {
          // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
          // Block#: ]*jj4^`tJ)n-+CbZ6gYV
          currentField = (workflowlibrary.findFieldIDByRef('FP1input'));
          // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
          // Block#: nbQ7ga@#@cj?vI}4`C@.
          console.log(workflowlibrary.findFieldIDByRef('FP1input'));
          if(loginlibgiovanni_varmap.debugService && loginlibgiovanni_varmap.debugService.active) {
            loginlibgiovanni_varmap.debugService.traces.push(workflowlibrary.findFieldIDByRef('FP1input'));
            loginlibgiovanni_varmap.debugService.printLog();
          }
          // Block#: bbDLXHxKo^q`#19:#b6=
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FP1inputName", (workflowlibrary.getFieldAttribute(currentField, 'name'))); // Describe this function...
          // Block#: mW!~zr=rF2!z%*n[6i0:
          if(workflowlibrary.getFieldAttribute(currentField, 'value') != null) {
            // Describe this function...
            // Block#: 4c8(6lF_.3anPqx8unI?
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FP1input", (workflowlibrary.getFieldAttribute(currentField, 'value')));
          }
          // Block#: Dy+vPeR9CL1cjFC@`G.F
          loginlibgiovanni_varmap._currentFieldID = currentField;
          // Block#: L0=ZWCPXOYK{jm0Hq5WF
          $('[obj-name="FP1input"]').show(); // Block#: 9{*N=3jueDYI;x+*W?`e
          $('[obj-name="FP1inputName"]').show(); // Block#: t%2$%R~4]qw=8f?On/Nr
          com.fc.JavaScriptDistLib.Shape.setProperty["Alpha"]("FP1inputSep", 100);
        }
        // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
        // Block#: jiL5%nB8,ttMr_^KEwTa
        if(workflowlibrary.findFieldIDByRef('FP2input') != null) {
          // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
          // Block#: +0pG7_z{vRsBm[;J%]Ns
          currentField = (workflowlibrary.findFieldIDByRef('FP2input'));
          // Describe this function...
          // Block#: `#3Y$JWs(M/u{rD!80}:
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FP2inputName", (workflowlibrary.getFieldAttribute(currentField, 'name'))); // Describe this function...
          // Block#: k=N1x,]39]UTWZOOL!/e
          if(workflowlibrary.getFieldAttribute(currentField, 'value') != null) {
            // Describe this function...
            // Block#: 4SoA5JG`B7![,%nKn?iE
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FP2input", (workflowlibrary.getFieldAttribute(currentField, 'value')));
          }
          // Block#: +^8K_0SNBm+[_rc@vOXi
          $('[obj-name="FP2input"]').show(); // Block#: `@UjIag)7fxj-YG;;Q@A
          $('[obj-name="FP2inputName"]').show(); // Block#: 2RimFhG0|7Q;!B--x(yh
          $('[obj-name="FP2inputSep"]').show();
        }
      });
    }
    /**
     * Describe this function...
     */
    this.gotoNext = gotoNext;

    function gotoNext() {
      return new Promise(function(resolve, reject) {
        // Block#: *eDLtdgFXnHbLV3z+=5D
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", true); // Block#: x?Ml31I]B/1uG:2zj1*Q
        $('[obj-name="errorLbl22"]').hide(); // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
        // Block#: #Y|3/;eIJ{@n=NUiS-J[
        if(workflowlibrary.findFieldIDByRef('FP1input') != null) {
          // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
          // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
          // Block#: NbH58fRW~VNJVD6^~~?`
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary.findFieldIDByRef('FP1input'), "EQUAL", 'email')) {
            // Block#: /PA[?{k4/Y]XV3^S4VWp
            if(isValidEmail(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FP1input"))) {
              // Block#: ~dM#``}(^wn;b|z)lm7j
              com.fc.JavaScriptDistLib.Storage.add('email', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FP1input")) // To set the value of a specific field (addressed
              // by its UIObjRef) in the current form.
              // Block#: yf(PF=CIg8]f5ZSW%Q:L
              workflowlibrary.setFieldByRef('FP1input', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FP1input")).then(response => {;
              });
            } else {
              // Block#: rH!t$z:J,j1=NN+8$.2=
              $('[obj-name="errorLbl22"]').show();
            }
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary.findFieldIDByRef('FP1input'), "EQUAL", 'pin')) {
            // Block#: p{=uViW/mc9tP;V%2pQ/
            loginlibgiovanni_varmap._enteredPIN = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FP1input");
            // To set the value of a specific field (addressed
            // by its UIObjRef) in the current form.
            // Block#: uf[.|-6psw4=!j.F==]k
            workflowlibrary.setFieldByRef('FP1input', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FP1input")).then(response => {;
            });
          } else {
            // To set the value of a specific field (addressed
            // by its UIObjRef) in the current form.
            // Block#: |I:FWG`H)O*cd#V4iz!B
            workflowlibrary.setFieldByRef('FP1input', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FP1input")).then(response => {;
            });
          }
        }
        // To retrieve the id of a specific field (addressed by its UIObjRef) in the current form
        // Block#: D(!,^ye4h-t$NG7joGT)
        if(workflowlibrary.findFieldIDByRef('FP2input') != null) {
          // To set the value of a specific field (addressed
          // by its UIObjRef) in the current form.
          // Block#: dpZmST#]!:oiYF^B?m#-
          workflowlibrary.setFieldByRef('FP2input', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FP2input")).then(response => {;
          });
        }
        // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: Qf6YWopM{%fsa/%@1_KB
        workflowlibrary.completeAndGetNextTaskById('continue').then(response => {;
          if(response.name === "success") {
            // Block#: #!mTpJ}9N3vbY}nk,7|[
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", false); // Describe this function...
            // Block#: C7sv20D(RkI:P~Z+N9~(
            pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: 9X;Gt-rDV9G#)4@ov]:|
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", false); // Block#: h0.Nggir#sR25nAG6ddT
            showError('Could not process data').then(response => {;
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.reinitAndClose = reinitAndClose;

    function reinitAndClose() {
      return new Promise(function(resolve, reject) {
        // Block#: IG@%~XP+1#RnyDb]u/xQ
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", true); // Block#: HiqB_Ll1JWr?}%hq~?u.
        executeLogin().then(response => {;
          if(response.name === "then") {
            // Block#: @(:jc4)yxgbPE36H-`%N
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", false); // Block#: Talgdw1Q25.[n0{6@LV9
            onLoginCompleted(getStatus()).then(response => {;
            });
          }
          if(response.name === "catch") {
            // Block#: ]N?gdvSNC5@G9[f/W*3i
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", false); // Block#: p(jJO)S#N]?W-p2!JuE}
            onLoginCompleted(getStatus()).then(response => {;
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.goBackToLogin = goBackToLogin;

    function goBackToLogin() {
      return new Promise(function(resolve, reject) {
        // Block#: +7f)d[z{9La1MB^_?CVR
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="LoginPINScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'LoginPINScreen'
        }, 'LoginPINScreen', 'LoginPINScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
    /**
     * Describe this function...
     */
    this.hideAllInputs = hideAllInputs;

    function hideAllInputs() {
      return new Promise(function(resolve, reject) {
        // Block#: Aes(?~AfHzP[61CCr[5]
        $('[obj-name="FP1inputName"]').hide(); // Block#: UN#~|BC%ugmS%SE{@kDq
        $('[obj-name="FP1input"]').hide(); // Block#: L;PsH{_Vlug*Iu3fPwh1
        com.fc.JavaScriptDistLib.Shape.setProperty["Alpha"]("FP1inputSep", 0); // Block#: 3Ea3lVqt/CpHI|s6a4J^
        $('[obj-name="FP2inputName"]').hide(); // Block#: ?!0gw..F@Egnkvp1p.L=
        $('[obj-name="FP2input"]').hide(); // Block#: 9!lT1n6PqynKyi|8t72R
        $('[obj-name="FP2inputSep"]').hide();
      });
    }
    /**
     * Describe this function...
     */
    this.getLanguage = getLanguage;

    function getLanguage() {
      // Block#: JnxGur~_.v%.gve=9u@r
      if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'language')) {
        return com.fc.JavaScriptDistLib.Storage.getValue('language');
      }
      return 'en-US';
    }
    /**
     * Describe this function...
     */
    this.getUserStatus = getUserStatus;

    function getUserStatus() {
      return loginlibgiovanni_varmap._currentUserStatus;
    }
    /**
     * Describe this function...
     */
    this.getCredentials = getCredentials;

    function getCredentials() {
      return com.fc.JavaScriptDistLib.Dictionary.createDictionary(['userName', 'password'], [(com.fc.JavaScriptDistLib.Storage.getValue('email')), loginlibgiovanni_varmap._enteredPIN]);
    }
    /**
     * Describe this function...
     */
    this.logout = logout;

    function logout() {
      return new Promise(function(resolve, reject) {
        // Describe this function...
        // Block#: hk)jo|iv:$Mi7ufyz;FV
        workflowlibrary.logout().then(response => {;
          if(response.name === "then") {
            // Block#: A7]zSpY%_IGZ;rew6!)D
            if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'email')) {
              // Block#: -%t`%Lcy1F?S/^H3*IZ7
              com.fc.JavaScriptDistLib.Storage.remove('email')
            }
            // Block#: 29fQQ*=?*prbl6Eg93(~
            let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
            //Close all dialogs
            com.fc.JavaScriptDistLib.Screen.closeDialogs();
            hideScreen.hide();
            let showScreen = $('[obj-name="LoginNoUserScreen"]');
            showScreen.show();
            history.pushState({
              'view': 'LoginNoUserScreen'
            }, 'LoginNoUserScreen', 'LoginNoUserScreen');
            hideScreen.triggerHandler('hide');
            showScreen.triggerHandler('show'); // Block#: @{cr6CI}U|mz4n|D(}7H
            resolve({
              name: "then",
              data: response.data
            });
          }
          if(response.name === "catch") {
            // Block#: GV[e+8$V8Uk2iJlgGqYL
            resolve({
              name: "catch",
              data: response.data
            });
          }
        });
      });
    }
    // Block#: r$Egj)c~);kz$TI-1~H#
    function on_screen_showLoginNoUserScreen() {
      try {
        // Block#: ~jntSF[h:/{OuBOgiQk@
        $('[obj-name="errorLbl"]').hide();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="LoginNoUserScreen"]').on('show', on_screen_showLoginNoUserScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showLoginNoUserScreen'] = on_screen_showLoginNoUserScreen;
    // Block#: dlCs)Oq1`n2cV2s#|{Ae
    function on_Image_QRCodeImg_CLICK(e) {
      try {
        // Block#: StwvtY=#.s1U5BWp?gS~
        com.fc.JavaScriptDistLib.QRCodeScanner.scan();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      };
    };
    if($('[obj-name= "QRCodeImg"]:visible') && $('[obj-name= "QRCodeImg"]:visible')[0]) {
      $('[obj-name= "QRCodeImg"]').on('click', on_Image_QRCodeImg_CLICK);
    }
    // Block#: jss?l]Eu11gP$l^CB0Za
    onQRCodeScanSuccess = function(data) {
      try {
        // Block#: Uvjnb+)W*2wJ:H3p+B)v
        if(data != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(data, "EQUAL", '')) {
          // Block#: bGd:$+gk,??]DFG2Tel*
          loginlibgiovanni_varmap._verificationCode = data;
          // Block#: ]+b7O`cIv|ZoAVQYmkE4
          initTheWorkflow().then(response => {;
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleException(e);
      }
    };
    // Block#: uOLkBu;YxmQU/C9.}?Ua
    function on_continueBtn_click(e) {
      try {
        // Block#: *.}=;30q_)*P;.O#UeAs
        initTheWorkflow().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="continueBtn"]').on('click', on_continueBtn_click);
    // Block#: _oJ6Q}78;tp`oO?`cm1]
    function on_accountBtn_click(e) {
      try {
        // Block#: 11h`QenwC(XNrVKVIK^w
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="LoginEmailScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'LoginEmailScreen'
        }, 'LoginEmailScreen', 'LoginEmailScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="accountBtn"]').on('click', on_accountBtn_click);
    // Block#: gqa-3(CWsEX8lA,.l8=x
    onQRCodeScanFailed = function(error) {
      try {
        // Block#: %LR(b;}}LvA@Sq=jq?2u
        $('[obj-name="errorLbl"]').show();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleException(e);
      }
    };
    // Block#: IF-V!:x?VB4s7StP09aq
    function on_screen_showLoginEmailScreen() {
      try {
        // Block#: s}VgxL?IH)vK8hNt:qc?
        $('[obj-name="errorLbl2"]').hide();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="LoginEmailScreen"]').on('show', on_screen_showLoginEmailScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showLoginEmailScreen'] = on_screen_showLoginEmailScreen;
    // Block#: ?~Yl|oC~4I+Z1]^C5Ixe
    function on_continueBtn2_click(e) {
      try {
        // Block#: QdKN7]ah0IFk?8jo@EwP
        $('[obj-name="errorLbl2"]').hide(); // Block#: ?u2ARUXGASabwHq_ukk1
        if(isValidEmail(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("emailInput"))) {
          // Block#: yJ0f)dcK*hbtLMABg^EF
          com.fc.JavaScriptDistLib.Storage.add('email', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("emailInput")) // Block#: z3{`)d2!jPb0$y!h7F%e
          loginlibgiovanni_varmap._enteredEmail = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("emailInput");
          // Block#: 4U}/IF`QUP+$hAl5O~mz
          loginlibgiovanni_varmap._settingPIN = false;
          // Block#: IWi~SG43xTDGe[Iq%q7}
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LoginPINScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'LoginPINScreen'
          }, 'LoginPINScreen', 'LoginPINScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else {
          // Block#: ]R@gDq?Ie]6*g`}I,#^H
          $('[obj-name="errorLbl2"]').show();
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="continueBtn2"]').on('click', on_continueBtn2_click);
    // Block#: OqyXlX0}O[;g@aW$tHF#
    function on_enrollBtn_click(e) {
      try {
        // Block#: 8lWo.uAfs#wg::6*b8-/
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="LoginNoUserScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'LoginNoUserScreen'
        }, 'LoginNoUserScreen', 'LoginNoUserScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="enrollBtn"]').on('click', on_enrollBtn_click);
    // Block#: #zRXM{#?%%B3G1S1XZ6X
    function on_forgotBtn_click(e) {
      try {
        // Block#: !RJS1`ql19??DLLgV6tC
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginEmailScreen", true); // To setup the user name and the password to access to the
        // workflow. Start from here to interact with the workflow.
        // Block#: $xDn^Y%L`m/DCN).n(R0
        workflowlibrary.initWorkflowWithCredentials('forgetfulUser', '4mn3s14C!', null).then(response => {;
        });
        // Block#: sNYGu,N3Y;OL]2f~Qt;T
        if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'email')) {
          // To start a new instance of the workflow or to resume the last run of it.
          // You must specify
          // - processDefinitionKey will be your Process Identifier (text)
          // - forceStartNewInstance will be set to true if you want to start
          // a new instance or to false if you need to resume an old one.
          // Block#: $_f9,}s+]wNYDI~PO|ju
          workflowlibrary.startNewProcessWithVars('mobileResetPinDemoV12', true, [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'scope', 'type', 'value'], ['email', 'local', 'string', (com.fc.JavaScriptDistLib.Storage.getValue('email'))])]).then(response => {;
            if(response.name === "success") {
              // Block#: d=|Wzy#y,?VVpuW_W?fh
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginEmailScreen", false); // Describe this function...
              // Block#: qv[{ZkGz0u;_eyPj,tg$
              pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: S~cq|6O[4J|P:|4Gf:Yh
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginEmailScreen", false); // Block#: #6T^9dSqB}cV65ORb00X
              showError('Something went wrong').then(response => {;
              });
            }
          });
        } else {
          // To start a new instance of the workflow or to resume the last run of it.
          // You must specify
          // - processDefinitionKey will be your Process Identifier (text)
          // - forceStartNewInstance will be set to true if you want to start
          // a new instance or to false if you need to resume an old one.
          // Block#: TavJmR_qsKC/[3fmi!i|
          workflowlibrary.startNewProcessInstance('mobileResetPinDemoV12', true).then(response => {;
            if(response.name === "success") {
              // Block#: GcRSU0B3}W*X/JuB}=Sy
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginEmailScreen", false); // Describe this function...
              // Block#: bLWLrM)#M=(0_E,o|X*c
              pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: Q;{c3=3gS%4D7cgc$N0W
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginEmailScreen", false); // Block#: j0:c%~mr[V4ha`Gg+-s0
              showError('Something went wrong').then(response => {;
              });
            }
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="forgotBtn"]').on('click', on_forgotBtn_click);
    // Block#: hJDbt2je9$L@EB`fB{hP
    function on_screen_showLoginPINScreen() {
      try {
        // Block#: t!(w_61gYC4(M|9?;AhL
        $('[obj-name="PINforgotBtn"]').show(); // Block#: n7d6U_:HOZKhGG)(}Io4
        $('[obj-name="ChangeUserBtn"]').show(); // Block#: RGuEWawreKRdhshT5*QT
        loginlibgiovanni_varmap._loginAttempts = 0;
        // Block#: 5UgAh1b]76@mHBWb}y3+
        loginlibgiovanni_varmap._enteredPIN = '';
        // Block#: -S%F389-:dE8zR/2{Q}M
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINCircles", '<style>     .pin-key-empty {    display: block;      border: 1px solid white;       width: 16px;       height: 16px;   border-radius: 100%;   text-align: center;   font-family: "trebuchet ms";     display: block;    float: left;       margin: 1px 10px 0 10px;   }  .pin-key-full {   display: block;    border: 1px solid white;     background: white;       width: 16px;       height: 16px;    border-radius: 100%;     text-align: center;       font-family: "trebuchet ms";   display: block;       float: left;       margin: 1px 10px 0 10px;     }    </style>    <div class="pin-container">        <div class="pin-key-empty"></div>     <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>  <div class="pin-key-empty"></div> <div class="pin-key-empty"></div>     <div class="pin-key-empty"></div>    </div>'); // Block#: Q[oq=4Njj{_a{2YATAD8
        loginlibgiovanni_varmap._numericGrid = [(com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/1.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/2.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/3.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/4.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/5.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/6.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/7.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/8.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/9.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("img/blank_image.svg")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/0.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.loginlibrary/Back.png"))];
        // Describe this function...
        // Block#: (BX8fBl=HU3u4La6Mw8Y
        if(workflowlibrary.getFormPropertyName('infoText') != null) {
          // Describe this function...
          // Block#: VaR9z9aC0BB1[3B/nTNp
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINMessage", (workflowlibrary.getFormPropertyName('infoText')));
        }
        // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
        // Block#: r3*[_,E%qzfVg^bJ%X6?
        if(workflowlibrary.doesExistField('L9Info')) {
          // Describe this function...
          // Block#: f|)kG#3M9dG=42zX2{4Y
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINMessage", (workflowlibrary.getFieldAttribute('L9Info', 'expression')));
        }
        // Describe this function...
        // Block#: 8P~EGt`_T5U+G.!JBinl
        if(workflowlibrary.getFormPropertyName('pinChange') != null) {
          // Block#: .-9*wq+7wJ^]5E`=,RD]
          loginlibgiovanni_varmap._settingPIN = true;
          // Block#: =p|#xMA{`[L2v8.$+Gqd
          $('[obj-name="PINforgotBtn"]').hide(); // Block#: RQ#YL5M!oq2m3*r/`2r.
          $('[obj-name="ChangeUserBtn"]').hide();
        } else {
          // Block#: [78^{Re6:29Xg%Uj-;CL
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("PINMessage", 'Enter your PIN');
        }
        // Block#: }P~Y_Zm]_nebd]IPA;Kq
        com.fc.JavaScriptDistLib.GridView.saveTemplateCell('PINGrid');
        com.fc.JavaScriptDistLib.GridView.removeAllCells('PINGrid');
        on_gridview_length_configured_PINGrid();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="LoginPINScreen"]').on('show', on_screen_showLoginPINScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showLoginPINScreen'] = on_screen_showLoginPINScreen;
    // Block#: a.];#36m8a8=M!1z}~i1
    function on_gridview_cell_configured_PINGridCell(PINGridCell, number) {
      try {
        // Block#: ^w5B+BiNLc=+?4TM5d2=
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "NEQ", 9)) {
          // Block#: @$p`Xdbi{w@9Y8A#r^?Q
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("PINNimber", (loginlibgiovanni_varmap._numericGrid[number])); // Block#: i/Fs}TXP82Hb_TJN1Pir
          com.fc.JavaScriptDistLib.Image.setProperty["Alpha"]("PINNimber", 100);
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.GridView.setConfigCallback('PINGridCell', on_gridview_cell_configured_PINGridCell);
    // Block#: mza*b|sI(-PR_,ixVH--
    function on_gridview_cell_clicked_PINGridCell(PINGridCell, number) {
      try {
        // Block#: TWDP_n5(g@{GwDob]hU}
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 11)) {
          // Block#: Nu=V#e~iq!S4cRsg}@iK
          loginlibgiovanni_varmap._enteredPIN = com.fc.JavaScriptDistLib.TextLib.textSubstring(loginlibgiovanni_varmap._enteredPIN, 0, loginlibgiovanni_varmap._enteredPIN.length - 1);
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 9)) {} else {
          // Block#: /%61,Y0YVRTW|Xc]!n^W
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 10)) {
            // Block#: 0Z-e`ZZkQ(^=9xL)L2eT
            loginlibgiovanni_varmap._enteredPIN = String(loginlibgiovanni_varmap._enteredPIN) + String(0);
          } else {
            // Block#: D_Cd$K7|,@F~)|zNj6ZR
            loginlibgiovanni_varmap._enteredPIN = String(loginlibgiovanni_varmap._enteredPIN) + String(com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.convertToText(number))) + 1));
          }
        }
        // Block#: 5azY.eIstSxxw64N+uW-
        updateEnteredCircles().then(response => {;
        });
        // Block#: g0*AjgL-WeQug_3B%p^;
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(loginlibgiovanni_varmap._enteredPIN.length, "EQ", 6)) {
          // Block#: [/w6)n]M=s{TJ]|b}fC8
          if(loginlibgiovanni_varmap._settingPIN == true) {
            // Block#: :*w!#G*Uqn41TAVA)A2~
            setPIN().then(response => {;
            });
          } else {
            // Block#: @^{9FxYs=$+HqkI8GxF5
            loginWithCredentials().then(response => {;
            });
          }
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    }
    com.fc.JavaScriptDistLib.GridView.setClickCallback('PINGridCell', on_gridview_cell_clicked_PINGridCell);
    // Block#: (^bnW=jwSjnbvCa80!lK
    function on_gridview_length_configured_PINGrid() {
      try {
        com.fc.JavaScriptDistLib.GridView.configureCells('PINGrid', 12);
        $('[obj-name="PINGrid"]').children().each(function(i) {
          if(i >= 0) {
            com.fc.JavaScriptDistLib.GridView.setContext($(this));
            com.fc.JavaScriptDistLib.GridView.executeConfigCallback('PINGrid', $(this), i);
            com.fc.JavaScriptDistLib.GridView.executeConfigHeightCallback('PINGrid', $(this), i);
            com.fc.JavaScriptDistLib.GridView.executeConfigWidthCallback('PINGrid', $(this), i);
            com.fc.JavaScriptDistLib.GridView.resetContext($(this));
          }
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    // Block#: kaIt9;a-v.gW_:5ZG^Gc
    function on_PINforgotBtn_click(e) {
      try {
        // Block#: jCCHB=-93|f!{,nmTCxN
        runForgotPIN().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="PINforgotBtn"]').on('click', on_PINforgotBtn_click);
    // Block#: URD7DFLQc8NjRLcX@sdZ
    function on_ChangeUserBtn_click(e) {
      try {
        // Block#: VztmS3AILxK$|%iGJM,%
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="LoginNoUserScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'LoginNoUserScreen'
        }, 'LoginNoUserScreen', 'LoginNoUserScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="ChangeUserBtn"]').on('click', on_ChangeUserBtn_click);
    // Block#: bEOMOci`VFTpi]wh=sK+
    function on_screen_showLoginForgotScreen() {
      try {
        // Block#: q@*axjXUJ=~WLszT)f2e
        initRecoverScreen().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="LoginForgotScreen"]').on('show', on_screen_showLoginForgotScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showLoginForgotScreen'] = on_screen_showLoginForgotScreen;
    // Block#: #}`/Ny?Lb2Y~esv$+M%g
    function on_loginBack_click(e) {
      try {
        // Block#: !dTuUQXwjLol4%)Fx[E+
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", true); // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: tt-!4$,e)@e%JCLJBW|-
        workflowlibrary.completeAndGetNextTaskById('back').then(response => {;
          if(response.name === "success") {
            // Block#: ?5My7{a[,my.1WFCuK%6
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", false); // Describe this function...
            // Block#: m(A=,Y}jz$q]!C7:)$v)
            pageFactory(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: g@f8nYwkj(Ti.A!MFoM6
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("LoginForgotScreen", false); // Block#: ]2A1iAAAScy4a?Z$-jzW
            showError('Could not process data').then(response => {;
            });
          }
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="loginBack"]').on('click', on_loginBack_click);
    // Block#: ]D!H--pC()^M~bE5!891
    function on_continueBtn23_click(e) {
      try {
        // Describe this function...
        // Block#: JW9V{?xdd:We=;:BIr7*
        if(workflowlibrary.getFormPropertyName('ending') != null) {
          // Block#: jO!+atr*o/LO1li|x2zi
          reinitAndClose().then(response => {;
          });
        } else {
          // Block#: J*^hvcM#@u4Oy=^C`+c9
          gotoNext().then(response => {;
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="continueBtn23"]').on('click', on_continueBtn23_click);
    // Block#: [3(Op2%Mm1Y`TW$z#kZG
    function on_screen_showLoginFinalScreen() {
      try {
        // Block#: z]`?s_jd%R:VXyh`s9EZ
        $('[obj-name="lastTitle"]').hide(); // Block#: NxsfOLJIM)dqfc.JlXgy
        $('[obj-name="lastContent"]').hide(); // Describe this function...
        // Block#: P$M4xkL0ssuGEQP|ELW4
        if(workflowlibrary.getFormPropertyName('title') != null) {
          // Describe this function...
          // Block#: 6Qk3.#{XygC6!qNZR=O}
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("lastTitle", (workflowlibrary.getFormPropertyName('title'))); // Block#: ~tKpSR~.Q9OLh:6t/:tL
          $('[obj-name="lastTitle"]').show();
        }
        // Describe this function...
        // Block#: ]7NH9mI=P)S0iE4E.:PL
        if(workflowlibrary.getFormPropertyName('infoText') != null) {
          // Describe this function...
          // Block#: g3Ad|+x8o6dtkaLS1fSI
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("lastContent", (workflowlibrary.getFormPropertyName('infoText'))); // Block#: r6;rT[r0H^N5iUh/?cHB
          $('[obj-name="lastContent"]').show();
        }
        // Block#: (Y-[C,KS[)3V|1|f+}7b
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("continueBtn22", 'Continue');
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="LoginFinalScreen"]').on('show', on_screen_showLoginFinalScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showLoginFinalScreen'] = on_screen_showLoginFinalScreen;
    // Block#: %gv`^+*_VXKh^-wybLmr
    function on_continueBtn22_click(e) {
      try {
        // Block#: ._H}uO6yV@)t[R41fHZM
        onLoginCompleted(getStatus()).then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="continueBtn22"]').on('click', on_continueBtn22_click);
    com.fc.JavaScriptDistLib.Screen.screenPopInit();
    var onQRCodeScanSuccess, onQRCodeScanFailed;
    com.fc.JavaScriptDistLib.QRCodeScanner.configure(onQRCodeScanSuccess, onQRCodeScanFailed);
  };
  var loginlibgiovanni = new LoginLibGIOVANNI();

  function GenericFlowLib() {
    genericflowlib_varmap = {};
    genericflowlib_varmap._debugService = null;

    function WorkflowLibrary() {
      workflowlibrary_varmap = {};
      workflowlibrary_varmap._debugService = null;
      workflowlibrary_varmap._initiatorVar = null;
      workflowlibrary_varmap._initiator = null;
      workflowlibrary_varmap._userName = null;
      workflowlibrary_varmap._userPassw = null;
      workflowlibrary_varmap._processDefKey = null;
      workflowlibrary_varmap._urlSetup = null;
      workflowlibrary_varmap._taskToBeCompleted = null;
      workflowlibrary_varmap._processData = null;
      workflowlibrary_varmap.tempDict = null;
      workflowlibrary_varmap.tempDict1 = null;
      workflowlibrary_varmap._task = null;
      workflowlibrary_varmap._formData = null;
      workflowlibrary_varmap._processVariabes = null;
      workflowlibrary_varmap.tempNum = null;
      workflowlibrary_varmap._tasks = null;
      workflowlibrary_varmap.tempList = null;
      workflowlibrary_varmap._outcomes = null;
      workflowlibrary_varmap._processDefId = null;
      workflowlibrary_varmap._processInstId = null;
      workflowlibrary_varmap._taskId = null;
      workflowlibrary_varmap._formProperties = null;
      workflowlibrary_varmap._formKey = null;
      workflowlibrary_varmap._formName = null;
      workflowlibrary_varmap._formFields = null;
      workflowlibrary_varmap._formId = null;
      workflowlibrary_varmap._processInstance = null;
      workflowlibrary_varmap._processInstances = null;
      workflowlibrary_varmap.tempParam = null;
      workflowlibrary_varmap.tempN2 = null;
      workflowlibrary_varmap._templateKey = null;
      workflowlibrary_varmap.tempListKey = null;
      workflowlibrary_varmap._outcomeAndFieldMapping = null;
      workflowlibrary_varmap._templateType = null;
      workflowlibrary_varmap._currentInitiator = null;
      workflowlibrary_varmap.tempList1 = null;

      function mathRandomInt(a, b) {
        if(a > b) {
          // Swap a and b to ensure a is smaller.
          var c = a;
          a = b;
          b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
      }
      /**
       * Describe this function...
       */
      this.testInitSDKforgetful = testInitSDKforgetful;

      function testInitSDKforgetful() {
        return new Promise(function(resolve, reject) {
          // Block#: C?[y]QkXNHz}A_BP6!zX
          workflowlibrary_varmap._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'forgetfulUser', '4mn3s14C!', 'SDKv11TestFlow', 'https://develop.snapclinical.net:8443']);
          // Block#: AiP%e2SaJeRe?3)t;VAQ
          workflowlibrary_varmap._initiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'initiator'));
          // Block#: Bn5ViK1:e8/%r}h$f7|s
          workflowlibrary_varmap._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userName'));
          // Block#: J9z#8t3+mdYF_P%kQuIA
          workflowlibrary_varmap._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userPassw'));
          // Block#: Eh^@o)%:ej63I{G%zFGB
          workflowlibrary_varmap._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'processDefKey'));
          // Block#: +EEDyY6L{9So^0|bW2Up
          workflowlibrary_varmap._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'urlSetup'));
        });
      }
      /**
       * Describe this function...
       */
      this.TestInitSDK = TestInitSDK;

      function TestInitSDK() {
        return new Promise(function(resolve, reject) {
          // Block#: rQO{,%cUbTaY=47}Q56g
          workflowlibrary_varmap._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'lorenzo+02@foneclay.com', '123456', 'SDKv11TestFlow', 'https://develop.snapclinical.net:8443']);
          // Block#: X1X:~yjfb+;@SH`tUzH+
          workflowlibrary_varmap._initiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'initiator'));
          // Block#: VM9o$anfu2m0n5Y-mzkB
          workflowlibrary_varmap._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userName'));
          // Block#: f$2q36h{3_EXvMmy[{h$
          workflowlibrary_varmap._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'userPassw'));
          // Block#: z=mD)62`^v(+5,tTevOJ
          workflowlibrary_varmap._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'processDefKey'));
          // Block#: P:@L;%C93,h].q1{Eb69
          workflowlibrary_varmap._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._initiatorVar, 'urlSetup'));
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflowWithCredentials = initWorkflowWithCredentials;

      function initWorkflowWithCredentials(User, Password, initiator) {
        return new Promise(function(resolve, reject) {
          // Block#: zC@!f!v3k}}*b|GXa$-u
          if(!(User == null || Password == null)) {
            // Block#: ]^$Y;X0-}*l_4$nA?jB9
            workflowlibrary_varmap._userName = User;
            // Block#: Tx:Fiz?m4vg5,~ypEHr;
            workflowlibrary_varmap._userPassw = Password;
            // Block#: fYiCub|QVm,4;am/r5Ax
            com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://develop.snapclinical.net:8443","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
            com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(workflowlibrary_varmap._userName, workflowlibrary_varmap._userPassw, workflowlibrary_varmap._userName, "mobileApp", "https://develop.snapclinical.net:8443");
            // Block#: r]_8{Ov/L2qxdxQq0.DT
            if(initiator == null) {
              // Block#: u]~/HF,82OZm!?sA;$h]
              workflowlibrary_varmap._initiator = '';
            } else {
              // Block#: L?Dm~(C;%$KM[cs^wt{C
              workflowlibrary_varmap._initiator = initiator;
            }
          }
          // Block#: ^s$Sn}g4Wrilbw03t41H
          eraseParsedVars().then(response => {;
          });
          // Block#: Y@S#J}`:]1w3U^FU}d7F
          console.log('SDK initWorkflow with credentials called');
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push('SDK initWorkflow with credentials called');
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTask = completeAndGetNextTask;

      function completeAndGetNextTask(outcomeObj) {
        return new Promise(function(resolve, reject) {
          // Block#: 7=KJb9ZpU,se~aM[d,0g
          console.log(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: mysWPqPsV*o4%n_)0nH9
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._taskToBeCompleted, 'outcome')) {
            // Block#: A~!@U:B@{vHpa{R?sQ#{
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'outcome', outcomeObj);
          }
          // Block#: *AL$m8VnvpB+=K%.x9[g
          console.log(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._taskToBeCompleted)))].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._taskToBeCompleted)))].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: Tb%Z0:Q`rId2rhD:=/4l
          console.log(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(workflowlibrary_varmap._taskToBeCompleted))));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(workflowlibrary_varmap._taskToBeCompleted))));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: ^Vv#,#ip6}#r84@zpsv%
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(workflowlibrary_varmap._taskToBeCompleted,
            function(process_data) {
              // Block#: !F:A=9i{n^MTKen4#xJ;
              workflowlibrary_varmap._processData = process_data;
              // Block#: .}]B1v{@Ij+I6k[?]uut
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !fTLMH]:Zf0c|W{kE/[V
              console.log(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 26NQ/=^-rX@1,8O|CP#/
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: $2Mybx(ARQF?F..vx3Kc
              console.log(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: oDp}wFLVeirCQ#0?:^_m
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getInitVar = getInitVar;

      function getInitVar() {
        // Block#: gPq~?;_z-~G_(Bcn^=|d
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [workflowlibrary_varmap._initiator, workflowlibrary_varmap._userName, workflowlibrary_varmap._userPassw, workflowlibrary_varmap._processDefKey, workflowlibrary_varmap._urlSetup]);
        // Block#: N?w23TNVy09rj$)*e(Y3
        console.log(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessWithVars = startNewProcessWithVars;

      function startNewProcessWithVars(processDefKey, forceStartNewInstance, listOfVars) {
        return new Promise(function(resolve, reject) {
          // Block#: l`Yd*l[g8F.wxD10iBmH
          workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: fs7fA;$I_%*D,Q_;ej0e
          if(listOfVars != null) {
            // Block#: x7z{V{^lJy:6v9A:):i~
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(listOfVars, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string']))
            // Block#: Gd:QsRFiPFHepLX^;awJ
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'processVariables', listOfVars);
          }
          // Block#: $;SbM8S3Y=bM..5rEksT
          workflowlibrary_varmap._processDefKey = processDefKey;
          // Block#: (P${f{/X=Gx8=ZK=F3nT
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, workflowlibrary_varmap.tempDict1), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: YpWf.ePiTX),W68/JQ?j
              workflowlibrary_varmap._processData = process_data;
              // Block#: ^z?^L68XOE@d2!(k.7B8
              parseProcessData(false, null).then(response => {;
              });
              // Block#: TgLhWKzt0^{|!u~bXzy*
              console.log(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 9cQ,mM6!Y|yAmOz0d:rg
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: ~r=HiT_6_QbNMax2ZFL.
              console.log(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: ]g3vK,Q.($GQ{;;p2FkF
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTaskById = completeAndGetNextTaskById;

      function completeAndGetNextTaskById(outcomeId) {
        return new Promise(function(resolve, reject) {
          // Block#: Yvtdyc_^[]=}cSnI*~4e
          console.log(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: b#$ien{n?@z|Tuv9=bl8
          if(doesExistOutcome(outcomeId)) {
            // Block#: 5y1H.}mF7iDlhW.Iz_Xd
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'outcome', getOutcome(outcomeId));
          }
          // Block#: qI{slP6*N3L0!OWa8/pz
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(workflowlibrary_varmap._taskToBeCompleted,
            function(process_data) {
              // Block#: XdDy=(Gj`rF-EuuI.hEb
              workflowlibrary_varmap._processData = process_data;
              // Block#: !pxYgrn2JJKS#y%ha5xV
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !s|V2~N*I;QtUp3W*$~?
              console.log(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: @`ke?Ic1NMo4q~Vs8KRW
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: J=y3t29Dhb#p[*-{K]u#
              console.log(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: RN_Tr*,Y:K?.OtKTT$rK
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflow = initWorkflow;

      function initWorkflow() {
        return new Promise(function(resolve, reject) {
          // Block#: hSdJ!zGqd3nW`R(|Sf|b
          eraseParsedVars().then(response => {;
          });
          // Block#: 1,)Pmk4]Lm63aroPtn?T
          console.log('SDK initWorkflow without credentials called');
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push('SDK initWorkflow without credentials called');
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessData = getProcessData;

      function getProcessData() {
        // Block#: cJWzC?e4K2.s.bS5T3z+
        console.log(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._processData;
      }
      /**
       * To check if another task is available (true)
       * or the current flow is at the end (false).
       */
      this.doesExistCurrentTask = doesExistCurrentTask;

      function doesExistCurrentTask() {
        // Block#: =8(Ef*9BC62$E7_l3P#d
        console.log('CurrentTask: ');
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push('CurrentTask: ');
          workflowlibrary_varmap.debugService.printLog();
        }
        // Block#: p7lzgBtkx$1VaQ;ah~M0
        console.log(workflowlibrary_varmap._task);
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._task);
          workflowlibrary_varmap.debugService.printLog();
        }
        // Block#: _yNMsE4};MK%xzk^NnAp
        if(workflowlibrary_varmap._task == null) {
          return false;
        }
        // Block#: Dx14Nbp7RJ%;nhUmlA%g
        if((com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task)) == null) {
          return false;
        }
        return !!(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task)).length;
      }
      /**
       * Describe this function...
       */
      this.getCurrentTask = getCurrentTask;

      function getCurrentTask() {
        // Block#: A//H39vF:Nwf4)0Ptt)[
        console.log(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._task))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._task;
      }
      /**
       * Describe this function...
       */
      this.getForm = getForm;

      function getForm() {
        // Block#: hi_6#X@QWmYo``}%E6ns
        console.log(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._formData))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._formData))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formData;
      }
      /**
       * Describe this function...
       */
      this.setProcessVariable = setProcessVariable;

      function setProcessVariable(name2, value, type) {
        return new Promise(function(resolve, reject) {
          // Block#: fl``|]bZhX,hsd+4=UBz
          console.log(['SDK setProcessVariable num of vars: ', safeLength(workflowlibrary_varmap._processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['SDK setProcessVariable num of vars: ', safeLength(workflowlibrary_varmap._processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: /#+h`aY2tR8.(S4nB`Jc
          if(doesExistCurrentTask()) {
            // Block#: z-p:pd.s)zS|{{7^r{[c
            if(doesContainProcessVariableName(name2)) {
              // Block#: }rNCd{le_?[aGymKA/FM
              workflowlibrary_varmap.tempNum = 0;
              // Block#: Re(v%NPcP]DK#yyeoy!w
              var item_list = workflowlibrary_varmap._processVariabes;
              for(var item_index in item_list) {
                item = item_list[item_index];
                // Block#: ^!7$,e6QAx)K!Ixl.0mT
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
                  // Block#: *S+*GL/c@On+rlqx,}55
                  workflowlibrary_varmap.tempDict = item;
                  // Block#: J5@4/Gl5WsPEv-DhwD7/
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'value', value);
                  // Block#: R.N)idyNnfb7(I+skE3s
                  workflowlibrary_varmap._processVariabes[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
                }
                // Block#: 7/Us9:R!s_F~=37{d^Q?
                workflowlibrary_varmap.tempNum = workflowlibrary_varmap.tempNum + 1;
              }
            } else {
              // Block#: K8{b.]4*)fBtMo7}Ds[G
              workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'type', 'value'], [name2, type, value]);
              // Block#: wFb8gv7liSAXvA_Jgk.A
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap._processVariabes, workflowlibrary_varmap.tempDict)
            }
            // Block#: )}(N9doX5kiVPt#_uk5@
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._task, 'processVariables', workflowlibrary_varmap._processVariabes);
            // Block#: D-i;X3`Uwn^AClSlvd:5
            workflowlibrary_varmap._tasks[0] = workflowlibrary_varmap._task;
            // Block#: +a61$mWaDwwZKQTEgH~Y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'tasks', workflowlibrary_varmap._tasks);
            // Block#: fPHS4XlNp%eN-:,XOjB,
            console.log(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(workflowlibrary_varmap._processVariabes)));
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(workflowlibrary_varmap._processVariabes)));
              workflowlibrary_varmap.debugService.printLog();
            }
            // Block#: KlEG$rEaQ~Rk}950-A8S
            workflowlibrary_varmap.tempNum = getIndexOfVarInTaskToBeCompleted(name2);
            // Block#: ]SDFJ:[~R3NMXK*$@h~i
            workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'processVariables'));
            // Block#: I+_=:xhSHjH!OU$iVp(-
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "EQ", -1)) {
              // Block#: vN3ZQdo#dvO^)W0M/v`Z
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, workflowlibrary_varmap.tempDict)
            } else {
              // Block#: `g*^=/2Ty+Z434}h4Wjv
              workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
            }
            // Block#: @uV`SeGSX@u!S/V=^_:y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'processVariables', workflowlibrary_varmap.tempList);
            // Block#: {,PP60KJ^8T[^~BYqau~
            console.log(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(workflowlibrary_varmap.tempList)));
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(workflowlibrary_varmap.tempList)));
              workflowlibrary_varmap.debugService.printLog();
            }
          } else {
            // Block#: 31gi0ioB4Lvw}%V_e2v[
            console.log('SDK no current Task ... nothing to do');
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push('SDK no current Task ... nothing to do');
              workflowlibrary_varmap.debugService.printLog();
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.startFlow = startFlow;

      function startFlow() {
        return new Promise(function(resolve, reject) {
          // Block#: zTc|qmmU[Gt6iSegQ#l!
          startNewProcessInstance(workflowlibrary_varmap._processDefKey, true).then(response => {;
            if(response.name === "success") {
              // Block#: J?:2@%=k(-w=!#FR(G$M
              ShowProcessInfo().then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: %de7v4oS+C:*cqE:Vnbu
              console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: i26()7nO]yfWLMni[tzg
              AppendInfo('-- startFlow  ON FAILURE ', (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data))).then(response => {;
              });
            }
          });
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessVariables = getProcessVariables;

      function getProcessVariables() {
        // Block#: E`snYA58/d#sQh_a17C[
        console.log(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._processVariabes))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._processVariabes))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._processVariabes;
      }
      /**
       * To retrieve all the outcomes coming from the current form.
       */
      this.getOutcomes = getOutcomes;

      function getOutcomes() {
        // Block#: sy(^MV.6A9]*3VwE5d=[
        console.log(String('SDK getFormOutcomes  number of items: ') + String(safeLength(workflowlibrary_varmap._outcomes)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormOutcomes  number of items: ') + String(safeLength(workflowlibrary_varmap._outcomes)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._outcomes;
      }
      /**
       * Describe this function...
       */
      this.parseProcessData = parseProcessData;

      function parseProcessData(onlyTasks, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: @gAO(;-Sg]8To(=X}re4
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._processData, 'tasks')) {
            // Block#: Yr/Jjy)mmHX]y^R@fYj.
            if(onlyTasks) {
              // Block#: LFd#A)k1i#tv7du[`:iA
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'processDefinitionId', workflowlibrary_varmap._processDefId);
              // Block#: DEb*@bhZ(iB+Q*4jdIfX
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'processInstanceId', workflowlibrary_varmap._processInstId);
            } else {
              // Block#: SP]WIS;PVMZed}w;E,%l
              workflowlibrary_varmap._processDefId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._processData, 'processDefinitionId'));
              // Block#: )-n$f=^RE^s%/u/v5CG`
              workflowlibrary_varmap._processInstId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._processData, 'processInstanceId'));
            }
            // Block#: {)K1fEF5ZmskQZ(gCUMf
            workflowlibrary_varmap._tasks = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._processData, 'tasks'));
            // Block#: -|}FM!p8ouLw27^W5+^X
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap._tasks.length, "NEQ", 0)) {
              // Block#: hjaU2,-{9{E4g6;?bkQH
              if(taskName == null) {
                // Block#: wznhThYgRvX5+o#UsnFF
                workflowlibrary_varmap.tempNum = 0;
              } else {
                // Block#: l+-TCIW([@{]dFmVzBKP
                workflowlibrary_varmap.tempNum = findTask(taskName);
              }
              // Block#: EKSB-:X05^]lT.T}3xo$
              console.log(['SDK  Parse process data using this index    ', workflowlibrary_varmap.tempNum, ' to select the task in the list'].join(''));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(['SDK  Parse process data using this index    ', workflowlibrary_varmap.tempNum, ' to select the task in the list'].join(''));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 9n(mzPhQVqIP@tsP9}Q,
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "GTE", 0)) {
                // Block#: %Y.h?!mLo?*:XJ`?HC(x
                workflowlibrary_varmap._task = workflowlibrary_varmap._tasks[workflowlibrary_varmap.tempNum];
                // Block#: @s+xVTyZu?vH{3/QqK/M
                workflowlibrary_varmap._taskId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'taskId'));
                // Block#: ;lkB|GpVV+eKQ-NXc.[p
                workflowlibrary_varmap._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['taskId', 'processVariables'], [workflowlibrary_varmap._taskId, []]);
                // Block#: /n)2UnL6A#Yt+#`@=/!I
                console.log(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: w(1=`TR5)MjF5YS%4//%
                workflowlibrary_varmap._processVariabes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'processVariables'));
                // Block#: dt-R4,=3zf*9/Lf2{s(k
                workflowlibrary_varmap._formProperties = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'formProperties'));
                // Block#: 13nFK!PGr8GVn`j}+K0a
                buildOutcomeAndFieldMappingList().then(response => {;
                });
                // Block#: tlpg10)NnX990p@Dib{h
                buildCurrentInitiator().then(response => {;
                });
                // Block#: lQV-ld|j0(,1c+}iRQK2
                workflowlibrary_varmap._formKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'formKey'));
                // Block#: _xH3pb~tChiPpQO_m7%4
                if(workflowlibrary_varmap._formKey != null) {
                  // Block#: o(t:yCA-?1Xwkj5l.`bo
                  if(workflowlibrary_varmap._formKey != '') {
                    // Block#: Dcm3,A1%m7(Ld0be,b6q
                    console.log(workflowlibrary_varmap._task);
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._task);
                      workflowlibrary_varmap.debugService.printLog();
                    }
                    // Block#: ~|?3Hc+J|7y0s?}/MYHc
                    workflowlibrary_varmap._formData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'formData'));
                    // Block#: [?w3ImWd`tU6Gy)$L$oG
                    console.log(workflowlibrary_varmap._formData);
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._formData);
                      workflowlibrary_varmap.debugService.printLog();
                    }
                    // Block#: I_.O{No3oop2:d(jf,+^
                    workflowlibrary_varmap._formName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'name'));
                    // Block#: `iy*JV!dKW79X(^@lpt,
                    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'fields')) == null) {
                      // Block#: f3ws+*g.~+!U]N$xxR11
                      workflowlibrary_varmap._formFields = [];
                    } else {
                      // Block#: 6#|4G~yZXaOXUC/z9-3W
                      workflowlibrary_varmap._formFields = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'fields'));
                    }
                    // Block#: [%[RlD+;SFjjw_#uXGLy
                    console.log(workflowlibrary_varmap._formFields);
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(workflowlibrary_varmap._formFields);
                      workflowlibrary_varmap.debugService.printLog();
                    }
                    // Block#: 8Bokob5@%F}4F$o9O-Ym
                    workflowlibrary_varmap._outcomes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'outcomes'));
                    // Block#: `GuQb`Ket2{nA?)ypK%+
                    workflowlibrary_varmap._formId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'id'));
                    // Block#: 3mR|bI,_w:xDPPp!`yWL
                    buildTemplateKey().then(response => {;
                    });
                    // Block#: *(vF8uJk=}.eajVrOY5S
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData', com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'key', 'name', 'fields'], [workflowlibrary_varmap._formId, workflowlibrary_varmap._formKey, workflowlibrary_varmap._formName, []]));
                    // Block#: 4ztn~_pPUfT+$CuSOtcZ
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'outcome', com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary());
                    // Block#: SbEu^j+BhYGK*7#yBG;H
                    console.log(['SDK  task to be completed, added ', 'formId formKey and formName:', workflowlibrary_varmap._formId, ' ', workflowlibrary_varmap._formKey, ' ', workflowlibrary_varmap._formName, '  and fields as empty list'].join(''));
                    if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                      workflowlibrary_varmap.debugService.traces.push(['SDK  task to be completed, added ', 'formId formKey and formName:', workflowlibrary_varmap._formId, ' ', workflowlibrary_varmap._formKey, ' ', workflowlibrary_varmap._formName, '  and fields as empty list'].join(''));
                      workflowlibrary_varmap.debugService.printLog();
                    }
                  }
                }
              } else {
                // Block#: *w]5bGrB$}/{=EwsppeN
                eraseParsedTasks().then(response => {;
                });
              }
            } else {
              // Block#: }cF{ubs(?uKMmX=_xdGE
              eraseParsedTasks().then(response => {;
              });
            }
          } else {
            // Block#: R`K;C%o,{rT^ES.)8EH;
            if(onlyTasks == false) {
              // Block#: E#Cds}sp)(bP`iRL`A@h
              eraseParsedVars().then(response => {;
              });
            } else {
              // Block#: DT_2-W;?,?{zDoe@jp)o
              eraseParsedTasks().then(response => {;
              });
            }
          }
        });
      }
      /**
       * To set the value of a specific field (addressed by its id) in the current form.
       */
      this.setField = setField;

      function setField(id, value) {
        return new Promise(function(resolve, reject) {
          // Block#: TzKGO;g_YjLqhS#0X?XE
          workflowlibrary_varmap.tempNum = 0;
          // Block#: Gmr6DFY_$]$Onm?wH=K8
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "LT", workflowlibrary_varmap._formFields.length)) {
            // Block#: ya6:gp/0UhHZ^jZ,n{ws
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formFields[workflowlibrary_varmap.tempNum], 'id'), "EQUAL", id)) {
              // Block#: BbpN{WQk!0#mQr.=Y1L;
              workflowlibrary_varmap.tempDict = workflowlibrary_varmap._formFields[workflowlibrary_varmap.tempNum];
              // Block#: ;,+{i7(;#tUIDzDdf{KF
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'value', value);
              // Block#: lUqh=7+A/C(IshM=g9Rk
              workflowlibrary_varmap._formFields[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
              // Block#: MAcVF+F1OQH~RUf4yV(d
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._formData, 'fields', workflowlibrary_varmap._formFields);
              // Block#: XU[?$x9Vd_{6#8=^H.?5
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._task, 'formData', workflowlibrary_varmap._formData);
              // Block#: o6A9$vEvQ$CX`hZNDqc,
              workflowlibrary_varmap._tasks[0] = workflowlibrary_varmap._task;
              // Block#: 6IEe*mXQ+Hb:/3;b%:n~
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._processData, 'tasks', workflowlibrary_varmap._tasks);
              // Block#: $GFA%qdt(C`srr69+Q1@
              console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', workflowlibrary_varmap.tempNum].join(''));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', workflowlibrary_varmap.tempNum].join(''));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: uR5[y9z{]{l:~;r1?V9c
              workflowlibrary_varmap.tempNum = getIndexOfFieldInTaskToBeCompleted(id);
              // Block#: _E;9Ai[d5z:$/`.c%=~I
              workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData'), 'fields'));
              // Block#: xML5Wx(Qp/zE(45t7ol!
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempNum, "EQ", -1)) {
                // Block#: UI[pML9Gr$GM?Q/B9gg8
                com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, workflowlibrary_varmap.tempDict)
                // Block#: of_9V_*h-7[70WY{BH#1
                console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
              } else {
                // Block#: jYu#z)/4=AT3N1OT.QDA
                workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict;
                // Block#: v0v6MPF7=oRnhD2iJyJj
                console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', workflowlibrary_varmap.tempNum].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', workflowlibrary_varmap.tempNum].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
              }
              // Block#: v#u]|-I^I$=I%Ra[/shq
              workflowlibrary_varmap.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData'));
              // Block#: )fj(zVkdRK;R9vGUb5`u
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'fields', workflowlibrary_varmap.tempList);
              // Block#: 4!+*uIn7R;Tlg62eD_}_
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData', workflowlibrary_varmap.tempDict1);
              // Block#: :u:dF[+1Igp{Y96s#Af1
              workflowlibrary_varmap.tempNum = workflowlibrary_varmap._formFields.length;
            }
            // Block#: J*42yn66r4)vZ1]G,:{R
            workflowlibrary_varmap.tempNum = workflowlibrary_varmap.tempNum + 1;
          }
        });
      }
      /**
       * Describe this function...
       */
      this.eraseParsedVars = eraseParsedVars;

      function eraseParsedVars() {
        return new Promise(function(resolve, reject) {
          // Block#: :;k}H}ugLxKk@y`$!0.+
          workflowlibrary_varmap._processDefId = '';
          // Block#: 4#+=3[=gnmpKOQe+lS2b
          workflowlibrary_varmap._processInstId = '';
          // Block#: @klgC/T(4IX/WgYh24=/
          workflowlibrary_varmap._processData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: Tu5:|4f`Q0HDD8OoLA;9
          eraseParsedTasks().then(response => {;
          });
        });
      }
      /**
       * Describe this function...
       */
      this.eraseProcessInstances = eraseProcessInstances;

      function eraseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: rxyAb{L]yataOl5ty$~p
          workflowlibrary_varmap._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: j%g1*^M^9htiO1N,!vXP
          workflowlibrary_varmap._processInstances = [];
        });
      }
      /**
       * Describe this function...
       */
      this.getFormProperties = getFormProperties;

      function getFormProperties() {
        // Block#: Q9K_jdXSe}PAge/y=Im@
        console.log(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._formProperties))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._formProperties))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formProperties;
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldByRef = findFieldByRef;

      function findFieldByRef(UIObjRef) {
        // Block#: E`%o_%L1dGWeMJRKQrxZ
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: AmMLWFRjWTe2^Zsu;kDQ
        if(UIObjRef == null) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: A|bEyO8:0#l8IBVOquC+
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(UIObjRef, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: 0-fD_8Yu$rxjLln(~]Z.
        var item_list2 = workflowlibrary_varmap._formFields;
        for(var item_index2 in item_list2) {
          item = item_list2[item_index2];
          // Block#: }:t(bf}yQx-BclxW}L/T
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'params')) {
            // Block#: !?53|IPkE6/t6r+R#ADI
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref')) {
              // Block#: U0Zp:/!GtSl{nv+A!ed%
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref'), "EQUAL", UIObjRef)) {
                // Block#: jO4#NAf@zsC)3Q48by)U
                workflowlibrary_varmap.tempDict = item;
              }
            }
          }
        }
        // Block#: Avn^RG~mVyG$vg%D6oud
        console.log(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFormKey = getFormKey;

      function getFormKey() {
        // Block#: UF+`UV=b`,zevWhv#k+]
        console.log(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formKey)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formKey)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formKey;
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessInstance = startNewProcessInstance;

      function startNewProcessInstance(processDefKey, forceStartNewInstance) {
        return new Promise(function(resolve, reject) {
          // Block#: }q/,[;-@$g=WGfa}:bNG
          workflowlibrary_varmap.tempParam = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: _.a@//oU1{WOm%#o/xf1
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempParam, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string'])]);
          // Block#: zIQs3yCF/NkA(?4/|u-v
          if(workflowlibrary_varmap._initiator != null) {
            // Block#: ;/m,htUp.hBP{I/Ez~XO
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
              // Block#: sPF35ko=|eWU*@pLPx7M
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempParam, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: @]Ba!E=3tn~Oj+Wf+FOr
          workflowlibrary_varmap._processDefKey = processDefKey;
          // Block#: w?kgPk4G/`abd)qr0~)@
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, workflowlibrary_varmap.tempParam), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: 4f$QXZ+E0Aq{G1kdn:BL
              workflowlibrary_varmap._processData = process_data;
              // Block#: Ffc^U`Q4:KIi:s8TwD)p
              parseProcessData(false, null).then(response => {;
              });
              // Block#: YNvH8H}e45(z6)yl=%zg
              console.log(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: `XnGAXK_~8#a8^^1Q0pB
              resolve({
                name: "success",
                data: workflowlibrary_varmap._processData
              });
            },
            function(error_data) {
              // Block#: QxAXGB2r!RBjr?P,.I/w
              console.log(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: FWJsGFdBn_II9yj_]B1g
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfFieldInTaskToBeCompleted = getIndexOfFieldInTaskToBeCompleted;

      function getIndexOfFieldInTaskToBeCompleted(id) {
        // Block#: 5=t7)tc,=*|1%EX*E:ar
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._taskToBeCompleted, 'formData')) {
          // Block#: e^MNyo:cL}rgzwQiDh:W
          workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'formData'), 'fields'));
          // Block#: I8*RkEssW?gZN6oC^`fv
          workflowlibrary_varmap.tempN2 = 0;
          // Block#: Rmax|B_*1=ZM(jS@if@z
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempN2, "LT", workflowlibrary_varmap.tempList.length)) {
            // Block#: Vd=`^eeI0qj+J}/%LOK$
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempN2], 'id'), "EQUAL", id)) {
              return workflowlibrary_varmap.tempN2;
            }
            // Block#: Z{Jl#bGbdcj];r]_hB?%
            workflowlibrary_varmap.tempN2 = workflowlibrary_varmap.tempN2 + 1;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.doesContainProcessVariableName = doesContainProcessVariableName;

      function doesContainProcessVariableName(target) {
        // Block#: V|qJmmTDcBN/R;.~0*!x
        if(target == null || com.fc.JavaScriptDistLib.TextLib.textComparison(target, "EQUAL", '')) {
          return false;
        }
        // Block#: ryPt/oi=;{`_=;[IsFSs
        var item_list3 = workflowlibrary_varmap._processVariabes;
        for(var item_index3 in item_list3) {
          item = item_list3[item_index3];
          // Block#: /~(YAz$I4GpUepu5HhmT
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", target)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getTemplateKey = getTemplateKey;

      function getTemplateKey() {
        // Block#: +I(?+Ahsb|IJ:@-Qd^qq
        console.log(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._templateKey)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._templateKey)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._templateKey;
      }
      /**
       * Describe this function...
       */
      this.parseProcessInstances = parseProcessInstances;

      function parseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: A+6!5KzJQo/kx!@}Et:g
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap._processInstances.length, "GT", 0)) {
            // Block#: f5%|B..:cO+qaH/~Zye1
            workflowlibrary_varmap._processInstance = workflowlibrary_varmap._processInstances[0];
            // Block#: c-;=6HC9M$?A#fcC5)-2
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._processInstance, 'processInstanceId')) {
              // Block#: e1I,qRai}Ej2NQ_D2mB|
              console.log(['SDK parseProcessInstances num of instances: ', workflowlibrary_varmap._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processInstance)))].join(''));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(['SDK parseProcessInstances num of instances: ', workflowlibrary_varmap._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processInstance)))].join(''));
                workflowlibrary_varmap.debugService.printLog();
              }
            }
          } else {
            // Block#: ]Hdx)(J/f!Pd:P7lp,Z1
            workflowlibrary_varmap._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: 13[HIvY12@6=}71jk5/I
            console.log('SDK parseProcessInstances NO instances');
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push('SDK parseProcessInstances NO instances');
              workflowlibrary_varmap.debugService.printLog();
            }
          }
        });
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveProcessInstances = getActiveProcessInstances;

      function getActiveProcessInstances(processDefKey, latestVersion) {
        return new Promise(function(resolve, reject) {
          // Block#: z2@:P7^44=~j)4}58Q-Y
          workflowlibrary_varmap._processDefKey = processDefKey;
          // Block#: j*]!vGv^qc[AGgp]`PY8
          workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processDefinitionKey'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._processDefKey))]);
          // Block#: 4t|Sp9YrZXU$Hx`=Lu};
          if(latestVersion != null) {
            // Block#: 5Z/WWUm#YB_jGZ?aCUMk
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'latestVersion', latestVersion);
          }
          // Block#: (?q[nPn/3eWB8,eb:c)W
          if(workflowlibrary_varmap._initiator != null) {
            // Block#: EwO-oR3l$s-)J!ZV]?OJ
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
              // Block#: KjohidB/ikkCe{|^PnsL
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: $J:L#(;s|~*0GI[NeS,n
          console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: d4nuXQ:5M8V2yVC2y+cp
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/flow-api/snap-api/get-process-instances', "POST", JSON.stringify(workflowlibrary_varmap.tempDict1),
            function(data) {
              // Block#: ~wZ/RQ.G`)9#C+xdt?lo
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(data, 'processInstances')) {
                // Block#: r6o$^E*L7-2jj(nbidL1
                workflowlibrary_varmap._processInstances = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'processInstances'));
                // Block#: W@/NoI4WJ=cM9gHZ]Z{1
                console.log('SDK getActiveProcessInstances success');
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push('SDK getActiveProcessInstances success');
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: ^*^ulNcZnM=2C;BIiBe!
                parseProcessInstances().then(response => {;
                });
                // Block#: y/ur{vaAvbQV?t^(uQqL
                resolve({
                  name: "success",
                  data: data
                });
              } else {
                // Block#: gh%$j0MN=-[jO#@E^*nZ
                console.log('SDK getActiveProcessInstances NO processInstances field in dictionary');
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push('SDK getActiveProcessInstances NO processInstances field in dictionary');
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: FKr.fH,-V)8]rYEgqsS2
                resolve({
                  name: "failure",
                  data: data
                });
              }
            },
            function(error) {
              // Block#: Fy|bVWQgN?k:ln$%r/3`
              console.log(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: R5:`s`FGH$IfPAZQ_IT_
              resolve({
                name: "failure",
                data: error
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.printoutListOfDict = printoutListOfDict;

      function printoutListOfDict(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: aLpZNj6,C{nQZ/8N/?+5
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {
            // Block#: oa!7k8bDPEV(7Yz{Gq2d
            workflowlibrary_varmap.tempListKey = [];
            // Block#: JNrWv?.{/%v[C^[I+C$`
            workflowlibrary_varmap.tempListKey = (com.fc.JavaScriptDistLib.Dictionary.getKeys(inputListOfObj[0]));
            // Block#: ]aeoYkEpa;]uy2w`G{*{
            var indexpo1_end = inputListOfObj.length;
            var indexpo1_inc = 1;
            if(1 > indexpo1_end) {
              indexpo1_inc = -indexpo1_inc;
            }
            for(indexpo1 = 1; indexpo1_inc >= 0 ? indexpo1 <= indexpo1_end : indexpo1 >= indexpo1_end; indexpo1 += indexpo1_inc) {}
          }
        });
      }
      /**
       * To retrieve all data coming from all the fields in the current form.
       */
      this.getFields = getFields;

      function getFields() {
        // Block#: 2AE2h7pC5GiDeqp.l2RD
        console.log(String('SDK getFields  number of items: ') + String(safeLength(workflowlibrary_varmap._formFields)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFields  number of items: ') + String(safeLength(workflowlibrary_varmap._formFields)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formFields;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMappingNames = getOutcomeAndFieldMappingNames;

      function getOutcomeAndFieldMappingNames() {
        // Block#: }]hO!V5itfl+*{@e+3t;
        workflowlibrary_varmap.tempList = [];
        // Block#: =E!_C0Emn$i=4w5BY1U{
        var item_list4 = workflowlibrary_varmap._outcomeAndFieldMapping;
        for(var item_index4 in item_list4) {
          item = item_list4[item_index4];
          // Block#: (`rebY,UT0Yp!34(.Ddb
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'))))
        }
        // Block#: URUoW(x4w51U!V.Ij+ls
        console.log(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap.tempList))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap.tempList))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getRadioButtons = getRadioButtons;

      function getRadioButtons(id) {
        // Block#: kL~]$:SJ`oHep_=_meyI
        workflowlibrary_varmap.tempList = [];
        // Block#: O5*Z-q4DqKqp:D5TDq8|
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: ?lZ`A_qD[jdQ2wwoB5)z
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: `7;|(C`F]~KCQv~l|D9k
            workflowlibrary_varmap.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: pl9Eqx:ncTQfLCrr~aD2
        console.log(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getFormName = getFormName;

      function getFormName() {
        // Block#: aKTnD6jr`A{q{YTZwO7Z
        console.log(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formName)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._formName)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._formName;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMapping = getOutcomeAndFieldMapping;

      function getOutcomeAndFieldMapping() {
        // Block#: HYJJO3YM}m5PH)dot_;L
        console.log(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._outcomeAndFieldMapping;
      }
      /**
       * Describe this function...
       */
      this.eraseParsedTasks = eraseParsedTasks;

      function eraseParsedTasks() {
        return new Promise(function(resolve, reject) {
          // Block#: `1)6I?;*46Elnhk!$W-%
          workflowlibrary_varmap._tasks = [];
          // Block#: ]erpGI6Z!az:aaD*0IMe
          workflowlibrary_varmap._task = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: tsGx{m1uu,{DX]t/$:1A
          workflowlibrary_varmap._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: L$AjHOz3TmMbAy:IH!6(
          workflowlibrary_varmap._taskId = '';
          // Block#: E/4U*6@{zzW-2_iiNoAv
          workflowlibrary_varmap._processVariabes = [];
          // Block#: yvsCWM*;UKj4XKK6hFA4
          workflowlibrary_varmap._formKey = '';
          // Block#: 4DX?v}b)@G|W2MFTa=;M
          workflowlibrary_varmap._formName = '';
          // Block#: }n|T|=,dlISig~Y?W-Mx
          workflowlibrary_varmap._formProperties = [];
          // Block#: -?Waxyi;sEo1UMZiyL]Y
          workflowlibrary_varmap._outcomeAndFieldMapping = [];
          // Block#: rE)vDJewW2F{[A7rk$#5
          workflowlibrary_varmap._templateType = '';
          // Block#: _is#z`ZULGZl!a_NauGg
          workflowlibrary_varmap._templateKey = '';
          // Block#: Ayd96ng%IgXwf28dtSEx
          workflowlibrary_varmap._formData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: pHR%GqwfZG[oqh_(Y0MH
          workflowlibrary_varmap._formFields = [];
          // Block#: {YG|c3Fb12Ro}cZ[9gCq
          workflowlibrary_varmap._outcomes = [];
          // Block#: |[z2#-caB;%Pd/=[|f31
          workflowlibrary_varmap._formId = '';
        });
      }
      /**
       * To retrieve all data coming from a specific
       * field (addressed by its id) in the current form.
       */
      this.getField = getField;

      function getField(id) {
        // Block#: xL!qrflVW3U]^6E[Ka7X
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: )sJIHe}gUXt?_9iK+^0?
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: XgNIt?jJ6?T9CsWs3/:U
        var item_list5 = workflowlibrary_varmap._formFields;
        for(var item_index5 in item_list5) {
          item = item_list5[item_index5];
          // Block#: !`bO*xQV7m:mj+Q|}a*}
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: %]a_L$pkI|-oIgp;d_^~
            workflowlibrary_varmap.tempDict = item;
          }
        }
        // Block#: {qd=G*Ep}cbKLFgQA)m?
        console.log(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFieldAttribute = getFieldAttribute;

      function getFieldAttribute(id, attribute) {
        // Block#: AE8/N]U,,8buovGLSUT^
        workflowlibrary_varmap.tempDict = getField(id);
        // Block#: .Fqp|67m^Ay!]7@~[6)L
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, attribute))) {
          return null;
        }
        // Block#: AMknf3K|MoXZ{H:1R/_Z
        console.log(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getCheckBoxFields = getCheckBoxFields;

      function getCheckBoxFields() {
        // Block#: KgYQHyA[{0h%=dh`_w=w
        workflowlibrary_varmap.tempList = [];
        // Block#: x=6]f[D:]WW2.Ae_b(LN
        var item_list6 = workflowlibrary_varmap._formFields;
        for(var item_index6 in item_list6) {
          item = item_list6[item_index6];
          // Block#: !VHezD%rcRIQgXbY6I#-
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'boolean') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'FormField')
          ) {
            // Block#: W.R+J~2c.47gbb7g=0Kr
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, item)
          }
        }
        // Block#: H2)WXl^eh~i-@e^Sdj_m
        console.log(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(workflowlibrary_varmap.tempList)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(workflowlibrary_varmap.tempList)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getProcessVariable = getProcessVariable;

      function getProcessVariable(name2) {
        // Block#: ;#jDl#n`yf:1,8;:lnAR
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: XltA0Qsjuc@qZk+g@D:~
        if(name2 == null) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: @(^uxre=m-ru5AROPHfj
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(name2, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: .t6K,XR}:7`WLDV*s|bh
        var item_list7 = workflowlibrary_varmap._processVariabes;
        for(var item_index7 in item_list7) {
          item = item_list7[item_index7];
          // Block#: M[|u!ld}E3HE4Gq?d?Cb
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
            // Block#: l}su24J5MF;*~WC.!bw!
            workflowlibrary_varmap.tempDict = item;
          }
        }
        // Block#: XwO+q]~ZbFl5q];Gp1h{
        console.log(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFormProperty = getFormProperty;

      function getFormProperty(id) {
        // Block#: P==W8qd^sLKt/U/T!A`O
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: NjA`f7iC6R|Nvuuh_zHT
        if(id == null) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: ZN%M9~+IRToLl{9Tvj;W
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict;
        }
        // Block#: 7i.OVNCzsfdlV2q4u7%G
        if(workflowlibrary_varmap._formProperties != null) {
          // Block#: lzsZLHdLML%ib`^$UT~b
          var item_list8 = workflowlibrary_varmap._formProperties;
          for(var item_index8 in item_list8) {
            item = item_list8[item_index8];
            // Block#: /x7cK`HZ;{.hb0lNE]Uo
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              // Block#: nj@:3IQ:)z(t:K9Ob{T@
              workflowlibrary_varmap.tempDict = item;
            }
          }
        }
        // Block#: K8AE]-RKuIY5h7=!{^BM
        console.log(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'value')))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveTasks = getActiveTasks;

      function getActiveTasks(processDefKey, processInstanceId, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: ey(cV_wHzhJ9H6qXD]37
          workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: f12dw.TGq}s(s1yD^/lp
          if(processDefKey != null) {
            // Block#: J6Z=cf|3x%@18q=k5[q)
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processDefKey, "EQUAL", '')) {
              // Block#: HB|OVu=^enpx,j^/]R6s
              workflowlibrary_varmap._processDefKey = processDefKey;
              // Block#: rL:v7E@!K_U=|k_~WrLT
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'processDefinitionKey', workflowlibrary_varmap._processDefKey);
            }
          }
          // Block#: 4!R@`C:h_-#N0Z0Rep2}
          if(processInstanceId != null) {
            // Block#: ?t}~z.*O`5RA;}2sJD;I
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processInstanceId, "EQUAL", '')) {
              // Block#: oCeYVNOV{Zy{9F$2Gj9~
              workflowlibrary_varmap._processInstId = processInstanceId;
              // Block#: [vM2Gu]]r2A^|hQ2c$D/
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'processInstanceId', workflowlibrary_varmap._processInstId);
            }
          }
          // Block#: /8$vg`tlvr)I/-qrnq)f
          if(workflowlibrary_varmap._initiator != null) {
            // Block#: bGv$z]%iZx_hy^A(mn]$
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
              // Block#: m,a3ucfMrL!k_U,{_EO0
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: /Ow/jfKcIa%l$Qr_T{C~
          com.fc.JavaScriptDistLib.SnapClinical.getActiveTasks(workflowlibrary_varmap.tempDict1,
            function(active_tasks) {
              // Block#: Y+XH|qV1|L_]qsg1Qys%
              workflowlibrary_varmap._processData = active_tasks;
              // Block#: K.t.2K}]vIh6/Mf#l.3b
              parseProcessData(true, taskName).then(response => {;
              });
              // Block#: /HzjPf1m|C+|jS~?f0;T
              console.log(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap._processData))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: Yc3-G+0JFUnjl+/[0S4u
              resolve({
                name: "success",
                data: active_tasks
              });
            },
            function(error_data) {
              // Block#: ?is]iK53/8^j+r-H;FuH
              console.log(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: 2Uo.6@:,;O.;_YLzMYC5
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getCurrentInitiator = getCurrentInitiator;

      function getCurrentInitiator() {
        // Block#: $9@jRx_-Dx:f$AAw6RA$
        console.log(String('SDK getCurrentInitiator: ') + String(workflowlibrary_varmap._currentInitiator));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getCurrentInitiator: ') + String(workflowlibrary_varmap._currentInitiator));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._currentInitiator;
      }
      /**
       * Describe this function...
       */
      this.buildTemplateKey = buildTemplateKey;

      function buildTemplateKey() {
        return new Promise(function(resolve, reject) {
          // Block#: [SyH.#_-!8t(}vV+!]^r
          workflowlibrary_varmap._templateKey = '';
          // Block#: Ag5u~N%yOV)||l]b0^lU
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap._formData, 'properties')) {
            // Block#: iWd7*23H#sqw+wfT^MFF
            workflowlibrary_varmap.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._formData, 'properties'));
            // Block#: j@$$-rt-WX$u2}g.j5Ak
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict1, 'templateKey')) {
              // Block#: GhC~vu/a#D(a~p%@KXYR
              workflowlibrary_varmap._templateKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict1, 'templateKey'));
            }
          }
        });
      }
      /**
       * To set the value of a specific field (addressed
       * by its UIObjRef) in the current form.
       */
      this.setFieldByRef = setFieldByRef;

      function setFieldByRef(UIObjRef, value) {
        return new Promise(function(resolve, reject) {
          // Block#: PkA[wrI4fzxst0S;MTh/
          setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id')), (com.fc.JavaScriptDistLib.TextLib.convertToText(value))).then(response => {;
          });
          // Block#: zrA8?}+!5{(%@ttT3R:R
          console.log(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfVarInTaskToBeCompleted = getIndexOfVarInTaskToBeCompleted;

      function getIndexOfVarInTaskToBeCompleted(name2) {
        // Block#: keut5NnNVASw]WxPR@s;
        workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._taskToBeCompleted, 'processVariables'));
        // Block#: 6B7]HI%Y.#Ryu:^p|8Vl
        workflowlibrary_varmap.tempN2 = 0;
        // Block#: |oK40tIWA!G)nm0(!#{#
        while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary_varmap.tempN2, "LT", workflowlibrary_varmap.tempList.length)) {
          // Block#: ``J|E}D/!f~A@;(OT{jy
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempN2], 'name'), "EQUAL", name2)) {
            return workflowlibrary_varmap.tempN2;
          }
          // Block#: +9z_@/4V1Jjk$_#N5B.v
          workflowlibrary_varmap.tempN2 = workflowlibrary_varmap.tempN2 + 1;
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.setQueryVarInitiator = setQueryVarInitiator;

      function setQueryVarInitiator(inputDict) {
        // Block#: I`C*@9m{sn9c]v}6dnv*
        workflowlibrary_varmap.tempDict = inputDict;
        // Block#: [S_s%}=?(;v%vsnm]:{p
        if(workflowlibrary_varmap._initiator != null) {
          // Block#: Xw|Dfl+,w{-|0ltSXXli
          if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibrary_varmap._initiator, "EQUAL", '')) {
            // Block#: ;t],Gxq}M}S+%nP90]7;
            if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, 'queryVariables'))) {
              // Block#: nO3?[}L8RY0-9[hmN[+q
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'queryVariables', []);
            }
            // Block#: 2Sp2gT#p/y!IWM5vevAa
            workflowlibrary_varmap.tempNum = 0;
            // Block#: Y}SNhFxy2P/ExErGTg2!
            workflowlibrary_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'queryVariables'));
            // Block#: h8r8Dw9qtI7.+.LJkN_+
            var item_list9 = workflowlibrary_varmap.tempList;
            for(var item_index9 in item_list9) {
              item = item_list9[item_index9];
              // Block#: JRdHih:eqQ-g?iGN$d_j
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
                // Block#: Ta+xCSU=LZd)lxB3NgjU
                workflowlibrary_varmap.tempDict1 = item;
                // Block#: Ih]Yt~lm~L4A$drxq]tF
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict1, 'value', workflowlibrary_varmap._initiator);
                // Block#: M6cW/C`;U/q^fS9L[Ej*
                workflowlibrary_varmap.tempList[workflowlibrary_varmap.tempNum] = workflowlibrary_varmap.tempDict1;
                // Block#: b8XTt8?7G*(ol#^n()E_
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'queryVariables', workflowlibrary_varmap.tempList);
                // Block#: ekdY(*D4A!*$smi,OF{p
                console.log(['SDK setQueryVarInitiator .. updating initiator value at index: ', workflowlibrary_varmap.tempNum, '  value is: ', workflowlibrary_varmap._initiator].join(''));
                if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                  workflowlibrary_varmap.debugService.traces.push(['SDK setQueryVarInitiator .. updating initiator value at index: ', workflowlibrary_varmap.tempNum, '  value is: ', workflowlibrary_varmap._initiator].join(''));
                  workflowlibrary_varmap.debugService.printLog();
                }
                // Block#: m?AKo%Adnv9FMq6Dt:7b
                if(true) {
                  return workflowlibrary_varmap.tempDict;
                }
              }
              // Block#: aT~mP3uMj`0L^4p[X$8%
              workflowlibrary_varmap.tempNum = workflowlibrary_varmap.tempNum + 1;
            }
            // Block#: ouS*NN(l-!a8Ff4n!qee
            workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibrary_varmap._initiator, 'equals', 'string']);
            // Block#: -?k/m#jcx/L7BU^]q)=C
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibrary_varmap.tempList, workflowlibrary_varmap.tempDict1)
            // Block#: zwxfx]Snmt,dhQIVd/x$
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibrary_varmap.tempDict, 'queryVariables', workflowlibrary_varmap.tempList);
            // Block#: du/brfY=h5-7zd%K:04|
            console.log(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(workflowlibrary_varmap._initiator));
            if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
              workflowlibrary_varmap.debugService.traces.push(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(workflowlibrary_varmap._initiator));
              workflowlibrary_varmap.debugService.printLog();
            }
          }
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * To retrieve the name of a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldNameByRef = findFieldNameByRef;

      function findFieldNameByRef(UIObjRef) {
        // Block#: 82f25)8;O:)08a%$#cU_
        workflowlibrary_varmap.tempDict = findFieldByRef(UIObjRef);
        // Block#: dZ6]%)-~$L%6{Mk55nI3
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, 'name')) {
          // Block#: XFP`bPN%G@!O_uD.FJ$A
          workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, 'name'));
        } else {
          // Block#: vu%vGt,6Uk:8L8PK=zm!
          workflowlibrary_varmap.tempParam = '';
        }
        // Block#: c~^fO3=s}Uv?m-iM}1%a
        console.log(['findFieldNameByRef: ', UIObjRef, ' name: ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldNameByRef: ', UIObjRef, ' name: ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.findTask = findTask;

      function findTask(taskName) {
        // Block#: WTC6-HfO,mUMX(#YO3~2
        if(taskName == null) {
          return 0;
        }
        // Block#: wsgIeYDT,l}jybt9a`;a
        var index_end = workflowlibrary_varmap._tasks.length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: 6_Q{yudk/vZ52}y]C],a
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._tasks[index], 'name'), "EQUAL", taskName)) {
            return index;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.getDropDown = getDropDown;

      function getDropDown(id) {
        // Block#: xpHGkF|gd$#}]6DXju!`
        workflowlibrary_varmap.tempList = [];
        // Block#: k{zx,_t0ebEM0Van4H6Z
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: gfCE?yFUub11fN8:|xka
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: r:H~(ApVAgsg%=0IG@/]
            workflowlibrary_varmap.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: vF*EB]#~pvJ}^{~QI{v7
        console.log(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibrary_varmap.tempList)].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.buildOutcomeAndFieldMappingList = buildOutcomeAndFieldMappingList;

      function buildOutcomeAndFieldMappingList() {
        return new Promise(function(resolve, reject) {
          // Block#: !zTRIn_acFMrK?Qf3uuD
          workflowlibrary_varmap._outcomeAndFieldMapping = [];
          // Block#: s9I,tr88FpWEs8]EaSP}
          workflowlibrary_varmap._templateType = '';
          // Block#: -@#eG~U^wUN{4U5{;s%q
          var item_list10 = workflowlibrary_varmap._formProperties;
          for(var item_index10 in item_list10) {
            item = item_list10[item_index10];
            // Block#: ?xKhVH~{w,}O*{s)K4lp
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'outcomeAndFieldMapping')) {
              // Block#: ,O7OB-6,?b!frFT$`:Iz
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'enum')) {
                // Block#: =udcCLDdQ[hOmcD?;RJQ
                workflowlibrary_varmap._outcomeAndFieldMapping = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'enumValues'));
              }
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'TemplateType')) {
              // Block#: bfT8Pyt-47nEF{@LPX/*
              workflowlibrary_varmap._templateType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
            }
          }
          // Block#: AOC3_A!HOy:1Vt=_jSkr
          console.log(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping)));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(workflowlibrary_varmap._outcomeAndFieldMapping)));
            workflowlibrary_varmap.debugService.printLog();
          }
          // Block#: IqKY2LntscRsSm9L0vt,
          console.log(String('SDK buildTemplateType: ') + String(workflowlibrary_varmap._templateType));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(String('SDK buildTemplateType: ') + String(workflowlibrary_varmap._templateType));
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.setCheckBoxFields = setCheckBoxFields;

      function setCheckBoxFields(checkBoxValues) {
        return new Promise(function(resolve, reject) {
          // Block#: _XrnXkK56IqcC5i6s/4L
          workflowlibrary_varmap.tempList = checkBoxValues;
          // Block#: ~/0+F:mGWg/`jvO#WdDp
          var item_list11 = workflowlibrary_varmap.tempList;
          for(var item_index11 in item_list11) {
            item = item_list11[item_index11];
            // Block#: ]-AtzMIeHm7qiJ7+f;D{
            setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id')), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'))).then(response => {;
            });
          }
          // Block#: KqQYWVs-xp8oPJJ2DD+/
          console.log(['SDK setCheckBoxFields   set the value of ', safeLength(workflowlibrary_varmap.tempList), 'item/items'].join(''));
          if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
            workflowlibrary_varmap.debugService.traces.push(['SDK setCheckBoxFields   set the value of ', safeLength(workflowlibrary_varmap.tempList), 'item/items'].join(''));
            workflowlibrary_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getFieldValue = getFieldValue;

      function getFieldValue(id) {
        // Block#: s6FqVVq=NZ#ucQQU3:zG
        workflowlibrary_varmap.tempParam = getFieldAttribute(id, 'value');
        // Block#: $6dm%.yz`%+?YAu@Tl]~
        console.log(['SDK getFieldValue id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFieldValue id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getFieldLabel = getFieldLabel;

      function getFieldLabel(id) {
        // Block#: p|}E|`~~yY28XRG_.w6w
        workflowlibrary_varmap.tempParam = getFieldAttribute(id, 'name');
        // Block#: Tn]~AZrqwG*RLVYIvt%b
        console.log(['SDK getFieldName id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFieldName id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * To retrieve the value of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldValueByRef = findFieldValueByRef;

      function findFieldValueByRef(UIObjRef) {
        // Block#: -pa`9ks9V+mL|=~ak=fe
        workflowlibrary_varmap.tempParam = findFieldByRef(UIObjRef);
        // Block#: ;WKPLteeJU.q2Aljj_Dy
        if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempParam)).length) {
          return '';
        }
        // Block#: VZl5#iC7FW`s7g:hqcj(
        workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempParam, 'value'));
        // Block#: cg,DLy$PagPQ6zV#fP1$
        console.log(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempParam))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempParam))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.ShowProcessInfo = ShowProcessInfo;

      function ShowProcessInfo() {
        return new Promise(function(resolve, reject) {
        });
      }
      /**
       * Describe this function...
       */
      this.printoutListOfStrings = printoutListOfStrings;

      function printoutListOfStrings(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: ?xT;8-,qmT0}VudEmXag
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {}
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessVariableValue = getProcessVariableValue;

      function getProcessVariableValue(name2) {
        // Block#: $A+E]85X)9yix.DB)Pe)
        workflowlibrary_varmap.tempDict1 = getProcessVariable(name2);
        // Block#: S{VIIeX4HqAy{5dPron=
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict1, 'value')) {
          return null;
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict1, 'value');
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyAttribute = getFormPropertyAttribute;

      function getFormPropertyAttribute(id, attribute) {
        // Block#: $Qypr}D:dDnS34}Rv^qh
        workflowlibrary_varmap.tempDict = getFormProperty(id);
        // Block#: PWK?Ib/jr67@[`=+[bgs
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibrary_varmap.tempDict, attribute))) {
          return null;
        }
        // Block#: Q^9U[?RhR^]#/6M@7BHx
        console.log(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute)))].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getOutcomeName = getOutcomeName;

      function getOutcomeName(id) {
        // Block#: ^ymSIrW:$f28p@6[SI@U
        workflowlibrary_varmap.tempParam = '';
        // Block#: ~{)~$)O/yh)O{Y%5CQ#X
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return '';
        }
        // Block#: 4lvrEM]*#hq^O2]:Qm=:
        var item_list12 = workflowlibrary_varmap._outcomes;
        for(var item_index12 in item_list12) {
          item = item_list12[item_index12];
          // Block#: TEa|F|P8n,!X.Ll;G_}3
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: 76Faw_b`B(+D/HE5v^H4
            workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
          }
        }
        // Block#: 37=4oHW1KOquM92@|%S/
        console.log(String('SDK getOutcomeName by id : ') + String(workflowlibrary_varmap.tempParam));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcomeName by id : ') + String(workflowlibrary_varmap.tempParam));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.doesExistOutcome = doesExistOutcome;

      function doesExistOutcome(id) {
        // Block#: Hmb|}(N-?u9Vam.DojFf
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: WAad5%@cF]|J0Nu-+d=c
        var item_list13 = workflowlibrary_varmap._outcomes;
        for(var item_index13 in item_list13) {
          item = item_list13[item_index13];
          // Block#: LGQ-c:Ry^kl]E9.SdcSR
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            return true;
          }
        }
        return false;
      }
      /**
       * To retrieve the id of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldIDByRef = findFieldIDByRef;

      function findFieldIDByRef(UIObjRef) {
        // Block#: ~g_kuTs~[S)9RPjA6vB5
        workflowlibrary_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id'));
        // Block#: CKAAyvw./=$iA+pq.L9n
        console.log(['findFieldIdByRef: ', UIObjRef, ' ID: ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['findFieldIdByRef: ', UIObjRef, ' ID: ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyName = getFormPropertyName;

      function getFormPropertyName(id) {
        // Block#: J*-rAsH1kZb=7ib9-N-t
        workflowlibrary_varmap.tempParam = getFormPropertyAttribute(id, 'name');
        // Block#: -o{Mn9!*Tgzb4jE5Ifi5
        console.log(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstRadioButtonField = getIdofFirstRadioButtonField;

      function getIdofFirstRadioButtonField() {
        // Block#: c;r0yn;{i`q,NI`93T2{
        var item_list14 = workflowlibrary_varmap._formFields;
        for(var item_index14 in item_list14) {
          item = item_list14[item_index14];
          // Block#: fe0oj*!QQ5WMS14rD3Rk
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.safeLength = safeLength;

      function safeLength(inputList) {
        // Block#: glI,/-IIC2m3q(#B@0pr
        if(inputList == null) {
          return 0;
        }
        // Block#: GSO$$)x|O|7tr+uS(*0v
        if(!inputList.length) {
          return 0;
        }
        return inputList.length;
      }
      /**
       * Describe this function...
       */
      this.logout = logout;

      function logout() {
        return new Promise(function(resolve, reject) {
          // Block#: u(:]sWW4V9dP{N4Cu^RO
          com.fc.JavaScriptDistLib.SnapClinical.logout(
            function(success_data) {
              // Block#: Ok%CB-Pd]q`:=/s8+J~K
              workflowlibrary_varmap._userName = 'forgetfulUser';
              // Block#: k]Y|kiMp/QXlyIFv2`Tk
              workflowlibrary_varmap._userPassw = '4mn3s14C!';
              // Block#: #WB`ciB-+DICSB@d}Uc;
              com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://develop.snapclinical.net:8443","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
              com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(workflowlibrary_varmap._userName, workflowlibrary_varmap._userPassw, workflowlibrary_varmap._userName, "mobileApp", "https://develop.snapclinical.net:8443");
              // Block#: 8H)qgG~54Cre=yoJ3iiJ
              initWorkflowWithCredentials(null, null, null).then(response => {;
              });
              // Block#: bUgGqtb.bf$Ht^Y-%QR3
              console.log('SDK logout success');
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push('SDK logout success');
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: ]{kwGk%MfjXgc]IVsPa?
              resolve({
                name: "then",
                data: 'SDK logout success'
              });
            },
            function(error_data) {
              // Block#: j/x[.Z^.A%$APcwqf-6x
              console.log(String('SDK logout error:') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK logout error:') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibrary_varmap.debugService.printLog();
              }
              // Block#: c?I`L,=.hrOd?}[1-Ou/
              resolve({
                name: "catch",
                data: (String('SDK logout error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))))
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.buildVar = buildVar;

      function buildVar(name2, value) {
        // Block#: w)Yy*@v@2W+!Xz%A9Iko
        workflowlibrary_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], [name2, value]);
        // Block#: p~+:u^kv.$ZD!j]b4eXU
        console.log(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibrary_varmap.tempDict))));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getOutcome = getOutcome;

      function getOutcome(id) {
        // Block#: z_OwH@Vp!,|V.m?-5rR7
        workflowlibrary_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: aeK}#_56a0FW1;FlI/RA
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibrary_varmap.tempDict1;
        }
        // Block#: @-q#8vSu_;2Fy2N.F])N
        var item_list15 = workflowlibrary_varmap._outcomes;
        for(var item_index15 in item_list15) {
          item = item_list15[item_index15];
          // Block#: n6w*.;8h*VC,sx]BPLCz
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: =c~Nd@B.[P1(9iv[U:0C
            workflowlibrary_varmap.tempDict1 = item;
          }
        }
        // Block#: Q:N_kRnFcj/3%}|gFkR,
        console.log(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap.tempDict1)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempDict1;
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.doesExistField = doesExistField;

      function doesExistField(id) {
        // Block#: G72*ZfWyTVTTF*YW+;u3
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: 0-zs0K4{G%DLexMoi@1l
        if(workflowlibrary_varmap._formFields != null) {
          // Block#: $8p*?d{P+-m|/n`#OWXv
          var item_list16 = workflowlibrary_varmap._formFields;
          for(var item_index16 in item_list16) {
            item = item_list16[item_index16];
            // Block#: imU3?.3TfXu=qUOz[4Vg
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'id')) {
              // Block#: O{V`?*@eRf||XBK]`Z2J
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
                return true;
              }
              // Block#: u]nwgfv?0gzJ4|QKa8ba
              console.log(String('SDK  doesExistField (true) by ID ') + String(id));
              if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
                workflowlibrary_varmap.debugService.traces.push(String('SDK  doesExistField (true) by ID ') + String(id));
                workflowlibrary_varmap.debugService.printLog();
              }
            }
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.AppendInfo = AppendInfo;

      function AppendInfo(name2, value) {
        return new Promise(function(resolve, reject) {
        });
      }
      /**
       * To retrieve the template type you have associated
       * to the current task. This is a specific value set
       * in the form properties section as TemplateType.
       */
      this.getTemplateType = getTemplateType;

      function getTemplateType() {
        // Block#: i[TClUtvG0?cy,~h2[3n
        console.log(String('SDK getTemplateType: ') + String(workflowlibrary_varmap._templateType));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getTemplateType: ') + String(workflowlibrary_varmap._templateType));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._templateType;
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyValue = getFormPropertyValue;

      function getFormPropertyValue(id) {
        // Block#: DH;d_..2@hQzhZWl3Qay
        workflowlibrary_varmap.tempParam = getFormPropertyAttribute(id, 'value');
        // Block#: P%{C|4nOh(7dS)67dHv(
        console.log(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', workflowlibrary_varmap.tempParam].join(''));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstDropDownField = getIdofFirstDropDownField;

      function getIdofFirstDropDownField() {
        // Block#: (6HA`fN(9Sz3W(Lz8Ocd
        var item_list17 = workflowlibrary_varmap._formFields;
        for(var item_index17 in item_list17) {
          item = item_list17[item_index17];
          // Block#: pl5}DXcGGD{yp*vWMxKW
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.buildCurrentInitiator = buildCurrentInitiator;

      function buildCurrentInitiator() {
        return new Promise(function(resolve, reject) {
          // Block#: #dx0sJ3OcN9E!dSn,@w}
          workflowlibrary_varmap._currentInitiator = '';
          // Block#: jHrhOwD8VquA{dXlLdJ*
          workflowlibrary_varmap.tempList1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary_varmap._task, 'processVariables'));
          // Block#: TyeWO=ugu[|]vH}2ZvkP
          var item_list18 = workflowlibrary_varmap.tempList1;
          for(var item_index18 in item_list18) {
            item = item_list18[item_index18];
            // Block#: 9?C74H7ixEt$W%90ZT~;
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
              // Block#: yI~y8%,|JLTZifJ/^dAU
              workflowlibrary_varmap._currentInitiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'));
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessInstanceId = getProcessInstanceId;

      function getProcessInstanceId() {
        // Block#: q=)Sb$0J9f2h/7C~Wi}#
        console.log(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._processInstId)));
        if(workflowlibrary_varmap.debugService && workflowlibrary_varmap.debugService.active) {
          workflowlibrary_varmap.debugService.traces.push(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibrary_varmap._processInstId)));
          workflowlibrary_varmap.debugService.printLog();
        }
        return workflowlibrary_varmap._processInstId;
      }
    };
    var workflowlibrary = new WorkflowLibrary();

    function RadioButtonsUIComponent() {
      radiobuttonsuicomponent_varmap = {};
      radiobuttonsuicomponent_varmap._debugService = null;
      radiobuttonsuicomponent_varmap.singlechoice_chosen = null;
      radiobuttonsuicomponent_varmap.singlechoice_form = null;
      /**
       * Describe this function...
       */
      this.isSelected = isSelected;

      function isSelected(index) {
        // Block#: .`OdvDU3D/%[wq(}jJG~
        if(radiobuttonsuicomponent_varmap.singlechoice_chosen == null) {
          return false;
        }
        // Block#: z]r4k3M;!jX8E/v%Ofx@
        if(radiobuttonsuicomponent_varmap.singlechoice_chosen == (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options'))[index], 'name'))) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getChoiceNum = getChoiceNum;

      function getChoiceNum() {
        // Block#: W(5zoR4P]hIe;;[$m`*N
        if(radiobuttonsuicomponent_varmap.singlechoice_form == null) {
          return 0;
        }
        return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap.singlechoice_form, 'options')).length;
      }
      /**
       * This function will set error text given the provided
       * message. The error will show up right after the update.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
        });
      }
    };
    var radiobuttonsuicomponent = new RadioButtonsUIComponent();

    function RadioButtonsUIComponentTemplate(instance) {
      radiobuttonsuicomponent_varmap[instance] = {};
      radiobuttonsuicomponent_varmap[instance]._debugService = null;
      radiobuttonsuicomponent_varmap[instance].singlechoice_chosen = null;
      radiobuttonsuicomponent_varmap[instance].singlechoice_form = null;
      /**
       * Describe this function...
       */
      this.isSelected = isSelected;

      function isSelected(index) {
        // Block#: .`OdvDU3D/%[wq(}jJG~
        if(radiobuttonsuicomponent_varmap[instance].singlechoice_chosen == null) {
          return false;
        }
        // Block#: z]r4k3M;!jX8E/v%Ofx@
        if(radiobuttonsuicomponent_varmap[instance].singlechoice_chosen == (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options'))[index], 'name'))) {
          return true;
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getChoiceNum = getChoiceNum;

      function getChoiceNum() {
        // Block#: W(5zoR4P]hIe;;[$m`*N
        if(radiobuttonsuicomponent_varmap[instance].singlechoice_form == null) {
          return 0;
        }
        return(com.fc.JavaScriptDistLib.Dictionary.getDictValue(radiobuttonsuicomponent_varmap[instance].singlechoice_form, 'options')).length;
      }
      /**
       * This function will set error text given the provided
       * message. The error will show up right after the update.
       */
      this.setError = setError;

      function setError(message) {
        return new Promise(function(resolve, reject) {
        });
      }
    };
    var radiobuttonsuicomponent = new RadioButtonsUIComponent();
    var radiobuttonsuicomponent_FlowRadioInput = new RadioButtonsUIComponentTemplate("FlowRadioInput");
    genericflowlib_varmap._userEmail = null;
    genericflowlib_varmap._userPin = null;
    genericflowlib_varmap._flowTranslations = null;
    genericflowlib_varmap._currentText1Id = null;
    genericflowlib_varmap._currentText2Id = null;
    genericflowlib_varmap._currentRadioId = null;
    genericflowlib_varmap._currentSizeId = null;
    genericflowlib_varmap.signingURL = null;
    genericflowlib_varmap.temp = null;
    genericflowlib_varmap.recipient = null;
    genericflowlib_varmap._currentTimeInterval = null;
    genericflowlib_varmap._currentDevList = null;
    genericflowlib_varmap._currentDevice = null;
    /**
     * Describe this function...
     */
    this.startTest = startTest;

    function startTest() {
      return new Promise(function(resolve, reject) {
        // Block#: mn`:p:}yGj,@fp,00H=B
        genericflowlib_varmap._userEmail = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("emailInput");
        // Block#: u$l%`d@$E2N?rG)Bt/*s
        genericflowlib_varmap._userPin = 0;
        // Block#: o@%(c+=G~_|Zzi~;NbzO
        if(!isEmptyText(genericflowlib_varmap._userEmail) && !isEmptyText(genericflowlib_varmap._userPin)) {
          // Block#: ~kX|A:%i/)DpMIt)O4SE
          runFlow(genericflowlib_varmap._userEmail, genericflowlib_varmap._userPin, 'eConsentProcessDemoV122', true, null).then(response => {;
          });
        }
      });
    }
    /**
     * Describe this function...
     */
    this.goBack = goBack;

    function goBack() {
      return new Promise(function(resolve, reject) {
        // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: U3tUC~K}Cphos=b,v#1F
        workflowlibrary.completeAndGetNextTask(getOutcomeByName('Back')).then(response => {;
          if(response.name === "success") {
            // Describe this function...
            // Block#: -jovW9Yz@]!!QR;s9Nyk
            console.log(workflowlibrary.getCurrentTask());
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(workflowlibrary.getCurrentTask());
              genericflowlib_varmap.debugService.printLog();
            }
            // Describe this function...
            // Block#: i-zl2KU}EqN{6)C,/A.G
            goToScreen(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
            // Block#: :T:.=c4*+[33cvbiWp21
            resolve({
              name: "then",
              data: ""
            });
          }
          if(response.name === "failure") {
            // Block#: `x|`V*o(=K{s]|7f4baZ
            console.log(response.data);
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(response.data);
              genericflowlib_varmap.debugService.printLog();
            }
            // Block#: h#_wG_o_!yHYevgW!Pc]
            console.log('..forcing to close..');
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push('..forcing to close..');
              genericflowlib_varmap.debugService.printLog();
            }
            // Block#: 9.Hy4;H`7z7DP8[63x+U
            onFlowComplete(null).then(response => {;
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.goNext = goNext;

    function goNext() {
      return new Promise(function(resolve, reject) {
        // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: $Px1Sns`Utfs1w=#E*/7
        workflowlibrary.completeAndGetNextTask(getOutcomeByName('Next')).then(response => {;
          if(response.name === "success") {
            // Describe this function...
            // Block#: x(gXe(8%?OnW!3UYpT`o
            console.log(workflowlibrary.getCurrentTask());
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(workflowlibrary.getCurrentTask());
              genericflowlib_varmap.debugService.printLog();
            }
            // Describe this function...
            // Block#: 8OUj$]IVZ7;Z=V6D2L(A
            goToScreen(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
            // Block#: u}daUzq|oPCX=Ew)ooRj
            resolve({
              name: "then",
              data: ""
            });
          }
          if(response.name === "failure") {
            // Block#: {?n}p!P:@T=O2]dTO_CW
            console.log(response.data);
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(response.data);
              genericflowlib_varmap.debugService.printLog();
            }
            // Block#: P24V~*FO?2B]lX7Ie(#M
            showErrorDialog('An error occurred while saving your data..').then(response => {;
            });
            // Block#: 1Ub(Qj(VCpApR4r.A5lE
            resolve({
              name: "then",
              data: ""
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.goToScreen = goToScreen;

    function goToScreen(templateKey) {
      return new Promise(function(resolve, reject) {
        // Block#: -F`r=UfMpM*:g3{L%{ih
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(templateKey, "EQUAL", 'S7MultipleText')) {
          // Block#: 4*R*piQxUaGJS^GS^jr#
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="FlowBasicScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'FlowBasicScreen'
          }, 'FlowBasicScreen', 'FlowBasicScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(templateKey, "EQUAL", 'S6MultipleChoice')) {
          // Block#: ^R?4bpZbu?tjp=aTsW8k
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="FlowRadioScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'FlowRadioScreen'
          }, 'FlowRadioScreen', 'FlowRadioScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(templateKey, "EQUAL", 'S20Docusign')) {
          // Block#: LmoZyH^2]L]wd3_evWRR
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="FlowSignScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'FlowSignScreen'
          }, 'FlowSignScreen', 'FlowSignScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(templateKey, "EQUAL", 'S8Devices')) {
          // Block#: o+o8@Ppo[W{=@v`+7{Y5
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="FlowDeviceScreen"]');
          showScreen.show();
          history.pushState({
            'view': 'FlowDeviceScreen'
          }, 'FlowDeviceScreen', 'FlowDeviceScreen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else {
          // Block#: eCYfHe^!i62?~A7Zi[i^
          onFlowComplete(null).then(response => {;
          });
        }
      });
    }
    /**
     * Describe this function...
     */
    this.isValidDate = isValidDate;

    function isValidDate(date) {
      return com.fc.JavaScriptDistLib.TextLib.textMatchWithRegex(com.fc.JavaScriptDistLib.TextLib.convertToRegExp('(0\\d{1}|1[0-2])\\/([0-2]\\d{1}|3[0-1])\\/(19|20)\\d{2}', ""), date);
    }
    /**
     * Describe this function...
     */
    this.isValidSize = isValidSize;

    function isValidSize(size) {
      // Block#: .@x|$,`eBXe~XdR-6R1w
      if(!com.fc.JavaScriptDistLib.MathLibrary.isNumber(size)) {
        return false;
      }
      // Block#: k|Dyk}~({@tAh2d%Wu~}
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(size, "LTE", 0)) {
        return false;
      }
      // Block#: ]sCLK.Pp7mt0_`#8n?ES
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(size, "GTE", 250)) {
        return false;
      }
      return true;
    }
    /**
     * Describe this function...
     */
    this.isEmptyText = isEmptyText;

    function isEmptyText(text) {
      // Block#: J`f*,0hxR;qfwWcy32z1
      if(text == null || com.fc.JavaScriptDistLib.MathLibrary.mathCompare(text.length, "LTE", 0)) {
        return true;
      }
      return false;
    }
    /**
     * Describe this function...
     */
    this.getOutcomeByName = getOutcomeByName;

    function getOutcomeByName(name2) {
      // To retrieve all the outcomes coming from the current form.
      // Block#: qgcu3-*XqgE)5Og8@/.C
      var item_list = workflowlibrary.getOutcomes();
      for(var item_index in item_list) {
        item = item_list[item_index];
        // Block#: ,z$ItD)GA@5PXnb!AAVe
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
          return item;
        }
      }
      return null;
    }
    /**
     * Describe this function...
     */
    this.showErrorDialog = showErrorDialog;

    function showErrorDialog(message) {
      return new Promise(function(resolve, reject) {
        // Block#: %}erelzK)WBGK}spG_;u
        com.fc.JavaScriptDistLib.Dialog.show(com.fc.JavaScriptDistLib.Dialog.create('Error', com.fc.JavaScriptDistLib.TextLib.convertToText(message)), function(button_title) {
        })
      });
    }
    /**
     * Describe this function...
     */
    this.translate = translate;

    function translate(key) {
      // Block#: uWIGk}mj^QJ@;//OYxh0
      if((com.fc.JavaScriptDistLib.Storage.getValue('language')) == null || com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Storage.getValue('language'), "EQUAL", 'en-US')) {
        return key;
      }
      // Block#: ob~.g2IEcxK}#v=Kqp?Y
      if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap._flowTranslations, key)) != null) {
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap._flowTranslations, key), com.fc.JavaScriptDistLib.Storage.getValue('language'));
      }
      return key;
    }
    /**
     * Describe this function...
     */
    this.jsonToText = jsonToText;

    function jsonToText(json) {
      let data = null;
      // Block#: +e|@~I]7c1qS1|]=``KX
      data = (com.fc.JavaScriptDistLib.TextLib.convertToText(json));
      // Block#: g]^aPcg5n+CH5%NQbIZ6
      data = com.fc.JavaScriptDistLib.TextLib.textReplace('{', '', data);
      // Block#: Nf7sQcEcgKCe{`vs/-IQ
      data = com.fc.JavaScriptDistLib.TextLib.textReplace('}', '', data);
      // Block#: IA0HA)M!^]#V6.TU)6/|
      data = com.fc.JavaScriptDistLib.TextLib.textReplace('_', ' ', data);
      return data;
    }
    /**
     * Describe this function...
     */
    this.getFromJson = getFromJson;

    function getFromJson(json) {
      let data = null;
      // Block#: ~h3?S@$!,5-9p5ar16`U
      data = (com.fc.JavaScriptDistLib.Dictionary.getKeys(json));
      return com.fc.JavaScriptDistLib.Dictionary.getDictValue(json, data[0]);
    }
    /**
     * Describe this function...
     */
    this.runFlow = runFlow;

    function runFlow(user, pwd, key, restart, translations) {
      return new Promise(function(resolve, reject) {
        // Block#: Ahv8bjJ%([|3z6~+,lyV
        if(translations != null) {
          // Block#: =1|S?jt4zAuZIv.N2Y$R
          genericflowlib_varmap._flowTranslations = translations;
        } else {
          // Block#: ?=9~,QKCU_,U3E_EkY~#
          genericflowlib_varmap._flowTranslations = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        }
        // To setup the user name and the password to access to the
        // workflow. Start from here to interact with the workflow.
        // Block#: s[YFl0$n)HE!)5N4FxD:
        workflowlibrary.initWorkflowWithCredentials(user, pwd, null).then(response => {;
        });
        // To start a new instance of the workflow or to resume the last run of it.
        // You must specify
        // - processDefinitionKey will be your Process Identifier (text)
        // - forceStartNewInstance will be set to true if you want to start
        // a new instance or to false if you need to resume an old one.
        // Block#: RijFCb%p}Q~~]GFCTDOA
        workflowlibrary.startNewProcessWithVars(key, restart, null).then(response => {;
          if(response.name === "success") {
            // Describe this function...
            // Block#: ~.(]8,V6l@{Y)RS`!E;r
            console.log(workflowlibrary.getCurrentTask());
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(workflowlibrary.getCurrentTask());
              genericflowlib_varmap.debugService.printLog();
            }
            // Describe this function...
            // Block#: 7,@wa}cgru.EOFRgWUlR
            goToScreen(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: eKY=w`EZev@)*IqWQ.g1
            console.log(response.data);
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(response.data);
              genericflowlib_varmap.debugService.printLog();
            }
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.startFlowProcess = startFlowProcess;

    function startFlowProcess(process, restart, translations) {
      return new Promise(function(resolve, reject) {
        // Block#: Z4bP5?_bv+Tc_S:U_D*b
        if(translations != null) {
          // Block#: oz+gXzoQMw3.aZE~/ThZ
          genericflowlib_varmap._flowTranslations = translations;
        } else {
          // Block#: vb|^{RNJBLa*Jq[1v~}X
          genericflowlib_varmap._flowTranslations = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        }
        // To start a new instance of the workflow or to resume the last run of it.
        // You must specify
        // - processDefinitionKey will be your Process Identifier (text)
        // - forceStartNewInstance will be set to true if you want to start
        // a new instance or to false if you need to resume an old one.
        // Block#: 2@vrosYT2RlDR/ysQiHp
        workflowlibrary.startNewProcessWithVars(process, restart, null).then(response => {;
          if(response.name === "success") {
            // Describe this function...
            // Block#: #t)#0LKe;b%KcAPD$Ms7
            console.log(workflowlibrary.getCurrentTask());
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(workflowlibrary.getCurrentTask());
              genericflowlib_varmap.debugService.printLog();
            }
            // Describe this function...
            // Block#: bC}F}IOm0Bc/zT0QtAC:
            goToScreen(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: [0menGBw=[ie*g)fWW!$
            console.log(response.data);
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(response.data);
              genericflowlib_varmap.debugService.printLog();
            }
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.onFlowComplete = onFlowComplete;

    function onFlowComplete(value) {
      return new Promise(function(resolve, reject) {
        com.fc.CustomEventListeners["onFlowComplete"] && com.fc.CustomEventListeners["onFlowComplete"](value);
      });
    }
    /**
     * Describe this function...
     */
    this.enableOrDisableButtons = enableOrDisableButtons;

    function enableOrDisableButtons() {
      return new Promise(function(resolve, reject) {
        // Block#: _}`;)aCfiG$207CjPzH]
        if(getOutcomeByName('Back') != null) {
          // Block#: !!J{5T{]U1w(DJk_)QJ{
          $('[obj-name="FlowBack"]').show();
        } else {
          // Block#: j@tkR_.gB7`ah3P6GPDa
          $('[obj-name="FlowBack"]').hide();
        }
        // Block#: }q_T-RLiyth5ZpTQ=f9{
        if(getOutcomeByName('Next') != null || getOutcomeByName('Continue') != null) {
          // Block#: /7M0V;c!3pu;t,5Pm*PH
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowNextBtn", (translate('Continue'))); // Block#: mZRg]j~ko0ObE`HeP,Ih
          $('[obj-name="FlowNextBtn"]').show();
        } else {
          // Block#: z9[pSa#-V7wlF;Jl2V_z
          $('[obj-name="FlowNextBtn"]').hide();
        }
        // Block#: 51evY`gK=Ir^VnKc8`ol
        if(getOutcomeByName('Help') != null) {
          // Block#: =@]pW?8+{DHc]RZ2[3VA
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowLink", (translate('Help'))); // Block#: Z,ob0%)(0q{%sk:besg8
          $('[obj-name="FlowLink"]').show();
        } else {
          // Block#: 4@SM$OXM`a:Bn]jhU:k0
          $('[obj-name="FlowLink"]').hide();
        }
      });
    }
    /**
     * Describe this function...
     */
    this.initScreen = initScreen;

    function initScreen() {
      let currentTask = null;
      return new Promise(function(resolve, reject) {
        // Describe this function...
        // Block#: %;3J(rkBf!kp(A.Vulfj
        currentTask = (workflowlibrary.getCurrentTask());
        // Describe this function...
        // Block#: Tw|vG3}vVApu~WvK-{R@
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowBasicTitle", (translate(workflowlibrary.getFormPropertyName('title')))); // Describe this function...
        // Block#: RT.ikSwd+iyMchNf6Sb/
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowBasicDescr", (translate(workflowlibrary.getFormPropertyName('infoText')))); // Block#: )==4x%G(v0~O,m$@XJP,
        enableOrDisableButtons().then(response => {;
        });
        // Block#: FEBm=u6d,UmX_v9W?yhH
        enableOrDisableInputs(currentTask).then(response => {;
        });
      });
    }
    /**
     * Describe this function...
     */
    this.enableOrDisableInputs = enableOrDisableInputs;

    function enableOrDisableInputs(currentTask) {
      let currentInput = null;
      return new Promise(function(resolve, reject) {
        // Block#: KAUJT4se}MeAzlrn7I]X
        $('[obj-name="FlowAgePicker"]').hide(); // Block#: bZ~Gf(o6Ze5*Jncq%R2:
        $('[obj-name="FlowTextInput2"]').hide(); // Block#: Leb-|q{CgQss?/;33c]c
        $('[obj-name="FlowTextInput"]').hide(); // Block#: 6amzNuy]+p8oS.(W{124
        genericflowlib_varmap._currentText1Id = null;
        // Block#: }!SBh;WP4M^D)q~Fx}Bn
        genericflowlib_varmap._currentText2Id = null;
        // Block#: `y@+z,{lCzN[L6mzGsI_
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentTask, 'name'), "EQUAL", 'AgeCheck')) {
          // Block#: {9YrbJLkfuvf)6J~BjP.
          $('[obj-name="FlowAgePicker"]').show(); // To set the value of a specific field (addressed by its id) in the current form.
          // Block#: _yt~:!)HfEq}I5U/0ETF
          workflowlibrary.setField('today', ((com.fc.JavaScriptDistLib.MomentLibrary()).format(('MM[/]DD[/]YYYY')))).then(response => {;
          });
          // Block#: |zh+Fc.=-M)a;:g9E77h
          setDatePickerValue().then(response => {;
          });
        } else if(!com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentTask, 'name'), "EQUAL", 'exit Qualified')) {
          // To retrieve all data coming from all the fields in the current form.
          // To retrieve all data coming from all the fields in the current form.
          // Block#: Vbh;ZG}{B[tq(Gd+DxIE
          if(workflowlibrary.getFields() != null && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary.getFields().length, "GT", 0)) {
            // To retrieve all data coming from all the fields in the current form.
            // Block#: vAI.E9dND`NhL-#/btf9
            currentInput = (workflowlibrary.getFields()[0]);
            // Block#: *^sC/e20+.~UtLP1T_`6
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'type'), "EQUAL", 'expression')) {
              // Block#: $V~#c99,b.m?+XmazPr]
              genericflowlib_varmap._currentText1Id = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'id'));
              // Block#: |s3}:P)^wx{EB)4B[b.V
              if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'value')) != null) {
                // Block#: s,7A3];Q9Z0_;w0kNu=9
                com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FlowTextInput", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'value')));
              } else {
                // Block#: o4^`z6F}WJm8sD_`G^3W
                com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FlowTextInput", (translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'name')))));
              }
              // Block#: v@^hWaKW.gepu}i)i-@8
              $('[obj-name="FlowTextInput"]').show();
            }
            // To retrieve all data coming from all the fields in the current form.
            // Block#: 1Vl_)oZT-Z:5iv9P!9m}
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary.getFields().length, "GT", 1)) {
              // To retrieve all data coming from all the fields in the current form.
              // Block#: F#USUbym{YV,qki%6(uB
              currentInput = (workflowlibrary.getFields()[1]);
              // Block#: IBDf8IN,|s`,{,X,A,AI
              if(!com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'type'), "EQUAL", 'expression')) {
                // Block#: knW9u!NzNFiJd:6_%6)S
                genericflowlib_varmap._currentText2Id = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'id'));
                // Block#: Sh+.aB/]ps@a@Hbdz?l~
                if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'value')) != null) {
                  // Block#: }#AkkjP9Ofk53oDD0#TF
                  com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FlowTextInput2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'value')));
                } else {
                  // Block#: LgZ=BNPY,ou:nZ.DL~Rr
                  com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FlowTextInput2", (translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentInput, 'name')))));
                }
                // Block#: #1C)d[k/={yq6yBoup2B
                $('[obj-name="FlowTextInput2"]').show();
              }
            }
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.setDatePickerValue = setDatePickerValue;

    function setDatePickerValue() {
      let value = null;
      return new Promise(function(resolve, reject) {
        // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
        // Block#: ~^4oIpfGHX5L8W?22i]@
        if(workflowlibrary.doesExistField('birthdate')) {
          // Describe this function...
          // Block#: PJT*F;Qzm=5M*~@7@VIy
          value = (workflowlibrary.getFieldValue('birthdate'));
          // Block#: C%DBr3C6M?}5qx,lEQWO
          if(!isEmptyText(value)) {
            // Block#: Aj-Wdp?e`aEYhrOlTwi;
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowAgePicker", value);
          } else {
            // Block#: %3E6^eKWfnHmu4oYO/|a
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowAgePicker", (translate('Birthdate')));
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.initChoiceScreen = initChoiceScreen;

    function initChoiceScreen() {
      let currentTask = null;
      let currentField = null;
      return new Promise(function(resolve, reject) {
        // Describe this function...
        // Block#: xjy2OlmnO47K}i/,e%Qw
        currentTask = (workflowlibrary.getCurrentTask());
        // Block#: 8R0j!!d+(Ns5Cy+2z5hc
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowRadioNext", (translate('Continue'))); // Describe this function...
        // Block#: [$wjOo4xHmHhP4;n[Hu;
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowRadioTtile", (translate(workflowlibrary.getFormPropertyName('title')))); // Describe this function...
        // Block#: qkMYHEwv%9_6x)ytFU-L
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowRadioDescr", (translate(workflowlibrary.getFormPropertyName('infoText')))); // Block#: W-SWBNAQE[O`02q,.D0K
        if(getOutcomeByName('Back') != null) {
          // Block#: bvO[wrO7?s^Ym~{nEJ@1
          $('[obj-name="FlowRadioBack"]').show();
        } else {
          // Block#: -Mp+7~{{?]nz;u?=Wjlb
          $('[obj-name="FlowRadioBack"]').hide();
        }
        // Describe this function...
        // Block#: OV{^W4J3]4Nqc{!TmRa9
        if(isEmptyText(workflowlibrary.getFormPropertyName('infoText'))) {
          // Block#: AhAb|n+nZgL+HQh:9$[B
          $('[obj-name="FlowRadioDescr"]').hide();
        } else {
          // Block#: 2!Pd/Vp.$|wXSC?s]1:s
          $('[obj-name="FlowRadioDescr"]').show();
        }
        // To retrieve all data coming from all the fields in the current form.
        // Block#: W/uKz]q_lTCw`[UM$Bj]
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibrary.getFields().length, "GT", 0)) {
          // To retrieve all data coming from all the fields in the current form.
          // Block#: I;E!C=hOM$PO/Eg#vD-7
          currentField = (workflowlibrary.getFields()[0]);
          // Block#: :I(%v~Y?ivc:gQ$BHh=-
          genericflowlib_varmap._currentRadioId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, 'id'));
          // Block#: {?p*O.E.AXd}#~U^.a`~
          if($('[obj-name="FlowRadioDescr"]').is(':visible')) {
            // Block#: YwWQ]n%Ckqxr}_LBC*!g
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(currentField, 'name', '');
          }
          // Generates the choice list for radio buttons using field from api response.
          // Block#: W/{;%Ja,mB`]n%%2_,pi
          radiobuttonsuicomponent_FlowRadioInput.setRadioButtons(currentField).then(response => {;
          });
          // Block#: H]RF,nik67VV?[ilu$E~
          $('[obj-name="FlowRadioInput"]').show(); // Block#: R.^+dwnA_Sc{^d+({UNe
          checkSizeInput().then(response => {;
          });
        } else {
          // Block#: ~DJns2D#mf}H(fa}FavO
          genericflowlib_varmap._currentRadioId = null;
          // Block#: #ibblD%77asum6j5kM-y
          genericflowlib_varmap._currentSizeId = null;
          // Block#: V*$c|(?TRHG*z_)Ju7Di
          $('[obj-name="FlowRadioInput"]').hide(); // Block#: q5_VV`2*RYT{rdhLI=|[
          $('[obj-name="FlowSizeInput"]').hide();
        }
      });
    }
    /**
     * Describe this function...
     */
    this.checkSizeInput = checkSizeInput;

    function checkSizeInput() {
      let input = null;
      return new Promise(function(resolve, reject) {
        // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
        // To retrieve all data coming from a specific field (addressed by its UIObjRef) in the current form.
        // Block#: ?rk[yNTe}P?l%],*41LX
        if(workflowlibrary.doesExistField('height') || workflowlibrary.doesExistField('weight')) {
          // To retrieve all data coming from all the fields in the current form.
          // Block#: Ln`O(ws_rvz}~Bd?%*+L
          input = (workflowlibrary.getFields()[1]);
          // Block#: 4}[2wy1-U|jK%xg]ygQ-
          genericflowlib_varmap._currentSizeId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(input, 'id'));
          // Block#: CZ]dt:jJVjGAd$Uk15hn
          $('[obj-name="FlowSizeInput"]').show(); // Block#: 6%to8TfVhl*:qS8~gXWU
          if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(input, 'value')) != null) {
            // Block#: q#K)k1S1DK:pxFC7UYXK
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FlowSizeInput", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(input, 'value')));
          } else {
            // Block#: cH,s]2E((i(cps8MzlP;
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("FlowSizeInput", (translate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(input, 'name')))));
          }
        } else {
          // Block#: uN[;CS_Sl1R)%zgnZFQ!
          genericflowlib_varmap._currentSizeId = null;
          // Block#: GE1SjaS*oCk^#g$SXI6+
          $('[obj-name="FlowSizeInput"]').hide();
        }
      });
    }
    /**
     * Describe this function...
     */
    this.runDocuSign = runDocuSign;

    function runDocuSign() {
      return new Promise(function(resolve, reject) {
        // Block#: ]./`]y[XBhUchyEDXQUR
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowSignScreen", true); // Block#: 86_2Y9bvwKEW}s3C+zPX
        genericflowlib_varmap.signingURL = '';
        // This is to retrieve user's language and update the UI accordingly
        // Block#: =U[kHH-BjF];E4BVa*N5
        com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/user/search/whoAmI', "GET", JSON.stringify(),
          function(WhoAm) {
            // Block#: .5J|i)3zQ.|Rk#JhNaT5
            genericflowlib_varmap.temp = (com.fc.JavaScriptDistLib.JSON.parseJSONData(WhoAm));
            // Block#: #DfQyds^[R)n_b~!b9c(
            console.log(com.fc.JavaScriptDistLib.JSON.parseJSONData(WhoAm));
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.JSON.parseJSONData(WhoAm));
              genericflowlib_varmap.debugService.printLog();
            }
            // Block#: WL^}JS04%T0|r6(UJegQ
            genericflowlib_varmap.recipient = (com.fc.JavaScriptDistLib.DocuSign.createRecipent('Signer', [(com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'firstName')), ' ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'lastName'))].join(''), com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'email'), com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'username')));
            // Block#: D?QVQ:}?Cl%8}Rr7L$}I
            com.fc.JavaScriptDistLib.DocuSign.addFieldToRecipient(genericflowlib_varmap.recipient, 'Address Line 1', [(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'site'), 'addressLine1')), ' ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'site'), 'addressLine2'))].join('')); // Block#: nQ7G?={C.md+TEg.VjOA
            com.fc.JavaScriptDistLib.DocuSign.addFieldToRecipient(genericflowlib_varmap.recipient, 'Address Line 2', [(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'site'), 'city')), ', ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'site'), 'state')), ' ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(genericflowlib_varmap.temp, 'site'), 'postalCode'))].join('')); // Describe this function...
            // Block#: 2v,+A}tS(1J(qaM4yTcw
            com.fc.JavaScriptDistLib.DocuSign.createSigningLinkFromTemplate(workflowlibrary.getFormPropertyName('docusignTemplateId'), genericflowlib_varmap.recipient, 'https://develop.snapp.click',
              function(signing_url) {
                // Block#: jBa?7BS9RVGk$dq$pFtc
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowSignScreen", false); // Block#: M39}T[e4.oyubZV;4IS;
                $('[obj-name="FlowDocuSign"]').show(); // Block#: O3SL1],jJ:(S6cPy5jUn
                genericflowlib_varmap.signingURL = signing_url;
                // Block#: 8EOo*1D+]HMLvp_j*mRs
                com.fc.JavaScriptDistLib.WebContainer.setProperty["URL"]("FlowDocuSign", genericflowlib_varmap.signingURL);
              },
              function(error_data) {
                // Block#: k5%vJzvyGKpHI/?4`01@
                console.log(error_data);
                if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
                  genericflowlib_varmap.debugService.traces.push(error_data);
                  genericflowlib_varmap.debugService.printLog();
                }
                // Block#: S0aF3#Tv9tC%(J=vr%_B
                showErrorDialog('Error loading DocuSign').then(response => {;
                });
              });
          },
          function(error) {
            // Block#: XE;H?jx.0u}y:?u:nK4/
            console.log(error);
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(error);
              genericflowlib_varmap.debugService.printLog();
            }
            // Block#: |?zHVwS(F^}-1,~`R3#D
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowSignScreen", false); // Block#: O}%GZuG7?[@htPX![M;G
            showErrorDialog('Error loading DocuSign').then(response => {;
            });
          });
      });
    }
    /**
     * Describe this function...
     */
    this.initDeviceScreen = initDeviceScreen;

    function initDeviceScreen() {
      return new Promise(function(resolve, reject) {
        // Block#: d}LF3r,@8`i_n.B0#ScD
        hideDeviceList().then(response => {;
        });
        // Block#: u?QPl-=*%PBd@YF8*`uY
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowNextBtn4", (translate('Discover'))); // Block#: }K,LTAn!xw6te8im((oF
        genericflowlib_varmap._currentDevList = [];
        // Describe this function...
        // Block#: MBBRyY]qZX|G,xdoAq*,
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowBasicTitle4", (translate(workflowlibrary.getFormPropertyName('title')))); // Describe this function...
        // Block#: #NA_-Fn?F}(H7Ui]e7!s
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowBasicDescr4", (translate(workflowlibrary.getFormPropertyName('infoText')))); // Block#: m:Wi0),|2#E/kwoNiTS$
        if(getOutcomeByName('Back') != null) {
          // Block#: eL*L.@rxCO2XM({poB/T
          $('[obj-name="FlowBack4"]').show();
        } else {
          // Block#: IvN6=p2/6xz(uz2A+dvI
          $('[obj-name="FlowBack4"]').hide();
        }
        // Block#: BK/d9$RaHB;?NPierA.i
        if(getOutcomeByName('Next') != null || getOutcomeByName('Discover') != null || getOutcomeByName('Continue') != null) {
          // Block#: 3QU?RQ$D.m=l$~g081]F
          $('[obj-name="FlowNextBtn4"]').show();
        } else {
          // Block#: ~6J$avW%IRYklI3)]Qp9
          $('[obj-name="FlowNextBtn4"]').hide();
        }
        // Block#: EhOfDA;27w%N5GK4u-A)
        if(getOutcomeByName('Cancel') != null) {
          // Block#: +M9m.@(NmvxuZVe/|*$j
          $('[obj-name="FlowLink4"]').show();
        } else {
          // Block#: k65TdTz42u#xr9xi-bp8
          $('[obj-name="FlowLink4"]').hide();
        }
      });
    }
    /**
     * Describe this function...
     */
    this.onDeviceSelected = onDeviceSelected;

    function onDeviceSelected(device) {
      return new Promise(function(resolve, reject) {
        // Block#: $=teJWjkZO5jKmFe?p;R
        com.fc.JavaScriptDistLib.Clock.stopTimer(genericflowlib_varmap._currentTimeInterval)
        // Block#: S@Bc7m.W/N~JNbT~U@MX
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", true); // Block#: .$QMJJHSoZ_pQBBAO5qr
        com.fc.JavaScriptDistLib.SmartDevices.connectToDevice(device,
          function() {
            // Block#: .+*F8PBVf38p~zSY{ouT
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", false); // Block#: 0-kE7;Sa3npURql6svxw
            console.log('Connection success!');
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push('Connection success!');
              genericflowlib_varmap.debugService.printLog();
            }
            // Block#: kvjGXgo#lfgs`S/k=@yX
            genericflowlib_varmap._currentDevice = device;
            // Block#: M11s4:5P9i}KLquj5S]X
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowBasicDescr4", 'BPM:'); // Block#: ?jaVY,Z+OHAw{Id)Phtw
            showDeviceData().then(response => {;
            });
          },
          function(error_data) {
            // Block#: V4$kWm6mbY;`;JHLeY`A
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", false); // Block#: *RQM0Qo6G;vy9DZnBZXx
            console.log(error_data);
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(error_data);
              genericflowlib_varmap.debugService.printLog();
            }
          });
      });
    }
    /**
     * Describe this function...
     */
    this.showDeviceList = showDeviceList;

    function showDeviceList() {
      return new Promise(function(resolve, reject) {
        // Block#: J:]VS:.kX=0d+lpbG[c]
        $('[obj-name="FlowDevList"]').show(); // Block#: /q|iJkh.7e~B_J}DI-Uu
        $('[obj-name="FlowBasicDescr4"]').hide(); // Block#: m.0AZ`Q0iMvC]N)!rvZT
        $('[obj-name="FlowNextBtn4"]').hide(); // Block#: %8e|_`wB(1_[#Lwrmk4C
        $('[obj-name="FlowLink4"]').hide(); // Block#: w!To4jpy=XdYNX;pje:I
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('FlowDevList');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('FlowDevList');
        on_listview_length_configured_FlowDevList();
      });
    }
    /**
     * Describe this function...
     */
    this.hideDeviceList = hideDeviceList;

    function hideDeviceList() {
      return new Promise(function(resolve, reject) {
        // Block#: -6X%63DI(t4(UTj=C4g~
        $('[obj-name="FlowBasicDescr4"]').show(); // Block#: Axqp.S3u#]]Ewf5BUrrB
        $('[obj-name="FlowDevList"]').hide(); // Block#: %Q%tGsm``rI-X9)yaW)f
        $('[obj-name="FlowLink4"]').show(); // Block#: E%6704^1bGUkxA;2a@Vh
        $('[obj-name="FlowNextBtn4"]').show();
      });
    }
    /**
     * Describe this function...
     */
    this.onNoFound = onNoFound;

    function onNoFound() {
      return new Promise(function(resolve, reject) {
        // Block#: J7}x{_e99IzK`ZL/d2Bt
        com.fc.JavaScriptDistLib.Dialog.show(com.fc.JavaScriptDistLib.Dialog.create('Message', 'No devices found'), function(button_title) {
        })
      });
    }
    /**
     * Describe this function...
     */
    this.discoverDevices = discoverDevices;

    function discoverDevices() {
      return new Promise(function(resolve, reject) {
        // Block#: pALF32eR,IO3|+~2;w%1
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", true); // Block#: jB[J[`xIRzz)Iyx_;tDN
        com.fc.JavaScriptDistLib.SmartDevices.startDiscovery(29900);
        // Block#: 8F)jF?Fi{7Sbc!s.-p1p
        com.fc.JavaScriptDistLib.Clock.startTimer(genericflowlib_varmap._currentTimeInterval, function(timer) {
          // Block#: 84jI8O#P?.Rd*(Qy*f|i
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", false); // Block#: {^NvxF8C;u3t*Ggd/0o@
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(genericflowlib_varmap._currentDevList.length, "GT", 0)) {
            // Block#: muD0;AnYk!^^kFgNCbOE
            showDeviceList().then(response => {;
            });
          } else if(genericflowlib_varmap._currentDevice == null) {
            // Block#: !os^`%*?qFW3vk%}Bwp-
            onNoFound().then(response => {;
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.submit = submit;

    function submit() {
      return new Promise(function(resolve, reject) {
        // Block#: wrVQ*1fP`!r3w@j:Af;f
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", true); // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: mu5/rpx^Oc6,Tmi^^FcB
        workflowlibrary.completeAndGetNextTask(getOutcomeByName('Continue')).then(response => {;
          if(response.name === "success") {
            // Block#: $Kv4D(?Ld(z[{[waC@iz
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", false); // Describe this function...
            // Block#: ns}mEG$BA:g4B-ImggHr
            goToScreen(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: {rpI59+2/5g8zVtG[=Ou
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", false); // Block#: _CN(6ko-.:oZp9v{U$|=
            showErrorDialog('Could not save your data..').then(response => {;
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.showDeviceData = showDeviceData;

    function showDeviceData() {
      return new Promise(function(resolve, reject) {
        // Block#: *~dsf4L;rnAr$Z@QQvCQ
        $('[obj-name="FlowBasicDescr4"]').show(); // Block#: ?VvPXU:np(2AH[Z@^;da
        $('[obj-name="FlowDevList"]').hide(); // Block#: nip8OEb@786o^5A=tK!B
        $('[obj-name="FlowNextBtn4"]').show(); // Block#: vKBRW^q(l6QC1eRwAl-1
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowNextBtn4", (translate('Submit')));
      });
    }
    /**
     * Describe this function...
     */
    this.disconnectDevice = disconnectDevice;

    function disconnectDevice() {
      return new Promise(function(resolve, reject) {
        // Block#: xn$*;(3x4IviuE+f}d^G
        if(genericflowlib_varmap._currentDevice != null) {
          // Block#: khPuX-x5m7mR}]kfg5_(
          com.fc.JavaScriptDistLib.SmartDevices.disconnectFromDevice(genericflowlib_varmap._currentDevice);
          // Block#: 3O4zH[3Stzg1J;_/R+V.
          genericflowlib_varmap._currentDevice = null;
        }
      });
    }
    /**
     * Describe this function...
     */
    this.discoverDevicesTest = discoverDevicesTest;

    function discoverDevicesTest() {
      return new Promise(function(resolve, reject) {
        // Block#: jo@mG^Jg|hTa!Fe/zFaY
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", true); // Block#: K45JbTcJ9O?CC,1PamB-
        genericflowlib_varmap._currentDevList = ['Test1', 'Test2', 'Test3'];
        // Block#: FclJWUSTYN+ycECu%9g8
        com.fc.JavaScriptDistLib.Clock.startTimer(genericflowlib_varmap._currentTimeInterval, function(timer) {
          // Block#: ]HffOsmFhiDvh9kXy?Gc
          showDeviceList().then(response => {;
          });
          // Block#: u.Hm3_F?CBQQDjj_orC.
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", false);
        });
      });
    }
    // Block#: Vk.J0.Fgoq#x`GbJcEZ_
    function on_screen_showFlowBasicScreen() {
      try {
        // Block#: ^*H@L0U=IoKD8H_N}!J`
        initScreen().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowBasicScreen"]').on('show', on_screen_showFlowBasicScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showFlowBasicScreen'] = on_screen_showFlowBasicScreen;
    // Block#: ?pjf%8-P90%|1Qo{a*)r
    function on_FlowLink_click(e) {
      try {
        // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: uj#t:LC~/#-Lei)6R]Y-
        workflowlibrary.completeAndGetNextTask(getOutcomeByName('Help')).then(response => {;
          if(response.name === "success") {
            // Describe this function...
            // Block#: ^s9LDz$O?Rg*^qtXeJtq
            console.log(workflowlibrary.getCurrentTask());
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(workflowlibrary.getCurrentTask());
              genericflowlib_varmap.debugService.printLog();
            }
            // Describe this function...
            // Block#: #$e-(+]CA/Rz`(Fme0y3
            goToScreen(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: v_5}}ikF)NbIXNY!{8p+
            console.log(response.data);
            if(genericflowlib_varmap.debugService && genericflowlib_varmap.debugService.active) {
              genericflowlib_varmap.debugService.traces.push(response.data);
              genericflowlib_varmap.debugService.printLog();
            }
            // Block#: Xy:6Ku6i;,d#!oqBBh_T
            showErrorDialog('An error occurred while saving your data..').then(response => {;
            });
          }
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowLink"]').on('click', on_FlowLink_click);
    // Block#: ypeJHHdjo$cE*/1pO`kP
    function on_FlowBack_click(e) {
      try {
        // Block#: 3xXPgAkvooh0c|abfe]d
        goBack().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowBack"]').on('click', on_FlowBack_click);
    // Block#: ,.,H5Y7Sjif^YaCVOfws
    function on_FlowAgePicker_click(e) {
      try {
        // Block#: Ql$E9E8*1y;plENkHaqt
        let _startDate = (com.fc.JavaScriptDistLib.MomentLibrary('1900-01-01', ('YYYY[-]MM[-]DD'))),
          _endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
        if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
        if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
        com.fc.JavaScriptDistLib.Clock.pickDateRange(_startDate, _endDate)
          .then((date) => {
            date = com.fc.JavaScriptDistLib.MomentLibrary(date);
            // Block#: ;25l$*lL+lpU#J8#RieO
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("FlowAgePicker", (date.format(('MM[/]DD[/]YYYY'))));
          });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowAgePicker"]').on('click', on_FlowAgePicker_click);
    // Block#: KV|Ddl%RkjkDAI/Bv%W6
    function on_FlowNextBtn_click(e) {
      try {
        // Describe this function...
        // Block#: aYw?Mo]*MxIss8QsSdKP
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibrary.getCurrentTask(), 'name'), "EQUAL", 'AgeCheck')) {
          // Block#: %zrol!-$yKD%b|Nm1*!n
          if(isValidDate(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("FlowAgePicker"))) {
            // To set the value of a specific field (addressed by its id) in the current form.
            // Block#: }|4ByPcWpWrw`3hPN(#C
            workflowlibrary.setField('birthdate', com.fc.JavaScriptDistLib.Button.getProperty["Text"]("FlowAgePicker")).then(response => {;
            });
          }
        }
        // Block#: f(8.d*J-1]u#WUe_a%9L
        if(genericflowlib_varmap._currentText1Id != null) {
          // To set the value of a specific field (addressed by its id) in the current form.
          // Block#: ZD87[W!]M$gLV3(^rtM.
          workflowlibrary.setField(genericflowlib_varmap._currentText1Id, com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FlowTextInput")).then(response => {;
          });
        }
        // Block#: S|bmY|6U*:r[3RE*yq2E
        if(genericflowlib_varmap._currentText2Id != null) {
          // To set the value of a specific field (addressed by its id) in the current form.
          // Block#: U*DevA|`13P8RP+W};2]
          workflowlibrary.setField(genericflowlib_varmap._currentText2Id, com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FlowTextInput2")).then(response => {;
          });
        }
        // Block#: ou[rG3*thPp!G!OV4GXD
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowBasicScreen", true); // Block#: tCh}vgz8d/Z?MDWw=Q)~
        goNext().then(response => {;
          if(response.name === "then") {
            // Block#: hu)lxsES8Q-l3;_z+;K:
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowBasicScreen", false);
          }
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowNextBtn"]').on('click', on_FlowNextBtn_click);
    // Block#: l_CVa}GJ92oq?XkZV^Q6
    function on_screen_showFlowRadioScreen() {
      try {
        // Block#: LzA4f$~@R*:U)x@t-6jM
        initChoiceScreen().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowRadioScreen"]').on('show', on_screen_showFlowRadioScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showFlowRadioScreen'] = on_screen_showFlowRadioScreen;
    // Block#: S2urn_9{jzNYSQ!=~{lx
    function on_FlowRadioBack_click(e) {
      try {
        // Block#: 1`/e+[Tppcg;4Ty}o}u9
        goBack().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowRadioBack"]').on('click', on_FlowRadioBack_click);
    // Block#: m#deWZ$9X_LB2PrNTBh{
    function on_FlowRadioNext_click(e) {
      try {
        // Block#: oQ.37rl8dVyV8Ttxa+6@
        if(genericflowlib_varmap._currentRadioId != null) {
          // To set the value of a specific field (addressed by its id) in the current form.
          // Returns the selected choice.
          // Block#: T_:@*K{Ia6F~X|d1u8a}
          workflowlibrary.setField(genericflowlib_varmap._currentRadioId, radiobuttonsuicomponent_FlowRadioInput.getRadioButtonsValue()).then(response => {;
          });
        }
        // Block#: zii=VL]N+`X/BAj|9K_{
        if(genericflowlib_varmap._currentSizeId != null) {
          // Block#: 2Me^w;Ke)s83tTJ/e.`I
          if(isValidSize(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FlowSizeInput"))) {
            // To set the value of a specific field (addressed by its id) in the current form.
            // Block#: ,/;w{*@=zx4`FLFcC-YP
            workflowlibrary.setField(genericflowlib_varmap._currentSizeId, com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("FlowSizeInput")).then(response => {;
            });
          }
        }
        // Block#: dT$n8A0{/!)}d|9aRo9T
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowRadioScreen", true); // Block#: d515Zt|CUHv~zV.fqZt;
        goNext().then(response => {;
          if(response.name === "then") {
            // Block#: |@M5._V9LNIYNk(@?[_A
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowRadioScreen", false);
          }
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowRadioNext"]').on('click', on_FlowRadioNext_click);
    // Block#: EbI3)@I?ed7CFirr~U0H
    function on_screen_showFlowSignScreen() {
      try {
        // Block#: -;-E^o7H_*_3k7,7;I%{
        $('[obj-name="FlowDocuSign"]').hide(); // Block#: 3e2V{k(5,3~)Y(`5W`Ok
        runDocuSign().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowSignScreen"]').on('show', on_screen_showFlowSignScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showFlowSignScreen'] = on_screen_showFlowSignScreen;
    // Block#: 4wA7204hTH[]b*,!)3r#
    function on_FlowBack3_click(e) {
      try {
        // Block#: jlHV6p:B!(6w~Z_{d5bV
        goBack().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowBack3"]').on('click', on_FlowBack3_click);
    // Block#: -;eq@$Gpqr/uo{3j)E(s
    var FlowDocuSign_onWebViewUrlIntercepted = function(url) {
      try {
        // Block#: EHVgpkOp*1#}Hfn6J0*h
        genericflowlib_varmap.signingURL = '';
        // Block#: q,0JL}Oe?TU.1wQQ:ma}
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.DocuSign.getSigningEventFromUrl(url)), "EQUAL", 'signing_complete')) {
          // Block#: }874em9Y2/kB6MmWD0H7
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowSignScreen", true); // Block#: 0aCdn/cOS4Cb]U9abaxJ
          genericflowlib_varmap.signingURL = '';
          // Block#: kUQsj468_bW*@^w:qNu5
          $('[obj-name="FlowDocuSign"]').hide(); // To complete the current task and get the next one if it exists.
          // You have to specify the outcome's name (valid outcome of the current task).
          // Block#: -W4YIDqP.48Ltia#Dl#y
          workflowlibrary.completeAndGetNextTaskById('continue').then(response => {;
            if(response.name === "success") {
              // Block#: ,=.+QgJO$HEFnPlpIz]F
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowSignScreen", true); // Describe this function...
              // Block#: CJ+BfT!4GSO~3(Fp%:fI
              goToScreen(workflowlibrary.getFormPropertyName('templateType')).then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: mKMU/,=jD,D6BI50u:ci
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowSignScreen", true);
            }
          });
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.WebContainer.setDomainInterceptCallback('FlowDocuSign', FlowDocuSign_onWebViewUrlIntercepted);
    // Block#: v=zTRWZw|5hPC=.!+`hP
    function on_screen_showFlowDeviceScreen() {
      try {
        // Block#: jY?JC%zj!HSI$bGO7q;@
        initDeviceScreen().then(response => {;
        });
        // Block#: ~$SM+g!]NbR?7lUlTHgP
        genericflowlib_varmap._currentTimeInterval = (com.fc.JavaScriptDistLib.Clock.createTimer(30, 0));
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowDeviceScreen"]').on('show', on_screen_showFlowDeviceScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showFlowDeviceScreen'] = on_screen_showFlowDeviceScreen;
    // Block#: h:R|Yc{1ZP|:tl9mmOaw
    onSmartDevicesDeviceFound = function(device_address, device_name) {
      try {
        // Block#: 5)`YbN;7RvfU=Yot:l~I
        if(com.fc.JavaScriptDistLib.TextLib.textContains(device_name, 'Pedometer')) {
          // Block#: ]ZMZWujwROZC@eP@fE%s
          com.fc.JavaScriptDistLib.Storage.add('pedometer_device_address', device_address) // Block#: 6v=YCMCkt/*(i]vFBxD5
          com.fc.JavaScriptDistLib.SmartDevices.connectToDevice(device_address,
            function() {
              // Block#: zqXhPRc1XsuCq|q,KA6Q
              com.fc.JavaScriptDistLib.SmartDevices.stopDiscovery();
              // Block#: 2tv#8*CY+*.+XzEZvN:$
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("FlowDeviceScreen", false); // Block#: E_^#z+Y~g4+g-0l0_{+g
              genericflowlib_varmap._currentDevice = device_address;
              // Block#: Mzhe4%M%m[hvuPF`y|5[
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowBasicDescr4", 'BPM:'); // Block#: bGFi}dAk46W+l{XC13R[
              showDeviceData().then(response => {;
              });
            },
            function(error_data) {
            });
        } else if(getOutcomeByName('Discover') != null) {
          // Block#: -{yjP7=_gz6aGi!(U#yW
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(genericflowlib_varmap._currentDevList, device_address)
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    // Block#: r%^tVn55*l0]!QvHgjx3
    function on_listview_length_configured_FlowDevList() {
      try {
        com.fc.JavaScriptDistLib.ListView.configureCells('FlowDevList', genericflowlib_varmap._currentDevList.length);
        $('[obj-name="FlowDevList"]').children().each(function(i) {
          if(i >= 0) {
            com.fc.JavaScriptDistLib.ListView.setContext($(this));
            com.fc.JavaScriptDistLib.ListView.executeConfigCallback('FlowDevList', $(this), i);
            com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('FlowDevList', $(this), i);
            com.fc.JavaScriptDistLib.ListView.resetContext($(this));
          }
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    // Block#: 1dBvYGO/L$K$!3olrCoq
    function on_listview_cell_configured_FlowDevListCell(FlowDevListCell, number) {
      try {
        // Block#: =q4zVIOUS=Ucigq=PY9n
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowDevListName", (genericflowlib_varmap._currentDevList[number]));
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.ListView.setConfigCallback('FlowDevListCell', on_listview_cell_configured_FlowDevListCell);
    // Block#: 3UB5AT?:P8oRv@1`w(zj
    function on_FlowBack4_click(e) {
      try {
        // Block#: 3H~v0_k;6f?5kn+Z$._o
        com.fc.JavaScriptDistLib.Clock.stopTimer(genericflowlib_varmap._currentTimeInterval)
        // Block#: #CW]2XfYUqzAtT`Apmhh
        disconnectDevice().then(response => {;
        });
        // Block#: V~ra]HcMG/``$PN#xfyH
        goBack().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowBack4"]').on('click', on_FlowBack4_click);
    // Block#: FFO^djFJoQywP%BiI|=J
    function on_listview_cell_clicked_FlowDevListCell(FlowDevListCell, number) {
      try {
        // Block#: Cml`-dVm@ls)i=Z9MLd}
        onDeviceSelected(genericflowlib_varmap._currentDevList[number]).then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    }
    com.fc.JavaScriptDistLib.ListView.setClickCallback('FlowDevListCell', on_listview_cell_clicked_FlowDevListCell);
    // Block#: d]6gJD(okT|S8uuYe=?K
    function on_FlowLink4_click(e) {
      try {
        // Block#: bZ*-F+}.#2(Z1JN!XP*{
        onFlowComplete(null).then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowLink4"]').on('click', on_FlowLink4_click);
    // Block#: e?fv#l0LhZHm}UtKesr*
    function on_FlowNextBtn4_click(e) {
      try {
        // Block#: sHw-|b[LOkr0.NfdS97i
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("FlowNextBtn4"), "EQUAL", 'Discover')) {
          // Block#: H/HyeI=l1(7,wDQlQ`me
          discoverDevices().then(response => {;
          });
        } else {
          // Block#: 9@:BcuzRjofj:IuE63_,
          submit().then(response => {;
          });
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="FlowNextBtn4"]').on('click', on_FlowNextBtn4_click);
    // Block#: ItCbc9WWnaA`Ts(a;lzB
    onSmartDevicesDeviceDataChanged = function(device_address, data) {
      try {
        // Block#: !0|-}#5^jB?[qE0EC^[u
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("FlowBasicDescr4", (String('BPM: ') + String(getFromJson(data)))); // To set the value of a specific field (addressed by its id) in the current form.
        // Block#: A~].L^4avGZoAV@Lhme8
        workflowlibrary.setField('resultValue', getFromJson(data)).then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.Screen.screenPopInit();
    com.fc.JavaScriptDistLib.DocuSign.configure('{"api":{"userId":"a513a5d6-3f9d-4b4c-bfb5-f29b700393ab","password":"EYZZ0/YmbaeDmI2Ixi8Gl9etaOU=","integratorKey":"1463bd35-fab3-4546-b009-1b6883f88ed6","demo":"true"}}');
    var onSmartDevicesDeviceFound, onSmartDevicesDeviceDisconnected, onSmartDevicesDeviceDataChanged;
    com.fc.JavaScriptDistLib.SmartDevices.configureDevices(onSmartDevicesDeviceFound, onSmartDevicesDeviceDisconnected, onSmartDevicesDeviceDataChanged);
  };
  var genericflowlib = new GenericFlowLib();

  function EQ5D5Llib() {
    eq5d5llib_varmap = {};
    eq5d5llib_varmap._debugService = null;

    function WorkflowLibraryV37() {
      workflowlibraryv37_varmap = {};
      workflowlibraryv37_varmap._debugService = null;
      workflowlibraryv37_varmap._initiatorVar = null;
      workflowlibraryv37_varmap._initiator = null;
      workflowlibraryv37_varmap._userName = null;
      workflowlibraryv37_varmap._userPassw = null;
      workflowlibraryv37_varmap._processDefKey = null;
      workflowlibraryv37_varmap._urlSetup = null;
      workflowlibraryv37_varmap._taskToBeCompleted = null;
      workflowlibraryv37_varmap._processData = null;
      workflowlibraryv37_varmap.tempDict = null;
      workflowlibraryv37_varmap.tempDict1 = null;
      workflowlibraryv37_varmap._task = null;
      workflowlibraryv37_varmap._formData = null;
      workflowlibraryv37_varmap._processVariabes = null;
      workflowlibraryv37_varmap.tempNum = null;
      workflowlibraryv37_varmap._tasks = null;
      workflowlibraryv37_varmap.tempList = null;
      workflowlibraryv37_varmap._outcomes = null;
      workflowlibraryv37_varmap._processDefId = null;
      workflowlibraryv37_varmap._processInstId = null;
      workflowlibraryv37_varmap._taskId = null;
      workflowlibraryv37_varmap._formProperties = null;
      workflowlibraryv37_varmap._formKey = null;
      workflowlibraryv37_varmap._formName = null;
      workflowlibraryv37_varmap._formFields = null;
      workflowlibraryv37_varmap._formId = null;
      workflowlibraryv37_varmap._processInstance = null;
      workflowlibraryv37_varmap._processInstances = null;
      workflowlibraryv37_varmap.tempParam = null;
      workflowlibraryv37_varmap.tempN2 = null;
      workflowlibraryv37_varmap._templateKey = null;
      workflowlibraryv37_varmap.tempListKey = null;
      workflowlibraryv37_varmap._outcomeAndFieldMapping = null;
      workflowlibraryv37_varmap._templateType = null;
      workflowlibraryv37_varmap._currentInitiator = null;
      workflowlibraryv37_varmap.tempList1 = null;

      function mathRandomInt(a, b) {
        if(a > b) {
          // Swap a and b to ensure a is smaller.
          var c = a;
          a = b;
          b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
      }
      /**
       * Describe this function...
       */
      this.TestInitSDK = TestInitSDK;

      function TestInitSDK() {
        return new Promise(function(resolve, reject) {
          // Block#: rQO{,%cUbTaY=47}Q56g
          workflowlibraryv37_varmap._initiatorVar = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [String('sdkTEST') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(mathRandomInt(1000, 30000))), 'lorenzo+02@foneclay.com', '123456', 'SDKv11TestFlow', 'https://develop.snapclinical.net:8443']);
          // Block#: X1X:~yjfb+;@SH`tUzH+
          workflowlibraryv37_varmap._initiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._initiatorVar, 'initiator'));
          // Block#: VM9o$anfu2m0n5Y-mzkB
          workflowlibraryv37_varmap._userName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._initiatorVar, 'userName'));
          // Block#: f$2q36h{3_EXvMmy[{h$
          workflowlibraryv37_varmap._userPassw = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._initiatorVar, 'userPassw'));
          // Block#: z=mD)62`^v(+5,tTevOJ
          workflowlibraryv37_varmap._processDefKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._initiatorVar, 'processDefKey'));
          // Block#: P:@L;%C93,h].q1{Eb69
          workflowlibraryv37_varmap._urlSetup = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._initiatorVar, 'urlSetup'));
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflowWithCredentials = initWorkflowWithCredentials;

      function initWorkflowWithCredentials(User, Password, initiator) {
        return new Promise(function(resolve, reject) {
          // Block#: zC@!f!v3k}}*b|GXa$-u
          if(!(User == null || Password == null)) {
            // Block#: ]^$Y;X0-}*l_4$nA?jB9
            workflowlibraryv37_varmap._userName = User;
            // Block#: Tx:Fiz?m4vg5,~ypEHr;
            workflowlibraryv37_varmap._userPassw = Password;
            // Block#: fYiCub|QVm,4;am/r5Ax
            com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://develop.snapclinical.net:8443","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
            com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(workflowlibraryv37_varmap._userName, workflowlibraryv37_varmap._userPassw, workflowlibraryv37_varmap._userName, "mobileApp", "https://develop.snapclinical.net:8443");
            // Block#: r]_8{Ov/L2qxdxQq0.DT
            if(initiator == null) {
              // Block#: u]~/HF,82OZm!?sA;$h]
              workflowlibraryv37_varmap._initiator = '';
            } else {
              // Block#: L?Dm~(C;%$KM[cs^wt{C
              workflowlibraryv37_varmap._initiator = initiator;
            }
          }
          // Block#: ^s$Sn}g4Wrilbw03t41H
          eraseParsedVars().then(response => {;
          });
          // Block#: Y@S#J}`:]1w3U^FU}d7F
          console.log('SDK initWorkflow with credentials called');
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push('SDK initWorkflow with credentials called');
            workflowlibraryv37_varmap.debugService.printLog();
          }
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTask = completeAndGetNextTask;

      function completeAndGetNextTask(outcomeObj) {
        return new Promise(function(resolve, reject) {
          // Block#: 7=KJb9ZpU,se~aM[d,0g
          console.log(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(String('SDK completeAndGetNextTask ... adding outcome value .. ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeObj)));
            workflowlibraryv37_varmap.debugService.printLog();
          }
          // Block#: mysWPqPsV*o4%n_)0nH9
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap._taskToBeCompleted, 'outcome')) {
            // Block#: A~!@U:B@{vHpa{R?sQ#{
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'outcome', outcomeObj);
          }
          // Block#: *AL$m8VnvpB+=K%.x9[g
          console.log(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._taskToBeCompleted)))].join(''));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(['SDK calling  complete task and get next with ', ' this list of keys in dictionary task: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._taskToBeCompleted)))].join(''));
            workflowlibraryv37_varmap.debugService.printLog();
          }
          // Block#: Tb%Z0:Q`rId2rhD:=/4l
          console.log(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(workflowlibraryv37_varmap._taskToBeCompleted))));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(String('SDK the task object is  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(workflowlibraryv37_varmap._taskToBeCompleted))));
            workflowlibraryv37_varmap.debugService.printLog();
          }
          // Block#: ^Vv#,#ip6}#r84@zpsv%
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(workflowlibraryv37_varmap._taskToBeCompleted,
            function(process_data) {
              // Block#: !F:A=9i{n^MTKen4#xJ;
              workflowlibraryv37_varmap._processData = process_data;
              // Block#: .}]B1v{@Ij+I6k[?]uut
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !fTLMH]:Zf0c|W{kE/[V
              console.log(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK completeAndGetNextTask success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: 26NQ/=^-rX@1,8O|CP#/
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: $2Mybx(ARQF?F..vx3Kc
              console.log(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK completeAndGetNextTask error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: oDp}wFLVeirCQ#0?:^_m
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getInitVar = getInitVar;

      function getInitVar() {
        // Block#: gPq~?;_z-~G_(Bcn^=|d
        workflowlibraryv37_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['initiator', 'userName', 'userPassw', 'processDefKey', 'urlSetup'], [workflowlibraryv37_varmap._initiator, workflowlibraryv37_varmap._userName, workflowlibraryv37_varmap._userPassw, workflowlibraryv37_varmap._processDefKey, workflowlibraryv37_varmap._urlSetup]);
        // Block#: N?w23TNVy09rj$)*e(Y3
        console.log(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getInitVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempDict;
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessWithVars = startNewProcessWithVars;

      function startNewProcessWithVars(processDefKey, forceStartNewInstance, listOfVars) {
        return new Promise(function(resolve, reject) {
          // Block#: l`Yd*l[g8F.wxD10iBmH
          workflowlibraryv37_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: fs7fA;$I_%*D,Q_;ej0e
          if(listOfVars != null) {
            // Block#: x7z{V{^lJy:6v9A:):i~
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(listOfVars, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string']))
            // Block#: Gd:QsRFiPFHepLX^;awJ
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict1, 'processVariables', listOfVars);
          }
          // Block#: $;SbM8S3Y=bM..5rEksT
          workflowlibraryv37_varmap._processDefKey = processDefKey;
          // Block#: (P${f{/X=Gx8=ZK=F3nT
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, workflowlibraryv37_varmap.tempDict1), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: YpWf.ePiTX),W68/JQ?j
              workflowlibraryv37_varmap._processData = process_data;
              // Block#: ^z?^L68XOE@d2!(k.7B8
              parseProcessData(false, null).then(response => {;
              });
              // Block#: TgLhWKzt0^{|!u~bXzy*
              console.log(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK startNewProcessInstanceWithVars success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: 9cQ,mM6!Y|yAmOz0d:rg
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: ~r=HiT_6_QbNMax2ZFL.
              console.log(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK startNewProcessInstanceWithVars error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: ]g3vK,Q.($GQ{;;p2FkF
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To complete the current task and get the next one if it exists.
       * You have to specify the outcome's name (valid outcome of the current task).
       */
      this.completeAndGetNextTaskById = completeAndGetNextTaskById;

      function completeAndGetNextTaskById(outcomeId) {
        return new Promise(function(resolve, reject) {
          // Block#: Yvtdyc_^[]=}cSnI*~4e
          console.log(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById ...looking for Id  ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(outcomeId)));
            workflowlibraryv37_varmap.debugService.printLog();
          }
          // Block#: b#$ien{n?@z|Tuv9=bl8
          if(doesExistOutcome(outcomeId)) {
            // Block#: 5y1H.}mF7iDlhW.Iz_Xd
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'outcome', getOutcome(outcomeId));
          }
          // Block#: qI{slP6*N3L0!OWa8/pz
          com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(workflowlibraryv37_varmap._taskToBeCompleted,
            function(process_data) {
              // Block#: XdDy=(Gj`rF-EuuI.hEb
              workflowlibraryv37_varmap._processData = process_data;
              // Block#: !pxYgrn2JJKS#y%ha5xV
              parseProcessData(false, null).then(response => {;
              });
              // Block#: !s|V2~N*I;QtUp3W*$~?
              console.log(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: @`ke?Ic1NMo4q~Vs8KRW
              resolve({
                name: "success",
                data: process_data
              });
            },
            function(error_data) {
              // Block#: J=y3t29Dhb#p[*-{K]u#
              console.log(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK completeAndGetNextTaskById error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error_data)));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: RN_Tr*,Y:K?.OtKTT$rK
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * To setup the user name and the password to access to the
       * workflow. Start from here to interact with the workflow.
       */
      this.initWorkflow = initWorkflow;

      function initWorkflow() {
        return new Promise(function(resolve, reject) {
          // Block#: hSdJ!zGqd3nW`R(|Sf|b
          eraseParsedVars().then(response => {;
          });
          // Block#: 1,)Pmk4]Lm63aroPtn?T
          console.log('SDK initWorkflow without credentials called');
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push('SDK initWorkflow without credentials called');
            workflowlibraryv37_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessData = getProcessData;

      function getProcessData() {
        // Block#: cJWzC?e4K2.s.bS5T3z+
        console.log(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getProcessData list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._processData;
      }
      /**
       * To check if another task is available (true)
       * or the current flow is at the end (false).
       */
      this.doesExistCurrentTask = doesExistCurrentTask;

      function doesExistCurrentTask() {
        // Block#: =8(Ef*9BC62$E7_l3P#d
        console.log('CurrentTask: ');
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push('CurrentTask: ');
          workflowlibraryv37_varmap.debugService.printLog();
        }
        // Block#: p7lzgBtkx$1VaQ;ah~M0
        console.log(workflowlibraryv37_varmap._task);
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(workflowlibraryv37_varmap._task);
          workflowlibraryv37_varmap.debugService.printLog();
        }
        // Block#: _yNMsE4};MK%xzk^NnAp
        if(workflowlibraryv37_varmap._task == null) {
          return false;
        }
        // Block#: Dx14Nbp7RJ%;nhUmlA%g
        if((com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._task)) == null) {
          return false;
        }
        return !!(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._task)).length;
      }
      /**
       * Describe this function...
       */
      this.getCurrentTask = getCurrentTask;

      function getCurrentTask() {
        // Block#: A//H39vF:Nwf4)0Ptt)[
        console.log(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._task))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getCurrentTask list of keys: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._task))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._task;
      }
      /**
       * Describe this function...
       */
      this.getForm = getForm;

      function getForm() {
        // Block#: hi_6#X@QWmYo``}%E6ns
        console.log(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._formData))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getForm - List of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._formData))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._formData;
      }
      /**
       * Describe this function...
       */
      this.setProcessVariable = setProcessVariable;

      function setProcessVariable(name2, value, type) {
        return new Promise(function(resolve, reject) {
          // Block#: fl``|]bZhX,hsd+4=UBz
          console.log(['SDK setProcessVariable num of vars: ', safeLength(workflowlibraryv37_varmap._processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(['SDK setProcessVariable num of vars: ', safeLength(workflowlibraryv37_varmap._processVariabes), '  adding / setting var: ', name2, '  value: ', value].join(''));
            workflowlibraryv37_varmap.debugService.printLog();
          }
          // Block#: /#+h`aY2tR8.(S4nB`Jc
          if(doesExistCurrentTask()) {
            // Block#: z-p:pd.s)zS|{{7^r{[c
            if(doesContainProcessVariableName(name2)) {
              // Block#: }rNCd{le_?[aGymKA/FM
              workflowlibraryv37_varmap.tempNum = 0;
              // Block#: Re(v%NPcP]DK#yyeoy!w
              var item_list = workflowlibraryv37_varmap._processVariabes;
              for(var item_index in item_list) {
                item = item_list[item_index];
                // Block#: ^!7$,e6QAx)K!Ixl.0mT
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
                  // Block#: *S+*GL/c@On+rlqx,}55
                  workflowlibraryv37_varmap.tempDict = item;
                  // Block#: J5@4/Gl5WsPEv-DhwD7/
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict, 'value', value);
                  // Block#: R.N)idyNnfb7(I+skE3s
                  workflowlibraryv37_varmap._processVariabes[workflowlibraryv37_varmap.tempNum] = workflowlibraryv37_varmap.tempDict;
                }
                // Block#: 7/Us9:R!s_F~=37{d^Q?
                workflowlibraryv37_varmap.tempNum = workflowlibraryv37_varmap.tempNum + 1;
              }
            } else {
              // Block#: K8{b.]4*)fBtMo7}Ds[G
              workflowlibraryv37_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'type', 'value'], [name2, type, value]);
              // Block#: wFb8gv7liSAXvA_Jgk.A
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibraryv37_varmap._processVariabes, workflowlibraryv37_varmap.tempDict)
            }
            // Block#: )}(N9doX5kiVPt#_uk5@
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._task, 'processVariables', workflowlibraryv37_varmap._processVariabes);
            // Block#: D-i;X3`Uwn^AClSlvd:5
            workflowlibraryv37_varmap._tasks[0] = workflowlibraryv37_varmap._task;
            // Block#: +a61$mWaDwwZKQTEgH~Y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._processData, 'tasks', workflowlibraryv37_varmap._tasks);
            // Block#: fPHS4XlNp%eN-:,XOjB,
            console.log(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(workflowlibraryv37_varmap._processVariabes)));
            if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
              workflowlibraryv37_varmap.debugService.traces.push(String('SDK setProcessVariable num of vars now is: ') + String(safeLength(workflowlibraryv37_varmap._processVariabes)));
              workflowlibraryv37_varmap.debugService.printLog();
            }
            // Block#: KlEG$rEaQ~Rk}950-A8S
            workflowlibraryv37_varmap.tempNum = getIndexOfVarInTaskToBeCompleted(name2);
            // Block#: ]SDFJ:[~R3NMXK*$@h~i
            workflowlibraryv37_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'processVariables'));
            // Block#: I+_=:xhSHjH!OU$iVp(-
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap.tempNum, "EQ", -1)) {
              // Block#: vN3ZQdo#dvO^)W0M/v`Z
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibraryv37_varmap.tempList, workflowlibraryv37_varmap.tempDict)
            } else {
              // Block#: `g*^=/2Ty+Z434}h4Wjv
              workflowlibraryv37_varmap.tempList[workflowlibraryv37_varmap.tempNum] = workflowlibraryv37_varmap.tempDict;
            }
            // Block#: @uV`SeGSX@u!S/V=^_:y
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'processVariables', workflowlibraryv37_varmap.tempList);
            // Block#: {,PP60KJ^8T[^~BYqau~
            console.log(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(workflowlibraryv37_varmap.tempList)));
            if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
              workflowlibraryv37_varmap.debugService.traces.push(String('SDK setProcessVariable new val for var added to task to be completed lenght is: ') + String(safeLength(workflowlibraryv37_varmap.tempList)));
              workflowlibraryv37_varmap.debugService.printLog();
            }
          } else {
            // Block#: 31gi0ioB4Lvw}%V_e2v[
            console.log('SDK no current Task ... nothing to do');
            if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
              workflowlibraryv37_varmap.debugService.traces.push('SDK no current Task ... nothing to do');
              workflowlibraryv37_varmap.debugService.printLog();
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.startFlow = startFlow;

      function startFlow() {
        return new Promise(function(resolve, reject) {
          // Block#: zTc|qmmU[Gt6iSegQ#l!
          startNewProcessInstance(workflowlibraryv37_varmap._processDefKey, true).then(response => {;
            if(response.name === "success") {
              // Block#: J?:2@%=k(-w=!#FR(G$M
              ShowProcessInfo().then(response => {;
              });
            }
            if(response.name === "failure") {
              // Block#: %de7v4oS+C:*cqE:Vnbu
              console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: i26()7nO]yfWLMni[tzg
              AppendInfo('-- startFlow  ON FAILURE ', (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data))).then(response => {;
              });
            }
          });
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessVariables = getProcessVariables;

      function getProcessVariables() {
        // Block#: E`snYA58/d#sQh_a17C[
        console.log(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap._processVariabes))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getProcessVariables number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap._processVariabes))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._processVariabes;
      }
      /**
       * To retrieve all the outcomes coming from the current form.
       */
      this.getOutcomes = getOutcomes;

      function getOutcomes() {
        // Block#: sy(^MV.6A9]*3VwE5d=[
        console.log(String('SDK getFormOutcomes  number of items: ') + String(safeLength(workflowlibraryv37_varmap._outcomes)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getFormOutcomes  number of items: ') + String(safeLength(workflowlibraryv37_varmap._outcomes)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._outcomes;
      }
      /**
       * Describe this function...
       */
      this.parseProcessData = parseProcessData;

      function parseProcessData(onlyTasks, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: @gAO(;-Sg]8To(=X}re4
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap._processData, 'tasks')) {
            // Block#: Yr/Jjy)mmHX]y^R@fYj.
            if(onlyTasks) {
              // Block#: LFd#A)k1i#tv7du[`:iA
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._processData, 'processDefinitionId', workflowlibraryv37_varmap._processDefId);
              // Block#: DEb*@bhZ(iB+Q*4jdIfX
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._processData, 'processInstanceId', workflowlibraryv37_varmap._processInstId);
            } else {
              // Block#: SP]WIS;PVMZed}w;E,%l
              workflowlibraryv37_varmap._processDefId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._processData, 'processDefinitionId'));
              // Block#: )-n$f=^RE^s%/u/v5CG`
              workflowlibraryv37_varmap._processInstId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._processData, 'processInstanceId'));
            }
            // Block#: {)K1fEF5ZmskQZ(gCUMf
            workflowlibraryv37_varmap._tasks = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._processData, 'tasks'));
            // Block#: -|}FM!p8ouLw27^W5+^X
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap._tasks.length, "NEQ", 0)) {
              // Block#: MMO(%JAu{U;}W~+z,^`r
              workflowlibraryv37_varmap.tempNum = findTask(taskName);
              // Block#: EKSB-:X05^]lT.T}3xo$
              console.log(['SDK  Parse process data using this index    ', workflowlibraryv37_varmap.tempNum, ' to select the task in the list'].join(''));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(['SDK  Parse process data using this index    ', workflowlibraryv37_varmap.tempNum, ' to select the task in the list'].join(''));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: 9n(mzPhQVqIP@tsP9}Q,
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap.tempNum, "GTE", 0)) {
                // Block#: %Y.h?!mLo?*:XJ`?HC(x
                workflowlibraryv37_varmap._task = workflowlibraryv37_varmap._tasks[workflowlibraryv37_varmap.tempNum];
                // Block#: @s+xVTyZu?vH{3/QqK/M
                workflowlibraryv37_varmap._taskId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._task, 'taskId'));
                // Block#: ;lkB|GpVV+eKQ-NXc.[p
                workflowlibraryv37_varmap._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['taskId', 'processVariables'], [workflowlibraryv37_varmap._taskId, []]);
                // Block#: /n)2UnL6A#Yt+#`@=/!I
                console.log(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                  workflowlibraryv37_varmap.debugService.traces.push(['SDK task to be completed  ', 'was just created with  taskId and ', ' process Variables as empty list'].join(''));
                  workflowlibraryv37_varmap.debugService.printLog();
                }
                // Block#: w(1=`TR5)MjF5YS%4//%
                workflowlibraryv37_varmap._processVariabes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._task, 'processVariables'));
                // Block#: dt-R4,=3zf*9/Lf2{s(k
                workflowlibraryv37_varmap._formProperties = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._task, 'formProperties'));
                // Block#: 13nFK!PGr8GVn`j}+K0a
                buildOutcomeAndFieldMappingList().then(response => {;
                });
                // Block#: tlpg10)NnX990p@Dib{h
                buildCurrentInitiator().then(response => {;
                });
                // Block#: lQV-ld|j0(,1c+}iRQK2
                workflowlibraryv37_varmap._formKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._task, 'formKey'));
                // Block#: _xH3pb~tChiPpQO_m7%4
                if(workflowlibraryv37_varmap._formKey != null) {
                  // Block#: o(t:yCA-?1Xwkj5l.`bo
                  if(workflowlibraryv37_varmap._formKey != '') {
                    // Block#: Dcm3,A1%m7(Ld0be,b6q
                    console.log(workflowlibraryv37_varmap._task);
                    if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                      workflowlibraryv37_varmap.debugService.traces.push(workflowlibraryv37_varmap._task);
                      workflowlibraryv37_varmap.debugService.printLog();
                    }
                    // Block#: ~|?3Hc+J|7y0s?}/MYHc
                    workflowlibraryv37_varmap._formData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._task, 'formData'));
                    // Block#: [?w3ImWd`tU6Gy)$L$oG
                    console.log(workflowlibraryv37_varmap._formData);
                    if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                      workflowlibraryv37_varmap.debugService.traces.push(workflowlibraryv37_varmap._formData);
                      workflowlibraryv37_varmap.debugService.printLog();
                    }
                    // Block#: I_.O{No3oop2:d(jf,+^
                    workflowlibraryv37_varmap._formName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._formData, 'name'));
                    // Block#: !K93l5^3744-f%r%4~@e
                    workflowlibraryv37_varmap._formFields = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._formData, 'fields'));
                    // Block#: [%[RlD+;SFjjw_#uXGLy
                    console.log(workflowlibraryv37_varmap._formFields);
                    if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                      workflowlibraryv37_varmap.debugService.traces.push(workflowlibraryv37_varmap._formFields);
                      workflowlibraryv37_varmap.debugService.printLog();
                    }
                    // Block#: 8Bokob5@%F}4F$o9O-Ym
                    workflowlibraryv37_varmap._outcomes = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._formData, 'outcomes'));
                    // Block#: `GuQb`Ket2{nA?)ypK%+
                    workflowlibraryv37_varmap._formId = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._formData, 'id'));
                    // Block#: 3mR|bI,_w:xDPPp!`yWL
                    buildTemplateKey().then(response => {;
                    });
                    // Block#: *(vF8uJk=}.eajVrOY5S
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'formData', com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'key', 'name', 'fields'], [workflowlibraryv37_varmap._formId, workflowlibraryv37_varmap._formKey, workflowlibraryv37_varmap._formName, []]));
                    // Block#: 4ztn~_pPUfT+$CuSOtcZ
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'outcome', com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary());
                    // Block#: SbEu^j+BhYGK*7#yBG;H
                    console.log(['SDK  task to be completed, added ', 'formId formKey and formName:', workflowlibraryv37_varmap._formId, ' ', workflowlibraryv37_varmap._formKey, ' ', workflowlibraryv37_varmap._formName, '  and fields as empty list'].join(''));
                    if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                      workflowlibraryv37_varmap.debugService.traces.push(['SDK  task to be completed, added ', 'formId formKey and formName:', workflowlibraryv37_varmap._formId, ' ', workflowlibraryv37_varmap._formKey, ' ', workflowlibraryv37_varmap._formName, '  and fields as empty list'].join(''));
                      workflowlibraryv37_varmap.debugService.printLog();
                    }
                  }
                }
              } else {
                // Block#: *w]5bGrB$}/{=EwsppeN
                eraseParsedTasks().then(response => {;
                });
              }
            } else {
              // Block#: }cF{ubs(?uKMmX=_xdGE
              eraseParsedTasks().then(response => {;
              });
            }
          } else {
            // Block#: R`K;C%o,{rT^ES.)8EH;
            if(onlyTasks == false) {
              // Block#: E#Cds}sp)(bP`iRL`A@h
              eraseParsedVars().then(response => {;
              });
            } else {
              // Block#: DT_2-W;?,?{zDoe@jp)o
              eraseParsedTasks().then(response => {;
              });
            }
          }
        });
      }
      /**
       * To set the value of a specific field (addressed by its id) in the current form.
       */
      this.setField = setField;

      function setField(id, value) {
        return new Promise(function(resolve, reject) {
          // Block#: TzKGO;g_YjLqhS#0X?XE
          workflowlibraryv37_varmap.tempNum = 0;
          // Block#: Gmr6DFY_$]$Onm?wH=K8
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap.tempNum, "LT", workflowlibraryv37_varmap._formFields.length)) {
            // Block#: ya6:gp/0UhHZ^jZ,n{ws
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._formFields[workflowlibraryv37_varmap.tempNum], 'id'), "EQUAL", id)) {
              // Block#: BbpN{WQk!0#mQr.=Y1L;
              workflowlibraryv37_varmap.tempDict = workflowlibraryv37_varmap._formFields[workflowlibraryv37_varmap.tempNum];
              // Block#: ;,+{i7(;#tUIDzDdf{KF
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict, 'value', value);
              // Block#: lUqh=7+A/C(IshM=g9Rk
              workflowlibraryv37_varmap._formFields[workflowlibraryv37_varmap.tempNum] = workflowlibraryv37_varmap.tempDict;
              // Block#: MAcVF+F1OQH~RUf4yV(d
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._formData, 'fields', workflowlibraryv37_varmap._formFields);
              // Block#: XU[?$x9Vd_{6#8=^H.?5
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._task, 'formData', workflowlibraryv37_varmap._formData);
              // Block#: o6A9$vEvQ$CX`hZNDqc,
              workflowlibraryv37_varmap._tasks[0] = workflowlibraryv37_varmap._task;
              // Block#: 6IEe*mXQ+Hb:/3;b%:n~
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._processData, 'tasks', workflowlibraryv37_varmap._tasks);
              // Block#: $GFA%qdt(C`srr69+Q1@
              console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', workflowlibraryv37_varmap.tempNum].join(''));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  at index ', workflowlibraryv37_varmap.tempNum].join(''));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: uR5[y9z{]{l:~;r1?V9c
              workflowlibraryv37_varmap.tempNum = getIndexOfFieldInTaskToBeCompleted(id);
              // Block#: _E;9Ai[d5z:$/`.c%=~I
              workflowlibraryv37_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'formData'), 'fields'));
              // Block#: xML5Wx(Qp/zE(45t7ol!
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap.tempNum, "EQ", -1)) {
                // Block#: UI[pML9Gr$GM?Q/B9gg8
                com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibraryv37_varmap.tempList, workflowlibraryv37_varmap.tempDict)
                // Block#: of_9V_*h-7[70WY{BH#1
                console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
                if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                  workflowlibraryv37_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  added in task to be completed'].join(''));
                  workflowlibraryv37_varmap.debugService.printLog();
                }
              } else {
                // Block#: jYu#z)/4=AT3N1OT.QDA
                workflowlibraryv37_varmap.tempList[workflowlibraryv37_varmap.tempNum] = workflowlibraryv37_varmap.tempDict;
                // Block#: v0v6MPF7=oRnhD2iJyJj
                console.log(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', workflowlibraryv37_varmap.tempNum].join(''));
                if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                  workflowlibraryv37_varmap.debugService.traces.push(['SDK setField by id: ', id, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(value)), '  in task to be completed  at index ', workflowlibraryv37_varmap.tempNum].join(''));
                  workflowlibraryv37_varmap.debugService.printLog();
                }
              }
              // Block#: v#u]|-I^I$=I%Ra[/shq
              workflowlibraryv37_varmap.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'formData'));
              // Block#: )fj(zVkdRK;R9vGUb5`u
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict1, 'fields', workflowlibraryv37_varmap.tempList);
              // Block#: 4!+*uIn7R;Tlg62eD_}_
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'formData', workflowlibraryv37_varmap.tempDict1);
              // Block#: :u:dF[+1Igp{Y96s#Af1
              workflowlibraryv37_varmap.tempNum = workflowlibraryv37_varmap._formFields.length;
            }
            // Block#: J*42yn66r4)vZ1]G,:{R
            workflowlibraryv37_varmap.tempNum = workflowlibraryv37_varmap.tempNum + 1;
          }
        });
      }
      /**
       * Describe this function...
       */
      this.eraseParsedVars = eraseParsedVars;

      function eraseParsedVars() {
        return new Promise(function(resolve, reject) {
          // Block#: :;k}H}ugLxKk@y`$!0.+
          workflowlibraryv37_varmap._processDefId = '';
          // Block#: 4#+=3[=gnmpKOQe+lS2b
          workflowlibraryv37_varmap._processInstId = '';
          // Block#: @klgC/T(4IX/WgYh24=/
          workflowlibraryv37_varmap._processData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: Tu5:|4f`Q0HDD8OoLA;9
          eraseParsedTasks().then(response => {;
          });
        });
      }
      /**
       * Describe this function...
       */
      this.eraseProcessInstances = eraseProcessInstances;

      function eraseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: rxyAb{L]yataOl5ty$~p
          workflowlibraryv37_varmap._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: j%g1*^M^9htiO1N,!vXP
          workflowlibraryv37_varmap._processInstances = [];
        });
      }
      /**
       * Describe this function...
       */
      this.getFormProperties = getFormProperties;

      function getFormProperties() {
        // Block#: Q9K_jdXSe}PAge/y=Im@
        console.log(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap._formProperties))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getFormProperties number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap._formProperties))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._formProperties;
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldByRef = findFieldByRef;

      function findFieldByRef(UIObjRef) {
        // Block#: E`%o_%L1dGWeMJRKQrxZ
        workflowlibraryv37_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: AmMLWFRjWTe2^Zsu;kDQ
        if(UIObjRef == null) {
          return workflowlibraryv37_varmap.tempDict;
        }
        // Block#: A|bEyO8:0#l8IBVOquC+
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(UIObjRef, "EQUAL", '')) {
          return workflowlibraryv37_varmap.tempDict;
        }
        // Block#: 0-fD_8Yu$rxjLln(~]Z.
        var item_list2 = workflowlibraryv37_varmap._formFields;
        for(var item_index2 in item_list2) {
          item = item_list2[item_index2];
          // Block#: }:t(bf}yQx-BclxW}L/T
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'params')) {
            // Block#: !?53|IPkE6/t6r+R#ADI
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref')) {
              // Block#: U0Zp:/!GtSl{nv+A!ed%
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'params'), 'uiobjref'), "EQUAL", UIObjRef)) {
                // Block#: jO4#NAf@zsC)3Q48by)U
                workflowlibraryv37_varmap.tempDict = item;
              }
            }
          }
        }
        // Block#: Avn^RG~mVyG$vg%D6oud
        console.log(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'name'))].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['findFieldByRef: ', UIObjRef, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'name'))].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFormKey = getFormKey;

      function getFormKey() {
        // Block#: UF+`UV=b`,zevWhv#k+]
        console.log(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._formKey)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getFormKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._formKey)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._formKey;
      }
      /**
       * To start a new instance of the workflow or to resume the last run of it.
       * You must specify
       * - processDefinitionKey will be your Process Identifier (text)
       * - forceStartNewInstance will be set to true if you want to start
       * a new instance or to false if you need to resume an old one.
       */
      this.startNewProcessInstance = startNewProcessInstance;

      function startNewProcessInstance(processDefKey, forceStartNewInstance) {
        return new Promise(function(resolve, reject) {
          // Block#: }q/,[;-@$g=WGfa}:bNG
          workflowlibraryv37_varmap.tempParam = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceStartNewInstance]);
          // Block#: _.a@//oU1{WOm%#o/xf1
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempParam, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['frontEndKey', 'mobileApp', 'string'])]);
          // Block#: zIQs3yCF/NkA(?4/|u-v
          if(workflowlibraryv37_varmap._initiator != null) {
            // Block#: ;/m,htUp.hBP{I/Ez~XO
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibraryv37_varmap._initiator, "EQUAL", '')) {
              // Block#: sPF35ko=|eWU*@pLPx7M
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempParam, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibraryv37_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: @]Ba!E=3tn~Oj+Wf+FOr
          workflowlibraryv37_varmap._processDefKey = processDefKey;
          // Block#: w?kgPk4G/`abd)qr0~)@
          com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
              "forceStartNewInstance": false
            }, workflowlibraryv37_varmap.tempParam), {
              "processDefinitionKey": processDefKey
            }),
            function(process_data) {
              // Block#: 4f$QXZ+E0Aq{G1kdn:BL
              workflowlibraryv37_varmap._processData = process_data;
              // Block#: Ffc^U`Q4:KIi:s8TwD)p
              parseProcessData(false, null).then(response => {;
              });
              // Block#: YNvH8H}e45(z6)yl=%zg
              console.log(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK startNewProcessInstance success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: `XnGAXK_~8#a8^^1Q0pB
              resolve({
                name: "success",
                data: workflowlibraryv37_varmap._processData
              });
            },
            function(error_data) {
              // Block#: QxAXGB2r!RBjr?P,.I/w
              console.log(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK startNewProcessInstance error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: FWJsGFdBn_II9yj_]B1g
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfFieldInTaskToBeCompleted = getIndexOfFieldInTaskToBeCompleted;

      function getIndexOfFieldInTaskToBeCompleted(id) {
        // Block#: 5=t7)tc,=*|1%EX*E:ar
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap._taskToBeCompleted, 'formData')) {
          // Block#: e^MNyo:cL}rgzwQiDh:W
          workflowlibraryv37_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'formData'), 'fields'));
          // Block#: I8*RkEssW?gZN6oC^`fv
          workflowlibraryv37_varmap.tempN2 = 0;
          // Block#: Rmax|B_*1=ZM(jS@if@z
          while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap.tempN2, "LT", workflowlibraryv37_varmap.tempList.length)) {
            // Block#: Vd=`^eeI0qj+J}/%LOK$
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempList[workflowlibraryv37_varmap.tempN2], 'id'), "EQUAL", id)) {
              return workflowlibraryv37_varmap.tempN2;
            }
            // Block#: Z{Jl#bGbdcj];r]_hB?%
            workflowlibraryv37_varmap.tempN2 = workflowlibraryv37_varmap.tempN2 + 1;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.doesContainProcessVariableName = doesContainProcessVariableName;

      function doesContainProcessVariableName(target) {
        // Block#: V|qJmmTDcBN/R;.~0*!x
        if(target == null || com.fc.JavaScriptDistLib.TextLib.textComparison(target, "EQUAL", '')) {
          return false;
        }
        // Block#: ryPt/oi=;{`_=;[IsFSs
        var item_list3 = workflowlibraryv37_varmap._processVariabes;
        for(var item_index3 in item_list3) {
          item = item_list3[item_index3];
          // Block#: /~(YAz$I4GpUepu5HhmT
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", target)) {
            return true;
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.getTemplateKey = getTemplateKey;

      function getTemplateKey() {
        // Block#: +I(?+Ahsb|IJ:@-Qd^qq
        console.log(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._templateKey)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getTemplateKey : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._templateKey)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._templateKey;
      }
      /**
       * Describe this function...
       */
      this.parseProcessInstances = parseProcessInstances;

      function parseProcessInstances() {
        return new Promise(function(resolve, reject) {
          // Block#: A+6!5KzJQo/kx!@}Et:g
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap._processInstances.length, "GT", 0)) {
            // Block#: f5%|B..:cO+qaH/~Zye1
            workflowlibraryv37_varmap._processInstance = workflowlibraryv37_varmap._processInstances[0];
            // Block#: c-;=6HC9M$?A#fcC5)-2
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap._processInstance, 'processInstanceId')) {
              // Block#: e1I,qRai}Ej2NQ_D2mB|
              console.log(['SDK parseProcessInstances num of instances: ', workflowlibraryv37_varmap._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processInstance)))].join(''));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(['SDK parseProcessInstances num of instances: ', workflowlibraryv37_varmap._processInstances.length, '  list of keys in the first instance: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processInstance)))].join(''));
                workflowlibraryv37_varmap.debugService.printLog();
              }
            }
          } else {
            // Block#: ]Hdx)(J/f!Pd:P7lp,Z1
            workflowlibraryv37_varmap._processInstance = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
            // Block#: 13[HIvY12@6=}71jk5/I
            console.log('SDK parseProcessInstances NO instances');
            if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
              workflowlibraryv37_varmap.debugService.traces.push('SDK parseProcessInstances NO instances');
              workflowlibraryv37_varmap.debugService.printLog();
            }
          }
        });
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveProcessInstances = getActiveProcessInstances;

      function getActiveProcessInstances(processDefKey) {
        return new Promise(function(resolve, reject) {
          // Block#: z2@:P7^44=~j)4}58Q-Y
          workflowlibraryv37_varmap._processDefKey = processDefKey;
          // Block#: j*]!vGv^qc[AGgp]`PY8
          workflowlibraryv37_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processDefinitionKey'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._processDefKey))]);
          // Block#: (?q[nPn/3eWB8,eb:c)W
          if(workflowlibraryv37_varmap._initiator != null) {
            // Block#: EwO-oR3l$s-)J!ZV]?OJ
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibraryv37_varmap._initiator, "EQUAL", '')) {
              // Block#: KjohidB/ikkCe{|^PnsL
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibraryv37_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: d4nuXQ:5M8V2yVC2y+cp
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/flowable-task/snap-api/get-process-instances', "POST", JSON.stringify(workflowlibraryv37_varmap.tempDict1),
            function(data) {
              // Block#: ~wZ/RQ.G`)9#C+xdt?lo
              if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(data, 'processInstances')) {
                // Block#: r6o$^E*L7-2jj(nbidL1
                workflowlibraryv37_varmap._processInstances = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'processInstances'));
                // Block#: W@/NoI4WJ=cM9gHZ]Z{1
                console.log('SDK getActiveProcessInstances success');
                if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                  workflowlibraryv37_varmap.debugService.traces.push('SDK getActiveProcessInstances success');
                  workflowlibraryv37_varmap.debugService.printLog();
                }
                // Block#: ^*^ulNcZnM=2C;BIiBe!
                parseProcessInstances().then(response => {;
                });
                // Block#: y/ur{vaAvbQV?t^(uQqL
                resolve({
                  name: "success",
                  data: data
                });
              } else {
                // Block#: gh%$j0MN=-[jO#@E^*nZ
                console.log('SDK getActiveProcessInstances NO processInstances field in dictionary');
                if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                  workflowlibraryv37_varmap.debugService.traces.push('SDK getActiveProcessInstances NO processInstances field in dictionary');
                  workflowlibraryv37_varmap.debugService.printLog();
                }
                // Block#: FKr.fH,-V)8]rYEgqsS2
                resolve({
                  name: "failure",
                  data: data
                });
              }
            },
            function(error) {
              // Block#: Fy|bVWQgN?k:ln$%r/3`
              console.log(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK getActiveProcessInstances failure --  : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(error)));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: R5:`s`FGH$IfPAZQ_IT_
              resolve({
                name: "failure",
                data: error
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.printoutListOfDict = printoutListOfDict;

      function printoutListOfDict(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: aLpZNj6,C{nQZ/8N/?+5
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {
            // Block#: oa!7k8bDPEV(7Yz{Gq2d
            workflowlibraryv37_varmap.tempListKey = [];
            // Block#: JNrWv?.{/%v[C^[I+C$`
            workflowlibraryv37_varmap.tempListKey = (com.fc.JavaScriptDistLib.Dictionary.getKeys(inputListOfObj[0]));
            // Block#: ]aeoYkEpa;]uy2w`G{*{
            var indexpo1_end = inputListOfObj.length;
            var indexpo1_inc = 1;
            if(1 > indexpo1_end) {
              indexpo1_inc = -indexpo1_inc;
            }
            for(indexpo1 = 1; indexpo1_inc >= 0 ? indexpo1 <= indexpo1_end : indexpo1 >= indexpo1_end; indexpo1 += indexpo1_inc) {}
          }
        });
      }
      /**
       * To retrieve all data coming from all the fields in the current form.
       */
      this.getFields = getFields;

      function getFields() {
        // Block#: 2AE2h7pC5GiDeqp.l2RD
        console.log(String('SDK getFields  number of items: ') + String(safeLength(workflowlibraryv37_varmap._formFields)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getFields  number of items: ') + String(safeLength(workflowlibraryv37_varmap._formFields)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._formFields;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMappingNames = getOutcomeAndFieldMappingNames;

      function getOutcomeAndFieldMappingNames() {
        // Block#: }]hO!V5itfl+*{@e+3t;
        workflowlibraryv37_varmap.tempList = [];
        // Block#: =E!_C0Emn$i=4w5BY1U{
        var item_list4 = workflowlibraryv37_varmap._outcomeAndFieldMapping;
        for(var item_index4 in item_list4) {
          item = item_list4[item_index4];
          // Block#: (`rebY,UT0Yp!34(.Ddb
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibraryv37_varmap.tempList, (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'))))
        }
        // Block#: URUoW(x4w51U!V.Ij+ls
        console.log(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap.tempList))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getOutcomeAndFieldMappingNames  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap.tempList))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getRadioButtons = getRadioButtons;

      function getRadioButtons(id) {
        // Block#: kL~]$:SJ`oHep_=_meyI
        workflowlibraryv37_varmap.tempList = [];
        // Block#: O5*Z-q4DqKqp:D5TDq8|
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: ?lZ`A_qD[jdQ2wwoB5)z
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: `7;|(C`F]~KCQv~l|D9k
            workflowlibraryv37_varmap.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: pl9Eqx:ncTQfLCrr~aD2
        console.log(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibraryv37_varmap.tempList)].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getRadioButtons id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibraryv37_varmap.tempList)].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getFormName = getFormName;

      function getFormName() {
        // Block#: aKTnD6jr`A{q{YTZwO7Z
        console.log(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._formName)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getFormName : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._formName)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._formName;
      }
      /**
       * Describe this function...
       */
      this.getOutcomeAndFieldMapping = getOutcomeAndFieldMapping;

      function getOutcomeAndFieldMapping() {
        // Block#: HYJJO3YM}m5PH)dot_;L
        console.log(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap._outcomeAndFieldMapping))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getOutcomeAndFieldMapping  number of items: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(safeLength(workflowlibraryv37_varmap._outcomeAndFieldMapping))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._outcomeAndFieldMapping;
      }
      /**
       * Describe this function...
       */
      this.eraseParsedTasks = eraseParsedTasks;

      function eraseParsedTasks() {
        return new Promise(function(resolve, reject) {
          // Block#: `1)6I?;*46Elnhk!$W-%
          workflowlibraryv37_varmap._tasks = [];
          // Block#: ]erpGI6Z!az:aaD*0IMe
          workflowlibraryv37_varmap._task = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: tsGx{m1uu,{DX]t/$:1A
          workflowlibraryv37_varmap._taskToBeCompleted = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: L$AjHOz3TmMbAy:IH!6(
          workflowlibraryv37_varmap._taskId = '';
          // Block#: E/4U*6@{zzW-2_iiNoAv
          workflowlibraryv37_varmap._processVariabes = [];
          // Block#: yvsCWM*;UKj4XKK6hFA4
          workflowlibraryv37_varmap._formKey = '';
          // Block#: 4DX?v}b)@G|W2MFTa=;M
          workflowlibraryv37_varmap._formName = '';
          // Block#: }n|T|=,dlISig~Y?W-Mx
          workflowlibraryv37_varmap._formProperties = [];
          // Block#: -?Waxyi;sEo1UMZiyL]Y
          workflowlibraryv37_varmap._outcomeAndFieldMapping = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: rE)vDJewW2F{[A7rk$#5
          workflowlibraryv37_varmap._templateType = '';
          // Block#: _is#z`ZULGZl!a_NauGg
          workflowlibraryv37_varmap._templateKey = '';
          // Block#: Ayd96ng%IgXwf28dtSEx
          workflowlibraryv37_varmap._formData = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: pHR%GqwfZG[oqh_(Y0MH
          workflowlibraryv37_varmap._formFields = [];
          // Block#: {YG|c3Fb12Ro}cZ[9gCq
          workflowlibraryv37_varmap._outcomes = [];
          // Block#: |[z2#-caB;%Pd/=[|f31
          workflowlibraryv37_varmap._formId = '';
        });
      }
      /**
       * To retrieve all data coming from a specific
       * field (addressed by its id) in the current form.
       */
      this.getField = getField;

      function getField(id) {
        // Block#: xL!qrflVW3U]^6E[Ka7X
        workflowlibraryv37_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: )sJIHe}gUXt?_9iK+^0?
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibraryv37_varmap.tempDict;
        }
        // Block#: XgNIt?jJ6?T9CsWs3/:U
        var item_list5 = workflowlibraryv37_varmap._formFields;
        for(var item_index5 in item_list5) {
          item = item_list5[item_index5];
          // Block#: !`bO*xQV7m:mj+Q|}a*}
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: %]a_L$pkI|-oIgp;d_^~
            workflowlibraryv37_varmap.tempDict = item;
          }
        }
        // Block#: {qd=G*Ep}cbKLFgQA)m?
        console.log(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'name'))].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getField by id: ', id, ' name: ', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'name'))].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFieldAttribute = getFieldAttribute;

      function getFieldAttribute(id, attribute) {
        // Block#: AE8/N]U,,8buovGLSUT^
        workflowlibraryv37_varmap.tempDict = getField(id);
        // Block#: .Fqp|67m^Ay!]7@~[6)L
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap.tempDict, attribute))) {
          return null;
        }
        // Block#: AMknf3K|MoXZ{H:1R/_Z
        console.log(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, attribute)))].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getFieldAttribute id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, attribute)))].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getCheckBoxFields = getCheckBoxFields;

      function getCheckBoxFields() {
        // Block#: KgYQHyA[{0h%=dh`_w=w
        workflowlibraryv37_varmap.tempList = [];
        // Block#: x=6]f[D:]WW2.Ae_b(LN
        var item_list6 = workflowlibraryv37_varmap._formFields;
        for(var item_index6 in item_list6) {
          item = item_list6[item_index6];
          // Block#: !VHezD%rcRIQgXbY6I#-
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'boolean') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'FormField')
          ) {
            // Block#: W.R+J~2c.47gbb7g=0Kr
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibraryv37_varmap.tempList, item)
          }
        }
        // Block#: H2)WXl^eh~i-@e^Sdj_m
        console.log(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(workflowlibraryv37_varmap.tempList)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getCheckBoxFields   lenght of list is ') + String(safeLength(workflowlibraryv37_varmap.tempList)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.getProcessVariable = getProcessVariable;

      function getProcessVariable(name2) {
        // Block#: ;#jDl#n`yf:1,8;:lnAR
        workflowlibraryv37_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: XltA0Qsjuc@qZk+g@D:~
        if(name2 == null) {
          return workflowlibraryv37_varmap.tempDict;
        }
        // Block#: @(^uxre=m-ru5AROPHfj
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(name2, "EQUAL", '')) {
          return workflowlibraryv37_varmap.tempDict;
        }
        // Block#: .t6K,XR}:7`WLDV*s|bh
        var item_list7 = workflowlibraryv37_varmap._processVariabes;
        for(var item_index7 in item_list7) {
          item = item_list7[item_index7];
          // Block#: M[|u!ld}E3HE4Gq?d?Cb
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", name2)) {
            // Block#: l}su24J5MF;*~WC.!bw!
            workflowlibraryv37_varmap.tempDict = item;
          }
        }
        // Block#: XwO+q]~ZbFl5q];Gp1h{
        console.log(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'value')))].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getProcessVariable with name (', name2, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'value')))].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getFormProperty = getFormProperty;

      function getFormProperty(id) {
        // Block#: P==W8qd^sLKt/U/T!A`O
        workflowlibraryv37_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: NjA`f7iC6R|Nvuuh_zHT
        if(id == null) {
          return workflowlibraryv37_varmap.tempDict;
        }
        // Block#: ZN%M9~+IRToLl{9Tvj;W
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibraryv37_varmap.tempDict;
        }
        // Block#: lzsZLHdLML%ib`^$UT~b
        var item_list8 = workflowlibraryv37_varmap._formProperties;
        for(var item_index8 in item_list8) {
          item = item_list8[item_index8];
          // Block#: /x7cK`HZ;{.hb0lNE]Uo
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: nj@:3IQ:)z(t:K9Ob{T@
            workflowlibraryv37_varmap.tempDict = item;
          }
        }
        // Block#: K8AE]-RKuIY5h7=!{^BM
        console.log(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'value')))].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getFormProperty with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value = ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'value')))].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempDict;
      }
      /**
       * To get the current task if it exists.
       */
      this.getActiveTasks = getActiveTasks;

      function getActiveTasks(processDefKey, processInstanceId, taskName) {
        return new Promise(function(resolve, reject) {
          // Block#: ey(cV_wHzhJ9H6qXD]37
          workflowlibraryv37_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
          // Block#: f12dw.TGq}s(s1yD^/lp
          if(processDefKey != null) {
            // Block#: J6Z=cf|3x%@18q=k5[q)
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processDefKey, "EQUAL", '')) {
              // Block#: HB|OVu=^enpx,j^/]R6s
              workflowlibraryv37_varmap._processDefKey = processDefKey;
              // Block#: rL:v7E@!K_U=|k_~WrLT
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict1, 'processDefinitionKey', workflowlibraryv37_varmap._processDefKey);
            }
          }
          // Block#: 4!R@`C:h_-#N0Z0Rep2}
          if(processInstanceId != null) {
            // Block#: ?t}~z.*O`5RA;}2sJD;I
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(processInstanceId, "EQUAL", '')) {
              // Block#: oCeYVNOV{Zy{9F$2Gj9~
              workflowlibraryv37_varmap._processInstId = processInstanceId;
              // Block#: [vM2Gu]]r2A^|hQ2c$D/
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict1, 'processInstanceId', workflowlibraryv37_varmap._processInstId);
            }
          }
          // Block#: /8$vg`tlvr)I/-qrnq)f
          if(workflowlibraryv37_varmap._initiator != null) {
            // Block#: bGv$z]%iZx_hy^A(mn]$
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibraryv37_varmap._initiator, "EQUAL", '')) {
              // Block#: m,a3ucfMrL!k_U,{_EO0
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict1, 'queryVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibraryv37_varmap._initiator, 'equals', 'string'])]);
            }
          }
          // Block#: /Ow/jfKcIa%l$Qr_T{C~
          com.fc.JavaScriptDistLib.SnapClinical.getActiveTasks(workflowlibraryv37_varmap.tempDict1,
            function(active_tasks) {
              // Block#: Y+XH|qV1|L_]qsg1Qys%
              workflowlibraryv37_varmap._processData = active_tasks;
              // Block#: K.t.2K}]vIh6/Mf#l.3b
              parseProcessData(true, taskName).then(response => {;
              });
              // Block#: /HzjPf1m|C+|jS~?f0;T
              console.log(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK getActiveTasks success -- list of keys received: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap._processData))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: Yc3-G+0JFUnjl+/[0S4u
              resolve({
                name: "success",
                data: active_tasks
              });
            },
            function(error_data) {
              // Block#: ?is]iK53/8^j+r-H;FuH
              console.log(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
              if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                workflowlibraryv37_varmap.debugService.traces.push(String('SDK getActiveTasks error: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.JSON.parseJSONData(error_data))));
                workflowlibraryv37_varmap.debugService.printLog();
              }
              // Block#: 2Uo.6@:,;O.;_YLzMYC5
              resolve({
                name: "failure",
                data: error_data
              });
            });
        });
      }
      /**
       * Describe this function...
       */
      this.getCurrentInitiator = getCurrentInitiator;

      function getCurrentInitiator() {
        // Block#: $9@jRx_-Dx:f$AAw6RA$
        console.log(String('SDK getCurrentInitiator: ') + String(workflowlibraryv37_varmap._currentInitiator));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getCurrentInitiator: ') + String(workflowlibraryv37_varmap._currentInitiator));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._currentInitiator;
      }
      /**
       * Describe this function...
       */
      this.buildTemplateKey = buildTemplateKey;

      function buildTemplateKey() {
        return new Promise(function(resolve, reject) {
          // Block#: [SyH.#_-!8t(}vV+!]^r
          workflowlibraryv37_varmap._templateKey = '';
          // Block#: Ag5u~N%yOV)||l]b0^lU
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap._formData, 'properties')) {
            // Block#: iWd7*23H#sqw+wfT^MFF
            workflowlibraryv37_varmap.tempDict1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._formData, 'properties'));
            // Block#: j@$$-rt-WX$u2}g.j5Ak
            if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap.tempDict1, 'templateKey')) {
              // Block#: GhC~vu/a#D(a~p%@KXYR
              workflowlibraryv37_varmap._templateKey = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict1, 'templateKey'));
            }
          }
        });
      }
      /**
       * To set the value of a specific field (addressed
       * by its UIObjRef) in the current form.
       */
      this.setFieldByRef = setFieldByRef;

      function setFieldByRef(UIObjRef, value) {
        return new Promise(function(resolve, reject) {
          // Block#: PkA[wrI4fzxst0S;MTh/
          setField((com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id')), (com.fc.JavaScriptDistLib.TextLib.convertToText(value))).then(response => {;
          });
          // Block#: zrA8?}+!5{(%@ttT3R:R
          console.log(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(['setFieldByRef: ', UIObjRef, '  value: ', value].join(''));
            workflowlibraryv37_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getIndexOfVarInTaskToBeCompleted = getIndexOfVarInTaskToBeCompleted;

      function getIndexOfVarInTaskToBeCompleted(name2) {
        // Block#: keut5NnNVASw]WxPR@s;
        workflowlibraryv37_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._taskToBeCompleted, 'processVariables'));
        // Block#: 6B7]HI%Y.#Ryu:^p|8Vl
        workflowlibraryv37_varmap.tempN2 = 0;
        // Block#: |oK40tIWA!G)nm0(!#{#
        while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(workflowlibraryv37_varmap.tempN2, "LT", workflowlibraryv37_varmap.tempList.length)) {
          // Block#: ``J|E}D/!f~A@;(OT{jy
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempList[workflowlibraryv37_varmap.tempN2], 'name'), "EQUAL", name2)) {
            return workflowlibraryv37_varmap.tempN2;
          }
          // Block#: +9z_@/4V1Jjk$_#N5B.v
          workflowlibraryv37_varmap.tempN2 = workflowlibraryv37_varmap.tempN2 + 1;
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.setQueryVarInitiator = setQueryVarInitiator;

      function setQueryVarInitiator(inputDict) {
        // Block#: I`C*@9m{sn9c]v}6dnv*
        workflowlibraryv37_varmap.tempDict = inputDict;
        // Block#: [S_s%}=?(;v%vsnm]:{p
        if(workflowlibraryv37_varmap._initiator != null) {
          // Block#: Xw|Dfl+,w{-|0ltSXXli
          if(!com.fc.JavaScriptDistLib.TextLib.textComparison(workflowlibraryv37_varmap._initiator, "EQUAL", '')) {
            // Block#: ;t],Gxq}M}S+%nP90]7;
            if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap.tempDict, 'queryVariables'))) {
              // Block#: nO3?[}L8RY0-9[hmN[+q
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict, 'queryVariables', []);
            }
            // Block#: 2Sp2gT#p/y!IWM5vevAa
            workflowlibraryv37_varmap.tempNum = 0;
            // Block#: Y}SNhFxy2P/ExErGTg2!
            workflowlibraryv37_varmap.tempList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'queryVariables'));
            // Block#: h8r8Dw9qtI7.+.LJkN_+
            var item_list9 = workflowlibraryv37_varmap.tempList;
            for(var item_index9 in item_list9) {
              item = item_list9[item_index9];
              // Block#: JRdHih:eqQ-g?iGN$d_j
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
                // Block#: Ta+xCSU=LZd)lxB3NgjU
                workflowlibraryv37_varmap.tempDict1 = item;
                // Block#: Ih]Yt~lm~L4A$drxq]tF
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict1, 'value', workflowlibraryv37_varmap._initiator);
                // Block#: M6cW/C`;U/q^fS9L[Ej*
                workflowlibraryv37_varmap.tempList[workflowlibraryv37_varmap.tempNum] = workflowlibraryv37_varmap.tempDict1;
                // Block#: b8XTt8?7G*(ol#^n()E_
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict, 'queryVariables', workflowlibraryv37_varmap.tempList);
                // Block#: ekdY(*D4A!*$smi,OF{p
                console.log(['SDK setQueryVarInitiator .. updating initiator value at index: ', workflowlibraryv37_varmap.tempNum, '  value is: ', workflowlibraryv37_varmap._initiator].join(''));
                if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
                  workflowlibraryv37_varmap.debugService.traces.push(['SDK setQueryVarInitiator .. updating initiator value at index: ', workflowlibraryv37_varmap.tempNum, '  value is: ', workflowlibraryv37_varmap._initiator].join(''));
                  workflowlibraryv37_varmap.debugService.printLog();
                }
                // Block#: m?AKo%Adnv9FMq6Dt:7b
                if(true) {
                  return workflowlibraryv37_varmap.tempDict;
                }
              }
              // Block#: aT~mP3uMj`0L^4p[X$8%
              workflowlibraryv37_varmap.tempNum = workflowlibraryv37_varmap.tempNum + 1;
            }
            // Block#: ouS*NN(l-!a8Ff4n!qee
            workflowlibraryv37_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'operation', 'type'], ['initiator', workflowlibraryv37_varmap._initiator, 'equals', 'string']);
            // Block#: -?k/m#jcx/L7BU^]q)=C
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(workflowlibraryv37_varmap.tempList, workflowlibraryv37_varmap.tempDict1)
            // Block#: zwxfx]Snmt,dhQIVd/x$
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(workflowlibraryv37_varmap.tempDict, 'queryVariables', workflowlibraryv37_varmap.tempList);
            // Block#: du/brfY=h5-7zd%K:04|
            console.log(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(workflowlibraryv37_varmap._initiator));
            if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
              workflowlibraryv37_varmap.debugService.traces.push(String('SDK setQueryVarInitiator .. adding initiator value: ') + String(workflowlibraryv37_varmap._initiator));
              workflowlibraryv37_varmap.debugService.printLog();
            }
          }
        }
        return workflowlibraryv37_varmap.tempDict;
      }
      /**
       * To retrieve the name of a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.findFieldNameByRef = findFieldNameByRef;

      function findFieldNameByRef(UIObjRef) {
        // Block#: 82f25)8;O:)08a%$#cU_
        workflowlibraryv37_varmap.tempDict = findFieldByRef(UIObjRef);
        // Block#: dZ6]%)-~$L%6{Mk55nI3
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap.tempDict, 'name')) {
          // Block#: XFP`bPN%G@!O_uD.FJ$A
          workflowlibraryv37_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, 'name'));
        } else {
          // Block#: vu%vGt,6Uk:8L8PK=zm!
          workflowlibraryv37_varmap.tempParam = '';
        }
        // Block#: c~^fO3=s}Uv?m-iM}1%a
        console.log(['findFieldNameByRef: ', UIObjRef, ' name: ', workflowlibraryv37_varmap.tempParam].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['findFieldNameByRef: ', UIObjRef, ' name: ', workflowlibraryv37_varmap.tempParam].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.findTask = findTask;

      function findTask(taskName) {
        // Block#: WTC6-HfO,mUMX(#YO3~2
        if(taskName == null) {
          return 0;
        }
        // Block#: wsgIeYDT,l}jybt9a`;a
        var index_end = workflowlibraryv37_varmap._tasks.length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: 6_Q{yudk/vZ52}y]C],a
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._tasks[index], 'name'), "EQUAL", taskName)) {
            return index;
          }
        }
        return -1;
      }
      /**
       * Describe this function...
       */
      this.getDropDown = getDropDown;

      function getDropDown(id) {
        // Block#: xpHGkF|gd$#}]6DXju!`
        workflowlibraryv37_varmap.tempList = [];
        // Block#: k{zx,_t0ebEM0Van4H6Z
        if(id != null && !com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          // Block#: gfCE?yFUub11fN8:|xka
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(getFieldAttribute(id, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            // Block#: r:H~(ApVAgsg%=0IG@/]
            workflowlibraryv37_varmap.tempList = getFieldAttribute(id, 'options');
          }
        }
        // Block#: vF*EB]#~pvJ}^{~QI{v7
        console.log(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibraryv37_varmap.tempList)].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getDropDown id (', id, ') ', ' .. length of  list = ', safeLength(workflowlibraryv37_varmap.tempList)].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempList;
      }
      /**
       * Describe this function...
       */
      this.buildOutcomeAndFieldMappingList = buildOutcomeAndFieldMappingList;

      function buildOutcomeAndFieldMappingList() {
        return new Promise(function(resolve, reject) {
          // Block#: !zTRIn_acFMrK?Qf3uuD
          workflowlibraryv37_varmap._outcomeAndFieldMapping = [];
          // Block#: s9I,tr88FpWEs8]EaSP}
          workflowlibraryv37_varmap._templateType = '';
          // Block#: -@#eG~U^wUN{4U5{;s%q
          var item_list10 = workflowlibraryv37_varmap._formProperties;
          for(var item_index10 in item_list10) {
            item = item_list10[item_index10];
            // Block#: ?xKhVH~{w,}O*{s)K4lp
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'outcomeAndFieldMapping')) {
              // Block#: ,O7OB-6,?b!frFT$`:Iz
              if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'enum')) {
                // Block#: =udcCLDdQ[hOmcD?;RJQ
                workflowlibraryv37_varmap._outcomeAndFieldMapping = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'enumValues'));
              }
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", 'TemplateType')) {
              // Block#: bfT8Pyt-47nEF{@LPX/*
              workflowlibraryv37_varmap._templateType = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
            }
          }
          // Block#: AOC3_A!HOy:1Vt=_jSkr
          console.log(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(workflowlibraryv37_varmap._outcomeAndFieldMapping)));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(String('SDK buildOutcomeAndFieldMapping - num of items: ') + String(safeLength(workflowlibraryv37_varmap._outcomeAndFieldMapping)));
            workflowlibraryv37_varmap.debugService.printLog();
          }
          // Block#: IqKY2LntscRsSm9L0vt,
          console.log(String('SDK buildTemplateType: ') + String(workflowlibraryv37_varmap._templateType));
          if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
            workflowlibraryv37_varmap.debugService.traces.push(String('SDK buildTemplateType: ') + String(workflowlibraryv37_varmap._templateType));
            workflowlibraryv37_varmap.debugService.printLog();
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getFieldValue = getFieldValue;

      function getFieldValue(id) {
        // Block#: s6FqVVq=NZ#ucQQU3:zG
        workflowlibraryv37_varmap.tempParam = getFieldAttribute(id, 'value');
        // Block#: $6dm%.yz`%+?YAu@Tl]~
        console.log(['SDK getFieldValue id (', id, ') ', ' .. value = ', workflowlibraryv37_varmap.tempParam].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getFieldValue id (', id, ') ', ' .. value = ', workflowlibraryv37_varmap.tempParam].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getFieldLabel = getFieldLabel;

      function getFieldLabel(id) {
        // Block#: p|}E|`~~yY28XRG_.w6w
        workflowlibraryv37_varmap.tempParam = getFieldAttribute(id, 'name');
        // Block#: Tn]~AZrqwG*RLVYIvt%b
        console.log(['SDK getFieldName id (', id, ') ', ' .. value = ', workflowlibraryv37_varmap.tempParam].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getFieldName id (', id, ') ', ' .. value = ', workflowlibraryv37_varmap.tempParam].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * To retrieve the value of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldValueByRef = findFieldValueByRef;

      function findFieldValueByRef(UIObjRef) {
        // Block#: -pa`9ks9V+mL|=~ak=fe
        workflowlibraryv37_varmap.tempParam = findFieldByRef(UIObjRef);
        // Block#: ;WKPLteeJU.q2Aljj_Dy
        if(!(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempParam)).length) {
          return '';
        }
        // Block#: VZl5#iC7FW`s7g:hqcj(
        workflowlibraryv37_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempParam, 'value'));
        // Block#: cg,DLy$PagPQ6zV#fP1$
        console.log(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap.tempParam))].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['findFieldValueByRef: ', UIObjRef, ' value: ', (com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap.tempParam))].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.ShowProcessInfo = ShowProcessInfo;

      function ShowProcessInfo() {
        return new Promise(function(resolve, reject) {
        });
      }
      /**
       * Describe this function...
       */
      this.printoutListOfStrings = printoutListOfStrings;

      function printoutListOfStrings(inputListOfObj) {
        return new Promise(function(resolve, reject) {
          // Block#: ?xT;8-,qmT0}VudEmXag
          if(!!inputListOfObj.length && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {}
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessVariableValue = getProcessVariableValue;

      function getProcessVariableValue(name2) {
        // Block#: $A+E]85X)9yix.DB)Pe)
        workflowlibraryv37_varmap.tempDict1 = getProcessVariable(name2);
        // Block#: S{VIIeX4HqAy{5dPron=
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap.tempDict1, 'value')) {
          return null;
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict1, 'value');
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyAttribute = getFormPropertyAttribute;

      function getFormPropertyAttribute(id, attribute) {
        // Block#: $Qypr}D:dDnS34}Rv^qh
        workflowlibraryv37_varmap.tempDict = getFormProperty(id);
        // Block#: PWK?Ib/jr67@[`=+[bgs
        if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(workflowlibraryv37_varmap.tempDict, attribute))) {
          return null;
        }
        // Block#: Q^9U[?RhR^]#/6M@7BHx
        console.log(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, attribute)))].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getFormPropertyAttribute with id (', id, ') ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))), ' .. value of attribute ', attribute, ' value ', (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, attribute)))].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap.tempDict, attribute);
      }
      /**
       * Describe this function...
       */
      this.getOutcomeName = getOutcomeName;

      function getOutcomeName(id) {
        // Block#: ^ymSIrW:$f28p@6[SI@U
        workflowlibraryv37_varmap.tempParam = '';
        // Block#: ~{)~$)O/yh)O{Y%5CQ#X
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return '';
        }
        // Block#: 4lvrEM]*#hq^O2]:Qm=:
        var item_list11 = workflowlibraryv37_varmap._outcomes;
        for(var item_index11 in item_list11) {
          item = item_list11[item_index11];
          // Block#: TEa|F|P8n,!X.Ll;G_}3
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: 76Faw_b`B(+D/HE5v^H4
            workflowlibraryv37_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'));
          }
        }
        // Block#: 37=4oHW1KOquM92@|%S/
        console.log(String('SDK getOutcomeName by id : ') + String(workflowlibraryv37_varmap.tempParam));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getOutcomeName by id : ') + String(workflowlibraryv37_varmap.tempParam));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.doesExistOutcome = doesExistOutcome;

      function doesExistOutcome(id) {
        // Block#: Hmb|}(N-?u9Vam.DojFf
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: WAad5%@cF]|J0Nu-+d=c
        var item_list12 = workflowlibraryv37_varmap._outcomes;
        for(var item_index12 in item_list12) {
          item = item_list12[item_index12];
          // Block#: LGQ-c:Ry^kl]E9.SdcSR
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            return true;
          }
        }
        return false;
      }
      /**
       * To retrieve the id of a specific field
       * (addressed by its UIObjRef) in the current form
       */
      this.findFieldIDByRef = findFieldIDByRef;

      function findFieldIDByRef(UIObjRef) {
        // Block#: ~g_kuTs~[S)9RPjA6vB5
        workflowlibraryv37_varmap.tempParam = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(findFieldByRef(UIObjRef), 'id'));
        // Block#: CKAAyvw./=$iA+pq.L9n
        console.log(['findFieldIdByRef: ', UIObjRef, ' ID: ', workflowlibraryv37_varmap.tempParam].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['findFieldIdByRef: ', UIObjRef, ' ID: ', workflowlibraryv37_varmap.tempParam].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyName = getFormPropertyName;

      function getFormPropertyName(id) {
        // Block#: J*-rAsH1kZb=7ib9-N-t
        workflowlibraryv37_varmap.tempParam = getFormPropertyAttribute(id, 'name');
        // Block#: -o{Mn9!*Tgzb4jE5Ifi5
        console.log(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', workflowlibraryv37_varmap.tempParam].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getFormPropertyName with id (', id, ') ', ' .. name = ', workflowlibraryv37_varmap.tempParam].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstRadioButtonField = getIdofFirstRadioButtonField;

      function getIdofFirstRadioButtonField() {
        // Block#: c;r0yn;{i`q,NI`93T2{
        var item_list13 = workflowlibraryv37_varmap._formFields;
        for(var item_index13 in item_list13) {
          item = item_list13[item_index13];
          // Block#: fe0oj*!QQ5WMS14rD3Rk
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'radio-buttons') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.safeLength = safeLength;

      function safeLength(inputList) {
        // Block#: GSO$$)x|O|7tr+uS(*0v
        if(!inputList.length) {
          return 0;
        }
        return inputList.length;
      }
      /**
       * Describe this function...
       */
      this.buildVar = buildVar;

      function buildVar(name2, value) {
        // Block#: w)Yy*@v@2W+!Xz%A9Iko
        workflowlibraryv37_varmap.tempDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], [name2, value]);
        // Block#: p~+:u^kv.$ZD!j]b4eXU
        console.log(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK buildVar: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getKeys(workflowlibraryv37_varmap.tempDict))));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempDict;
      }
      /**
       * Describe this function...
       */
      this.getOutcome = getOutcome;

      function getOutcome(id) {
        // Block#: z_OwH@Vp!,|V.m?-5rR7
        workflowlibraryv37_varmap.tempDict1 = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: aeK}#_56a0FW1;FlI/RA
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return workflowlibraryv37_varmap.tempDict1;
        }
        // Block#: @-q#8vSu_;2Fy2N.F])N
        var item_list14 = workflowlibraryv37_varmap._outcomes;
        for(var item_index14 in item_list14) {
          item = item_list14[item_index14];
          // Block#: n6w*.;8h*VC,sx]BPLCz
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
            // Block#: =c~Nd@B.[P1(9iv[U:0C
            workflowlibraryv37_varmap.tempDict1 = item;
          }
        }
        // Block#: Q:N_kRnFcj/3%}|gFkR,
        console.log(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap.tempDict1)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getOutcome by id : ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap.tempDict1)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempDict1;
      }
      /**
       * To retrieve all data coming from a specific field
       * (addressed by its UIObjRef) in the current form.
       */
      this.doesExistField = doesExistField;

      function doesExistField(id) {
        // Block#: G72*ZfWyTVTTF*YW+;u3
        if(id == null || com.fc.JavaScriptDistLib.TextLib.textComparison(id, "EQUAL", '')) {
          return false;
        }
        // Block#: $8p*?d{P+-m|/n`#OWXv
        var item_list15 = workflowlibraryv37_varmap._formFields;
        for(var item_index15 in item_list15) {
          item = item_list15[item_index15];
          // Block#: imU3?.3TfXu=qUOz[4Vg
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(item, 'id')) {
            // Block#: O{V`?*@eRf||XBK]`Z2J
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id'), "EQUAL", id)) {
              return true;
            }
            // Block#: u]nwgfv?0gzJ4|QKa8ba
            console.log(String('SDK  doesExistField (true) by ID ') + String(id));
            if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
              workflowlibraryv37_varmap.debugService.traces.push(String('SDK  doesExistField (true) by ID ') + String(id));
              workflowlibraryv37_varmap.debugService.printLog();
            }
          }
        }
        return false;
      }
      /**
       * Describe this function...
       */
      this.AppendInfo = AppendInfo;

      function AppendInfo(name2, value) {
        return new Promise(function(resolve, reject) {
        });
      }
      /**
       * To retrieve the template type you have associated
       * to the current task. This is a specific value set
       * in the form properties section as TemplateType.
       */
      this.getTemplateType = getTemplateType;

      function getTemplateType() {
        // Block#: i[TClUtvG0?cy,~h2[3n
        console.log(String('SDK getTemplateType: ') + String(workflowlibraryv37_varmap._templateType));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getTemplateType: ') + String(workflowlibraryv37_varmap._templateType));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._templateType;
      }
      /**
       * Describe this function...
       */
      this.getFormPropertyValue = getFormPropertyValue;

      function getFormPropertyValue(id) {
        // Block#: DH;d_..2@hQzhZWl3Qay
        workflowlibraryv37_varmap.tempParam = getFormPropertyAttribute(id, 'value');
        // Block#: P%{C|4nOh(7dS)67dHv(
        console.log(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', workflowlibraryv37_varmap.tempParam].join(''));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(['SDK getFormPropertyValue with id (', id, ') ', ' .. value = ', workflowlibraryv37_varmap.tempParam].join(''));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap.tempParam;
      }
      /**
       * Describe this function...
       */
      this.getIdofFirstDropDownField = getIdofFirstDropDownField;

      function getIdofFirstDropDownField() {
        // Block#: (6HA`fN(9Sz3W(Lz8Ocd
        var item_list16 = workflowlibraryv37_varmap._formFields;
        for(var item_index16 in item_list16) {
          item = item_list16[item_index16];
          // Block#: pl5}DXcGGD{yp*vWMxKW
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'type'), "EQUAL", 'dropdown') &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'fieldType'), "EQUAL", 'OptionFormField')
          ) {
            return com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id');
          }
        }
        return '';
      }
      /**
       * Describe this function...
       */
      this.buildCurrentInitiator = buildCurrentInitiator;

      function buildCurrentInitiator() {
        return new Promise(function(resolve, reject) {
          // Block#: #dx0sJ3OcN9E!dSn,@w}
          workflowlibraryv37_varmap._currentInitiator = '';
          // Block#: jHrhOwD8VquA{dXlLdJ*
          workflowlibraryv37_varmap.tempList1 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37_varmap._task, 'processVariables'));
          // Block#: TyeWO=ugu[|]vH}2ZvkP
          var item_list17 = workflowlibraryv37_varmap.tempList1;
          for(var item_index17 in item_list17) {
            item = item_list17[item_index17];
            // Block#: 9?C74H7ixEt$W%90ZT~;
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'initiator')) {
              // Block#: yI~y8%,|JLTZifJ/^dAU
              workflowlibraryv37_varmap._currentInitiator = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'));
            }
          }
        });
      }
      /**
       * Describe this function...
       */
      this.getProcessInstanceId = getProcessInstanceId;

      function getProcessInstanceId() {
        // Block#: q=)Sb$0J9f2h/7C~Wi}#
        console.log(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._processInstId)));
        if(workflowlibraryv37_varmap.debugService && workflowlibraryv37_varmap.debugService.active) {
          workflowlibraryv37_varmap.debugService.traces.push(String('SDK getProcessInstanceId value is: ') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37_varmap._processInstId)));
          workflowlibraryv37_varmap.debugService.printLog();
        }
        return workflowlibraryv37_varmap._processInstId;
      }
    };
    var workflowlibraryv37 = new WorkflowLibraryV37();
    eq5d5llib_varmap.translations = null;
    eq5d5llib_varmap.nextProcessAfterCompletion = null;
    eq5d5llib_varmap.firstProcessAtLogIn = null;
    eq5d5llib_varmap.checkBoxList = null;
    eq5d5llib_varmap.userEnrolledKey = null;
    eq5d5llib_varmap.lastOptionValue = null;
    eq5d5llib_varmap.userPassword = null;
    eq5d5llib_varmap.buttonClicked = null;
    eq5d5llib_varmap.isLoggingIn = null;
    eq5d5llib_varmap.alarmScheduled = null;
    eq5d5llib_varmap.currentScreen = null;
    eq5d5llib_varmap.signingURL = null;
    eq5d5llib_varmap.ActiveSurveys = null;
    eq5d5llib_varmap.EQ5DCredentials = null;
    eq5d5llib_varmap.hasClick = null;
    eq5d5llib_varmap.SEQ5D5LFirstDisplay = null;
    eq5d5llib_varmap.currentProperty = null;
    eq5d5llib_varmap.userChoice = null;
    eq5d5llib_varmap.SEQE5D5LHMFirstDisplay = null;
    eq5d5llib_varmap.userMeasurement = null;
    eq5d5llib_varmap.translatedText = null;
    eq5d5llib_varmap.currentLanguage = null;
    eq5d5llib_varmap.EQ5DLocalTranslations = null;
    eq5d5llib_varmap.EQ5DTranslations = null;
    eq5d5llib_varmap.tempLanguage = null;
    eq5d5llib_varmap.returnError = null;
    eq5d5llib_varmap.tempDialogTitle = null;
    eq5d5llib_varmap.tempDialogMessage = null;
    eq5d5llib_varmap.dialog = null;
    eq5d5llib_varmap.tempDialogButton = null;
    eq5d5llib_varmap.tempDialogCancelButton = null;
    eq5d5llib_varmap.currentTemplate = null;
    eq5d5llib_varmap.SEQ5D5LSplashFirstDisplay = null;
    eq5d5llib_varmap.userID = null;
    eq5d5llib_varmap.pErrorData = null;
    eq5d5llib_varmap.error = null;
    eq5d5llib_varmap.initialized = null;
    eq5d5llib_varmap.checkBoxElement = null;
    eq5d5llib_varmap.LVcells = null;
    eq5d5llib_varmap.localField = null;
    eq5d5llib_varmap.localOptions = null;
    eq5d5llib_varmap.localVar1 = null;
    eq5d5llib_varmap.checkBoxValue = null;
    eq5d5llib_varmap.hasMeasurement = null;
    eq5d5llib_varmap.EQ5D5LHeightTotal1 = null;
    /**
     * Describe this function...
     */
    this.downloadTranslations = downloadTranslations;

    function downloadTranslations() {
      return new Promise(function(resolve, reject) {
        // Block#: u)4jVXR86iB}3MpuUoe#
        com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://develop.snapclinical.net:8443","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":true,"frontEndKey":"mobileApp"}}');
        com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure('forgetfulUser', '4mn3s14C!', 'forgetfulUser', "mobileApp", "https://develop.snapclinical.net:8443");
        // Block#: qC|lWzQ@l#F=V0]dku)Z
        console.log('getTranslations');
        if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
          eq5d5llib_varmap.debugService.traces.push('getTranslations');
          eq5d5llib_varmap.debugService.printLog();
        }
        // Block#: MT~z*{iT,ac:5X88k~`k
        com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/translations', "GET", JSON.stringify(),
          function(data) {
            // Block#: !*J;k_-B,hc,;B(j3,x0
            eq5d5llib_varmap.translations = data;
            // Block#: U3zjwCEmpm5wz4~;FaFH
            console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(data));
            if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
              eq5d5llib_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(data));
              eq5d5llib_varmap.debugService.printLog();
            }
            // Block#: ub9.P@r~^%em9Gl)i9G7
            resolve({
              name: "then",
              data: data
            });
          },
          function(error) {
            // Block#: hnv|f$]vog+=H[3/|ckA
            console.log('1error');
            if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
              eq5d5llib_varmap.debugService.traces.push('1error');
              eq5d5llib_varmap.debugService.printLog();
            }
            // Block#: |3je`C$Vh`Ml?NY60jru
            console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(error));
            if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
              eq5d5llib_varmap.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(error));
              eq5d5llib_varmap.debugService.printLog();
            }
          });
      });
    }
    /**
     * Describe this function...
     */
    this.initializeEQ5D5LlibV5 = initializeEQ5D5LlibV5;

    function initializeEQ5D5LlibV5() {
      return new Promise(function(resolve, reject) {
        // Block#: uE1FjbH{=o8W)30_A8(r
        eq5d5llib_varmap.nextProcessAfterCompletion = '';
        // Block#: BUfwO#NYXwrN}Bi=?V!i
        eq5d5llib_varmap.firstProcessAtLogIn = 'logInDemoV12';
        // Block#: |g:0JG/+euG@kitS?s|~
        eq5d5llib_varmap.checkBoxList = [];
        // Block#: .?m(m|m_zeo~qi/`ZpOG
        eq5d5llib_varmap.userEnrolledKey = 'userEnrolled';
        // Block#: 1fsnUrOLu2Vg83@0%tb+
        eq5d5llib_varmap.lastOptionValue = null;
        // Block#: :ljf*K{nH@iY@2!-c^(n
        eq5d5llib_varmap.userPassword = '';
        // Block#: 8G3,E:9NQ3bTwyD7`Rt}
        eq5d5llib_varmap.buttonClicked = false;
        // Block#: s5@7_wn;:]eQnP.;^|4f
        eq5d5llib_varmap.isLoggingIn = false;
        // Block#: ?LZ)+rsVdS(.JV(*E*+Z
        eq5d5llib_varmap.alarmScheduled = false;
        // Block#: MHGaf/uPA,=kZ]!(Dn3q
        eq5d5llib_varmap.currentScreen = '';
        // Block#: P+CrKYbGjdQ105[TJAhS
        eq5d5llib_varmap.signingURL = '';
        // Block#: @9Vf`mM%gk!h8w(l{gY*
        eq5d5llib_varmap.ActiveSurveys = [];
      });
    }
    /**
     * Describe this function...
     */
    this.setEQ5DCredentials = setEQ5DCredentials;

    function setEQ5DCredentials(credentials) {
      return new Promise(function(resolve, reject) {
        // Block#: K8oC@ahQz:iL*`~Zk4qO
        eq5d5llib_varmap.EQ5DCredentials = credentials;
      });
    }
    /**
     * Describe this function...
     */
    this.startEQ5D5L = startEQ5D5L;

    function startEQ5D5L() {
      return new Promise(function(resolve, reject) {
        // Block#: ;~g#34w2XHh6nkohaKml
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="EQ5D5LDemoV12Screen"]');
        showScreen.show();
        history.pushState({
          'view': 'EQ5D5LDemoV12Screen'
        }, 'EQ5D5LDemoV12Screen', 'EQ5D5LDemoV12Screen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
    /**
     * Describe this function...
     */
    this.initialize_LibScreenEQ5D5LSplash = initialize_LibScreenEQ5D5LSplash;

    function initialize_LibScreenEQ5D5LSplash() {
      return new Promise(function(resolve, reject) {
        // Block#: #tqu)l#!zp^|z?BmcCz%
        eq5d5llib_varmap.currentScreen = 'SEQ5D5LSplash';
        // Block#: 1)?KKU8sO~=83Lp(dh(V
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LSplashTitle", (EQ5DTranslate('Health Questionnaire English version for the UK'))); // Block#: *z2PtB0gbd7y)kuX-.H}
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LSplashNext", (EQ5DTranslate('Next'))); // Block#: ey89M_Z!Ggo:,IO_If5=
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LSplashPrevious", (EQ5DTranslate('Previous'))); // Block#: 4`NdbV`OkGpvRvvrNj#R
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LSplashFooter", (EQ5DTranslate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation')));
      });
    }
    /**
     * Describe this function...
     */
    this.initialize_LibScreenEQ5D5L = initialize_LibScreenEQ5D5L;

    function initialize_LibScreenEQ5D5L() {
      return new Promise(function(resolve, reject) {
        // Block#: 9Tv`c~ml(Fjyiom]:$N4
        eq5d5llib_varmap.hasClick = -1;
        // Block#: n;|EX,l_G`4+vl{me_:@
        eq5d5llib_varmap.currentScreen = 'SEQ5D5L';
        // Block#: FPIA0h{5}a~hXD~]uMJh
        if(eq5d5llib_varmap.SEQ5D5LFirstDisplay) {
          // Block#: tk_Smhatb.?s_ELPEQEh
          eq5d5llib_varmap.SEQ5D5LFirstDisplay = false;
          // Block#: }3{(5E+d0e87q,DEWf0p
          SEQ5D5LUpdateScreen().then(response => {;
          });
        }
        // Imported from Lib: WorkflowLibraryV23
        // Block#: uUWGREVNIA7xR6Js-d$*
        eq5d5llib_varmap.currentProperty = workflowlibraryv37.getFormProperty('title');
        // Imported from Lib: WorkflowLibraryV23
        // Block#: S-Xf1A0X1S}l?3(RqK@;
        if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.TextLib.convertToText(eq5d5llib_varmap.currentProperty), 'Instructions')) {
          // Block#: pGqZRMnT!I;:az8E{!rR
          $('[obj-name="EQ5D5LListView"]').hide();
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.convertToText(workflowlibraryv37.getFormPropertyAttribute('title', 'name')), "EQUAL", 'Activities')) {
          // Block#: DsmD01qh+HZ99YOpUVOt
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getEQ5DLanguageCode(), "EQUAL", 'es-US')) {
            // Block#: llp.I~OK-gD?5?cLDoEU
            com.fc.JavaScriptDistLib.ListView.setProperty["y"]("EQ5D5LListView", 190); // Block#: vdGZ1haDY9W#;j{$4;Xm
            com.fc.JavaScriptDistLib.ListView.setProperty["height"]("EQ5D5LListView", ((com.fc.JavaScriptDistLib.Screen.getProperty["height"]("LibScreenEQ5D5L") - 190) - 125));
          } else {
            // Block#: i;+7(B#bBE[3Svdx0@X!
            com.fc.JavaScriptDistLib.ListView.setProperty["y"]("EQ5D5LListView", 170); // Block#: jO~NYfRth#szN+)lN?U)
            com.fc.JavaScriptDistLib.ListView.setProperty["height"]("EQ5D5LListView", ((com.fc.JavaScriptDistLib.Screen.getProperty["height"]("LibScreenEQ5D5L") - 170) - 125));
          }
        } else {
          // Block#: $OuA]w4pEZB(_COfzFfM
          com.fc.JavaScriptDistLib.ListView.setProperty["y"]("EQ5D5LListView", 120); // Block#: ru+RTY9R(w??J={$!5f]
          com.fc.JavaScriptDistLib.ListView.setProperty["height"]("EQ5D5LListView", ((com.fc.JavaScriptDistLib.Screen.getProperty["height"]("LibScreenEQ5D5L") - 120) - 125)); // Block#: r[h))nPPqM}dHRGP9xVV
          $('[obj-name="EQ5D5LListView"]').show();
        }
        // Block#: i$,6;v_7o$F0~%L;WbAR
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LFooter", (EQ5DTranslate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation'))); // Block#: $@*^(*}N;q!Mu]R$t]=k
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('EQ5D5LListView');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('EQ5D5LListView');
        on_listview_length_configured_EQ5D5LListView();
        // Block#: ~B!{,c,}x^(pER!1qYq1
        eq5d5llib_varmap.userChoice = '';
        // Block#: b!B-_RO+0GPLLQIIj5iW
        $('[obj-name="CEQ5D5LOverlay"]').hide();
      });
    }
    /**
     * Describe this function...
     */
    this.onEQ5D5L_completed = onEQ5D5L_completed;

    function onEQ5D5L_completed(exitCode, nextProcess) {
      return new Promise(function(resolve, reject) {
        com.fc.CustomEventListeners["onEQ5D5L_completed"] && com.fc.CustomEventListeners["onEQ5D5L_completed"](exitCode, nextProcess);
      });
    }
    /**
     * Describe this function...
     */
    this.initialize_LibScreenEQ5D5LHealthMeasure = initialize_LibScreenEQ5D5LHealthMeasure;

    function initialize_LibScreenEQ5D5LHealthMeasure() {
      return new Promise(function(resolve, reject) {
        // Block#: ZbZjE^4%C^N6O/,?t5K_
        if(eq5d5llib_varmap.SEQE5D5LHMFirstDisplay) {
          // Block#: WczNg;bNyDpZd/6OLS`8
          eq5d5llib_varmap.SEQE5D5LHMFirstDisplay = false;
        }
        // Block#: NR}X/nd=kZijzV?a5HIx
        eq5d5llib_varmap.currentScreen = 'SEQ5D5LHealthMeasure';
        // Block#: 1Wa~2L)6*fp]/)76Kia6
        eq5d5llib_varmap.userMeasurement = '';
        // Block#: 5^/=xRXhQMoGbcNhk#0^
        $('[obj-name= "IEQ5D5LHMScale"]').unbind('touchmove mousemove touchstart mousedown');
        $('[obj-name= "IEQ5D5LHMScale"]').bind('touchmove mousemove touchstart mousedown', on_Image_IEQ5D5LHMScale_TOUCHMOVE); // Block#: R5dqZi6}xNDz~V=Nk9qn
        $('[obj-name= "IEQ5D5LHMMarker"]').unbind('touchmove mousemove touchstart mousedown');
        $('[obj-name= "IEQ5D5LHMMarker"]').bind('touchmove mousemove touchstart mousedown', on_Image_IEQ5D5LHMMarker_TOUCHMOVE); // Block#: $Q9qmA|8BnFb{)}LMITQ
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBoxValue", ''); // Block#: iMShIOE:g8.[=!}Ss?Lh
        $('[obj-name="CEQ5D5LHMOverlay"]').hide(); // Block#: #6O`Hiv.EC+!qgBPu5ar
        healthMeasureScaleOnInit().then(response => {;
        });
        // Block#: _bVSX_`s3)kKVe=b4AMY
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText", (EQ5DTranslate('Please tap on the scale to indicate how your health is TODAY.'))); // Block#: QZ_wL6:x*pN^Qos$zN${
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBox", (EQ5DTranslate('YOUR<br>HEALTH<br>TODAY'))); // Block#: y2Cq;qbt0tw.E1%_cRf^
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText2", (EQ5DTranslate('The best health you can imagine'))); // Block#: {mQ4[m]4U})vaZ7ARL!$
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMText3", (EQ5DTranslate('The worst health you can imagine'))); // Imported from Lib: WorkflowLibraryV29
        // Block#: H+Wp7cB2dX[:Zx,R7SID
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LHMPrevious", (EQ5DTranslate(workflowlibraryv37.getOutcomeName('previous')))); // Imported from Lib: WorkflowLibraryV29
        // Block#: 8#=Jd2{Z@r%_aRfFY/[u
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LHMNext", (EQ5DTranslate(workflowlibraryv37.getOutcomeName('next')))); // Block#: 4-)EPxbI1QLxt!:IWhd*
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMFooter", (EQ5DTranslate('©&nbsp;EuroQol&nbsp;Research&nbsp;Foundation.&nbsp;EQ-5D™&nbsp;is&nbsp;a&nbsp;trade&nbsp;mark&nbsp;<br />of&nbsp;the&nbsp;EuroQol&nbsp;Research&nbsp;Foundation')));
      });
    }
    /**
     * Describe this function...
     */
    this.EQ5DTranslate = EQ5DTranslate;

    function EQ5DTranslate(EQ5DText) {
      // Block#: MisjWv1]nB((V`Fdw`4-
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(eq5d5llib_varmap.currentLanguage, "EQUAL", 'en-US')) {
        return EQ5DText;
      }
      // Block#: wr3f:@TUmDXP$l=B-P7)
      eq5d5llib_varmap.translatedText = '';
      // Block#: @5N9$%d-v$ACJvPQLwOT
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(eq5d5llib_varmap.EQ5DLocalTranslations, EQ5DText)) {
        // Block#: 1k;=yQ$7EARq7u^wqKC;
        eq5d5llib_varmap.translatedText = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.EQ5DLocalTranslations, EQ5DText), eq5d5llib_varmap.currentLanguage));
        // Block#: (J*}BF^OF5y2lJQCHED|
        if(isValidString(eq5d5llib_varmap.translatedText)) {
          return eq5d5llib_varmap.translatedText;
        }
      }
      // Block#: n`$8jfb3cZ2ty|zT5nBF
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(eq5d5llib_varmap.EQ5DTranslations, EQ5DText)) {
        // Block#: kE/4SRPqYI!5TFj!%0^b
        eq5d5llib_varmap.translatedText = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.EQ5DTranslations, EQ5DText), eq5d5llib_varmap.currentLanguage));
        // Block#: xD2[LC5uSj%bbWX7Qe;.
        if(isValidString(eq5d5llib_varmap.translatedText)) {
          return eq5d5llib_varmap.translatedText;
        }
      }
      return EQ5DText;
    }
    /**
     * Describe this function...
     */
    this.setEQ5DLanguageCode = setEQ5DLanguageCode;

    function setEQ5DLanguageCode(langCode) {
      return new Promise(function(resolve, reject) {
        // Block#: Q=Km)%4%p3l^L~tR9O}R
        eq5d5llib_varmap.currentLanguage = (com.fc.JavaScriptDistLib.TextLib.convertToText(langCode));
        // Block#: |BwoEz}l#L*D7|P3rV;3
        com.fc.JavaScriptDistLib.Storage.add('language', com.fc.JavaScriptDistLib.TextLib.convertToText(langCode))
      });
    }
    /**
     * Describe this function...
     */
    this.getEQ5DLanguageCode = getEQ5DLanguageCode;

    function getEQ5DLanguageCode() {
      return eq5d5llib_varmap.currentLanguage;
    }
    /**
     * Describe this function...
     */
    this.refreshLanguage = refreshLanguage;

    function refreshLanguage() {
      return new Promise(function(resolve, reject) {
        // Block#: 3yH!tCcF?,$waGoi[FUv
        eq5d5llib_varmap.tempLanguage = (com.fc.JavaScriptDistLib.Storage.getValue('language'));
        // Block#: YMnS9Q@R7v!!p_-KMvk2
        if(eq5d5llib_varmap.tempLanguage != null) {
          // Block#: B[I5V@fBx!nD+EZ5-EWD
          eq5d5llib_varmap.currentLanguage = eq5d5llib_varmap.tempLanguage;
        } else {
          // Block#: 6}_T$8tfmw5cVZgwM*kn
          eq5d5llib_varmap.currentLanguage = 'en-US';
        }
      });
    }
    /**
     * Describe this function...
     */
    this.isValidString = isValidString;

    function isValidString(string) {
      // Block#: S=H~0=:}uCFLMAki)?Fk
      if(com.fc.JavaScriptDistLib.TextLib.isText(string) &&
        com.fc.JavaScriptDistLib.MathLibrary.mathCompare(string.length, "GT", 0)
      ) {
        return true;
      }
      return false;
    }
    /**
     * Describe this function...
     */
    this.EQ5DLoadTranslations = EQ5DLoadTranslations;

    function EQ5DLoadTranslations(translations) {
      return new Promise(function(resolve, reject) {
        // Block#: qMH5/t7VC%N;p{U:dQUN
        eq5d5llib_varmap.EQ5DTranslations = translations;
      });
    }
    /**
     * Describe this function...
     */
    this.EQ5DLoadLocalTranslations = EQ5DLoadLocalTranslations;

    function EQ5DLoadLocalTranslations(localTranslations) {
      return new Promise(function(resolve, reject) {
        // Block#: .CWgK4VQoS1ZD$$BqmU5
        eq5d5llib_varmap.EQ5DLocalTranslations = localTranslations;
      });
    }
    /**
     * Describe this function...
     */
    this.BackButtonBehavior = BackButtonBehavior;

    function BackButtonBehavior() {
      return new Promise(function(resolve, reject) {
        // Block#: 8Gc^C712cy?#*-=yDT*G
        if(!eq5d5llib_varmap.buttonClicked) {
          // Block#: EA4Nv7:#7%t-L=[?)Q1X
          eq5d5llib_varmap.buttonClicked = true;
          // Block#: *eCGp=G:yt@=ql};XR3o
          if(eq5d5llib_varmap.currentScreen == 'SEQ5D5LSplash') {
            // Block#: wkuu,To1dG1Ae}+F@q8q
            eq5d5llib_varmap.returnError = saveTaskAndNext('Previous');
          } else if(eq5d5llib_varmap.currentScreen == 'SEQ5D5L') {
            // Block#: yOY7d89PG8a5GxSBSvqR
            eq5d5llib_varmap.returnError = saveTaskAndNext('previous');
          } else if(eq5d5llib_varmap.currentScreen == 'SEQ5D5LHealthMeasure') {
            // Block#: sCpoBE=*jb^I}N*sp)YK
            eq5d5llib_varmap.returnError = saveTaskAndNext('previous');
          } else if(eq5d5llib_varmap.currentScreen != 'S7MultipleText' && eq5d5llib_varmap.currentScreen != 'S6MultipleChoice') {
            // Block#: (`Q6{fD%+K#37xE?-OUD
            eq5d5llib_varmap.buttonClicked = false;
            // Block#: 5$LkRl9Ps2M{YzKUr{tI
            eq5d5llib_varmap.tempDialogTitle = EQ5DTranslate('Quit');
            // Block#: duH))Vzc$)cret[WdBq`
            eq5d5llib_varmap.tempDialogMessage = EQ5DTranslate('Do you want to quit the app?');
            // Block#: ,Q@5JUzGB4y,%91-OnjC
            eq5d5llib_varmap.dialog = (com.fc.JavaScriptDistLib.Dialog.create(eq5d5llib_varmap.tempDialogTitle, eq5d5llib_varmap.tempDialogMessage));
            // Block#: EsuRLDbh^J-,s;AeS0rq
            eq5d5llib_varmap.tempDialogButton = EQ5DTranslate('Yes');
            // Block#: |Le~5-^]dt#Y#r{/*`g,
            com.fc.JavaScriptDistLib.Dialog.addBtn(eq5d5llib_varmap.tempDialogButton, eq5d5llib_varmap.dialog)
            // Block#: p;g-sCzZ%:-OZ[r@^E]G
            eq5d5llib_varmap.tempDialogCancelButton = EQ5DTranslate('Cancel');
            // Block#: tmC`?},9ZPjcTt|@1Yd^
            com.fc.JavaScriptDistLib.Dialog.addCancelBtn(eq5d5llib_varmap.tempDialogCancelButton, eq5d5llib_varmap.dialog)
            // Block#: `X4^jg4YzN`]7-Xbz.Tc
            com.fc.JavaScriptDistLib.Dialog.show(eq5d5llib_varmap.dialog, function(button) {
              // Block#: e_RQ;udbqmYC#+VSPj:9
              console.log(button);
              if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
                eq5d5llib_varmap.debugService.traces.push(button);
                eq5d5llib_varmap.debugService.printLog();
              }
              // Block#: ((jzFsTXkgv%S{ANwHZ/
              if(com.fc.JavaScriptDistLib.TextLib.textContains(button, 'Yes') ||
                com.fc.JavaScriptDistLib.TextLib.textContains(button, EQ5DTranslate('Yes'))
              ) {
                // Block#: G?IH0M0sz6?B3vp`K1hY
                com.fc.JavaScriptDistLib.Application.quitApp();
              }
            })
          } else {
            // Block#: jBSk8bbBXvlZ`K,tDxz?
            eq5d5llib_varmap.buttonClicked = false;
            // Block#: 3z.Cl,r91e1JsR4zY(tr
            eq5d5llib_varmap.tempDialogTitle = EQ5DTranslate('Quit');
            // Block#: q2i,#Pnl}|N|dE}q_q~F
            eq5d5llib_varmap.tempDialogMessage = EQ5DTranslate('The current phase is not completed. Are you sure you want to quit the app?');
            // Block#: xoc4`RjVs$}{kep;IFcd
            eq5d5llib_varmap.dialog = (com.fc.JavaScriptDistLib.Dialog.create(eq5d5llib_varmap.tempDialogTitle, eq5d5llib_varmap.tempDialogMessage));
            // Block#: rF?6zJ@_MEyHWlN2V9X4
            eq5d5llib_varmap.tempDialogButton = EQ5DTranslate('Yes');
            // Block#: uL-RVCEqSBTCdBDZGI_A
            eq5d5llib_varmap.tempDialogCancelButton = EQ5DTranslate('Cancel');
            // Block#: MDyUL7Wa/U:|L$;]R:y#
            com.fc.JavaScriptDistLib.Dialog.addBtn(eq5d5llib_varmap.tempDialogButton, eq5d5llib_varmap.dialog)
            // Block#: wxr`7ufr5Vz]uHl*T0HL
            com.fc.JavaScriptDistLib.Dialog.addCancelBtn(eq5d5llib_varmap.tempDialogCancelButton, eq5d5llib_varmap.dialog)
            // Block#: 7WQ[,a%9{-).*]b8B^Z9
            com.fc.JavaScriptDistLib.Dialog.show(eq5d5llib_varmap.dialog, function(button) {
              // Block#: -,5$jn3LNRpu{~sDN|I6
              console.log(button);
              if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
                eq5d5llib_varmap.debugService.traces.push(button);
                eq5d5llib_varmap.debugService.printLog();
              }
              // Block#: j!+yNcA]IRIV-zQ0l=b2
              if(com.fc.JavaScriptDistLib.TextLib.textContains(button, 'Yes') ||
                com.fc.JavaScriptDistLib.TextLib.textContains(button, EQ5DTranslate('Yes'))
              ) {
                // Block#: ,n(~cQ/d`!txe?]=dk3$
                com.fc.JavaScriptDistLib.Application.quitApp();
              }
            })
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.displayPageEngine = displayPageEngine;

    function displayPageEngine() {
      return new Promise(function(resolve, reject) {
        // Imported from Lib: WorkflowLibraryV23
        // Block#: xJ]x$E4pHy,hO?=TW;Cq
        eq5d5llib_varmap.currentTemplate = workflowlibraryv37.getFormPropertyAttribute('templateType', 'name');
        // Block#: ?pPv$9pEX_wf2e=;~LT2
        console.log(eq5d5llib_varmap.currentTemplate);
        if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
          eq5d5llib_varmap.debugService.traces.push(eq5d5llib_varmap.currentTemplate);
          eq5d5llib_varmap.debugService.printLog();
        }
        // Block#: @BWvyPk0tzSyP,!)JVEk
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(eq5d5llib_varmap.currentTemplate, "EQUAL", 'SEQ5D5L')) {
          // Block#: ~a1sWK.A|p-q=i[DWW5]
          eq5d5llib_varmap.SEQ5D5LFirstDisplay = true;
          // Block#: )6?gZgA/t})hn-~2|_!8
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LibScreenEQ5D5L"]');
          showScreen.show();
          history.pushState({
            'view': 'LibScreenEQ5D5L'
          }, 'LibScreenEQ5D5L', 'LibScreenEQ5D5L');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(eq5d5llib_varmap.currentTemplate, "EQUAL", 'SEQ5D5LSplash')) {
          // Block#: hfh0f%~NRh2dJL{nX,An
          eq5d5llib_varmap.SEQ5D5LSplashFirstDisplay = true;
          // Block#: 4@AY[t3-s/HpfQ?vuw-%
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="EQ5D5LDemoV12Screen"]');
          showScreen.show();
          history.pushState({
            'view': 'EQ5D5LDemoV12Screen'
          }, 'EQ5D5LDemoV12Screen', 'EQ5D5LDemoV12Screen');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(eq5d5llib_varmap.currentTemplate, "EQUAL", 'SEQ5D5LHealthMeasure')) {
          // Block#: B_}U,/-_|nO+zY*H/X_Q
          eq5d5llib_varmap.SEQE5D5LHMFirstDisplay = true;
          // Block#: {rbvx;_OKQ[/T_4tH)KP
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="LibScreenEQ5D5LHealthMeasure"]');
          showScreen.show();
          history.pushState({
            'view': 'LibScreenEQ5D5LHealthMeasure'
          }, 'LibScreenEQ5D5LHealthMeasure', 'LibScreenEQ5D5LHealthMeasure');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        }
      });
    }
    /**
     * Describe this function...
     */
    this.getError = getError;

    function getError() {
      // Imported from Lib: WorkflowLibraryV23
      // Block#: Ca@m]`75#RcD[X)5[8qt
      eq5d5llib_varmap.currentProperty = workflowlibraryv37.getFormProperty('error');
      return EQ5DTranslate((com.fc.JavaScriptDistLib.TextLib.convertToText(eq5d5llib_varmap.currentProperty)));
    }
    /**
     * Describe this function...
     */
    this.determineNextPageToDisplay = determineNextPageToDisplay;

    function determineNextPageToDisplay() {
      return new Promise(function(resolve, reject) {
        // To check if another task is available (true) or the current flow is at the end (false).
        // Block#: #6:hB.$%_:eHq+:[`I9p
        if(!workflowlibraryv37.doesExistCurrentTask()) {
          // Block#: fgRxsRQ+u+58?_i4e9zl
          com.fc.JavaScriptDistLib.Screen.displayScreenWithName('HomeScreen'); // Block#: xMBlNf^^)m9VMc[PMb1f
          onEQ5D5L_completed('EQ5D5LDemoV12 exit', eq5d5llib_varmap.nextProcessAfterCompletion).then(response => {;
          });
        } else {
          // Imported from Lib: WorkflowLibraryV23
          // Block#: %YdL%Budf.:cJ1Vw`gJp
          eq5d5llib_varmap.currentProperty = workflowlibraryv37.getProcessVariable('switchToProcess');
          // Block#: /Sjsv]%8NYawwV0InVQy
          if(!!eq5d5llib_varmap.currentProperty.length) {
            // Block#: jD.uTMxIev1l%Xgl%=[2
            eq5d5llib_varmap.nextProcessAfterCompletion = (com.fc.JavaScriptDistLib.TextLib.convertToText(eq5d5llib_varmap.currentProperty));
          }
          // Imported from Lib: WorkflowLibraryV23
          // Block#: 6pKVOtmu}SnrOfKzJv`H
          eq5d5llib_varmap.currentProperty = workflowlibraryv37.getProcessVariable('email');
          // Block#: Ay-#NPZ3u(q=Uj((n5=5
          if(!!eq5d5llib_varmap.currentProperty.length) {
            // Block#: Z/):R)VHcy5//.U*r]#b
            eq5d5llib_varmap.userID = eq5d5llib_varmap.currentProperty;
            // Block#: .G.sP:LxaCk51jdU.2B*
            console.log(eq5d5llib_varmap.currentProperty);
            if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
              eq5d5llib_varmap.debugService.traces.push(eq5d5llib_varmap.currentProperty);
              eq5d5llib_varmap.debugService.printLog();
            }
          }
          // Block#: cv{*U%=B!DoH:7$;ZiA|
          eq5d5llib_varmap.buttonClicked = false;
          // Block#: $`-KEx,L)pn*s(TRjC%G
          displayPageEngine().then(response => {;
          });
        }
      });
    }
    /**
     * Describe this function...
     */
    this.startPI = startPI;

    function startPI(pDefKey, FNewInstance) {
      return new Promise(function(resolve, reject) {
        // To start a new instance of the workflow or to resume the last run of it.
        // You must specify
        // - processDefinitionKey will be your Process Identifier (text)
        // - forceStartNewInstance will be set to true if you want to start
        // a new instance or to false if you need to resume an old one.
        // Block#: 0{1hJuW4|6pG4O,lW%z1
        workflowlibraryv37.startNewProcessInstance(pDefKey, FNewInstance).then(response => {;
          if(response.name === "success") {
            // Block#: b5|II}DQ-|7Jr+H7eL1s
            determineNextPageToDisplay().then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: zwI2L78E-o1@G=S%BBjz
            console.log(response.data);
            if(eq5d5llib_varmap.debugService && eq5d5llib_varmap.debugService.active) {
              eq5d5llib_varmap.debugService.traces.push(response.data);
              eq5d5llib_varmap.debugService.printLog();
            }
            // Block#: H2giAu.9/1@l],msqX1B
            eq5d5llib_varmap.pErrorData = response.data;
            // Block#: t-kQqJ5S5W@pRRK.8J!;
            eq5d5llib_varmap.buttonClicked = false;
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.saveTaskAndNext = saveTaskAndNext;

    function saveTaskAndNext(pOutcome) {
      // Block#: /_qYP*Tk9n0uIr+~Y?1c
      eq5d5llib_varmap.pErrorData = '';
      // To check if another task is available (true) or the current flow is at the end (false).
      // Block#: *D3;cbKTdhPN-7x@dlLM
      if(workflowlibraryv37.doesExistCurrentTask()) {
        // To complete the current task and get the next one if it exists.
        // You have to specify the outcome's name (valid outcome of the current task).
        // Block#: }1.D3H8Sd*=zC$O!5]?T
        workflowlibraryv37.completeAndGetNextTaskById(pOutcome).then(response => {;
          if(response.name === "success") {
            // Block#: qrr#rB#GJ(ge1Z4lmzO=
            eq5d5llib_varmap.buttonClicked = false;
            // Block#: uxXt/{~:6/bPm,4QS6=Q
            determineNextPageToDisplay().then(response => {;
            });
          }
          if(response.name === "failure") {
            // Block#: +=]F,per$GjYzk:V}CK!
            eq5d5llib_varmap.pErrorData = response.data;
            // Block#: O[7/{IL1tcPsqA6v1O*}
            eq5d5llib_varmap.error = getError();
            // Block#: ZxJP7V_!7-@7E29c-KZ(
            eq5d5llib_varmap.buttonClicked = false;
          }
        });
      } else {
        // Block#: dIbh7`C|`l?`;W@CiC,0
        eq5d5llib_varmap.userPassword = '';
        // Block#: 3JZ@)F8uhtSJZ0F~%5#D
        eq5d5llib_varmap.nextProcessAfterCompletion = '';
        // Block#: ?@bhD7cC;[QN.q+w?AHQ
        eq5d5llib_varmap.buttonClicked = false;
        // Block#: ~qkwn1xXdA?X^(cC8x6[
        com.fc.JavaScriptDistLib.Screen.displayScreenWithName('HomeScreen'); // Block#: e^ug8d/UdWa57@{%SgS!
        onEQ5D5L_completed('no task available', eq5d5llib_varmap.nextProcessAfterCompletion).then(response => {;
        });
      }
      return eq5d5llib_varmap.pErrorData;
    }
    /**
     * Describe this function...
     */
    this.SEQ5D5LUpdateScreen = SEQ5D5LUpdateScreen;

    function SEQ5D5LUpdateScreen() {
      return new Promise(function(resolve, reject) {
        // Imported from Lib: WorkflowLibraryV23
        // Block#: Hj*M8-1mLIW9@fr:uTUB
        eq5d5llib_varmap.currentProperty = workflowlibraryv37.getFormPropertyAttribute('infoText', 'name');
        // Block#: =ev[Ogj3(j/+slLkY;d(
        if(!!eq5d5llib_varmap.currentProperty.length) {
          // Block#: 4}?Vf`-A:*veim#uG:]3
          $('[obj-name="LEQ5D5L"]').show(); // Block#: okPLMK1y^2mz-^w,2*+r
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5L", (EQ5DTranslate((com.fc.JavaScriptDistLib.TextLib.convertToText(eq5d5llib_varmap.currentProperty)))));
        }
        // Imported from Lib: WorkflowLibraryV29
        // Block#: .=46DKfk$#KU6y73~~b-
        if(!!workflowlibraryv37.getOutcomeName('previous').length) {
          // Imported from Lib: WorkflowLibraryV29
          // Block#: L7]4A8A$tvrj^Aa9#|]T
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LPrevious", (EQ5DTranslate(workflowlibraryv37.getOutcomeName('previous')))); // Block#: 6rr{|a84yFndj]z6[d}C
          $('[obj-name="BEQ5D5LPrevious"]').show();
        }
        // Imported from Lib: WorkflowLibraryV29
        // Block#: oMJdeAGwyqT*)Gq2O:p8
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("BEQ5D5LNext", (EQ5DTranslate(workflowlibraryv37.getOutcomeName('next')))); // Block#: :4j9SuVQncD8ekDwg?,;
        eq5d5llib_varmap.checkBoxList = [];
        // Block#: WKBu4!dV;oK3;r$7v?4=
        eq5d5llib_varmap.checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: x`n9dOykH@NG@=Zv(+DR
        getRadioButtonResponses().then(response => {;
        });
      });
    }
    /**
     * Describe this function...
     */
    this.getRadioButtonResponses = getRadioButtonResponses;

    function getRadioButtonResponses() {
      return new Promise(function(resolve, reject) {
        // Block#: r(y^f*r`Q:),?.}opI9`
        eq5d5llib_varmap.localField = workflowlibraryv37.getFields();
        // Block#: @d[.(+c=2$5XvBvYUdrQ
        if(!!eq5d5llib_varmap.localField.length) {
          // Block#: ^1cZ=qp96t9bog{b--?c
          eq5d5llib_varmap.localField = eq5d5llib_varmap.localField[0];
          // Imported from Lib: WorkflowLibraryV28
          // Block#: r(_.P5U?Y*rrQy:hH}Ju
          eq5d5llib_varmap.localOptions = workflowlibraryv37.getRadioButtons((com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.localField, 'id')));
          // Block#: 9Jd%W4G804$[%V4(bX/l
          var itemNo_end = eq5d5llib_varmap.localOptions.length - 1;
          var itemNo_inc = 1;
          if(0 > itemNo_end) {
            itemNo_inc = -itemNo_inc;
          }
          for(itemNo = 0; itemNo_inc >= 0 ? itemNo <= itemNo_end : itemNo >= itemNo_end; itemNo += itemNo_inc) {
            // Block#: W^)ZRDIW5H;)D^e;);T,
            eq5d5llib_varmap.localVar1 = eq5d5llib_varmap.localOptions[itemNo];
            // Block#: rZrfAl)`CH?zE#)[/RCH
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.localField, 'value'), "EQUAL", com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.localVar1, 'name'))) {
              // Block#: lW?c-#6h6bkU=A).QVbb
              eq5d5llib_varmap.checkBoxValue = 'TRUE';
              // Block#: t!,i=W*3#q)|(Y;Ea]4$
              eq5d5llib_varmap.hasClick = itemNo;
            } else {
              // Block#: oYLY;uEawYG}?5OpzsBd
              eq5d5llib_varmap.checkBoxValue = 'FALSE';
            }
            // Block#: z3O+-jjt[Bce]CpWIcXs
            eq5d5llib_varmap.checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name', 'value'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(itemNo)), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.localVar1, 'name')), eq5d5llib_varmap.checkBoxValue]);
            // Block#: VmG11+KHDErProS0)%GR
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(eq5d5llib_varmap.checkBoxList, eq5d5llib_varmap.checkBoxElement)
            // Block#: owhotfzrV28j^lqj1%:,
            $('[obj-name="EQ5D5LListView"]').show();
          }
          // Block#: 9^g!p*CjPa~4ch+kYDC^
          eq5d5llib_varmap.LVcells = eq5d5llib_varmap.checkBoxList.length;
        } else {
          // Block#: XplzZd`*wp5gN7pIc~(V
          eq5d5llib_varmap.LVcells = 0;
        }
      });
    }
    /**
     * Describe this function...
     */
    this.EQ5D5LDisplayNotification = EQ5D5LDisplayNotification;

    function EQ5D5LDisplayNotification() {
      return new Promise(function(resolve, reject) {
        // Block#: -h]O0a-BX1c9zRD!fJ1{
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LNotificationText", (EQ5DTranslate('Please answer the required <br>question(s)'))); // Block#: .K%6hC~4IcPv)}`/c,,d
        $('[obj-name="CEQ5D5LOverlay"]').show();
      });
    }
    /**
     * Describe this function...
     */
    this.setUserMeasurement = setUserMeasurement;

    function setUserMeasurement(y) {
      return new Promise(function(resolve, reject) {
        // Block#: OF+*N@yk`_960v2G[jtV
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")) &&
          com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0"))
        ) {
          // Block#: Xq2gnkxDMs283:N9AVEd
          eq5d5llib_varmap.userMeasurement = Math.round((y - com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")) / (eq5d5llib_varmap.EQ5D5LHeightTotal1 / 100) - 100);
        }
        // Block#: D$;,eI$Q$%K}q(^`21$e
        eq5d5llib_varmap.userMeasurement = com.fc.JavaScriptDistLib.TextLib.textReplace('.0', '', com.fc.JavaScriptDistLib.TextLib.convertToText(eq5d5llib_varmap.userMeasurement * -1));
        // Block#: Dy;8^chu%l$tV_vt31%h
        eq5d5llib_varmap.hasMeasurement = true;
      });
    }
    /**
     * Describe this function...
     */
    this.healthMeasureScaleOnInit = healthMeasureScaleOnInit;

    function healthMeasureScaleOnInit() {
      return new Promise(function(resolve, reject) {
        // Block#: ]-_?Ov_Zu.3aEayD3Kt;
        eq5d5llib_varmap.hasMeasurement = false;
        // Block#: L9{R:(r*{:F{#f|=+WVe
        eq5d5llib_varmap.EQ5D5LHeightTotal1 = com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0") - com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100");
        // Block#: ,^JA;z##pGLDn_Eh%[F7
        $('[obj-name="IEQ5D5LHMMarker"]').hide(); // Block#: qs_3S*r5=kBz95/$EQE|
        $('[obj-name="CEQ5D5LHMSlider"]').hide();
      });
    }
    /**
     * Describe this function...
     */
    this.moveMarker = moveMarker;

    function moveMarker(x, y) {
      return new Promise(function(resolve, reject) {
        // Block#: ,;6y]Le|adGDMEpWR_9-
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100"))) {
          // Block#: WY`R!7K(SG|o9NGCb%k(
          $('[obj-name="CEQ5D5LHMSlider"]').show(); // Block#: J?$U]35ip16VcLVA8xj9
          $('[obj-name="IEQ5D5LHMMarker"]').show(); // Block#: (Ud)SiR1`|SHMIIX/t-W
          com.fc.JavaScriptDistLib.Container.setProperty["y"]("CEQ5D5LHMSlider", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100") - 14)); // Block#: KF4e!G5f3#]O;=.787nT
          com.fc.JavaScriptDistLib.Image.setProperty["y"]("IEQ5D5LHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100") - 3)); // Block#: ${)yHbt|`Pd8HH,p*k!|
          setUserMeasurement(com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")).then(response => {;
          });
          // Block#: 3+s$)-Zw^wKXHHXaa|ku
          updateYourHealthLabel().then(response => {;
          });
          // Block#: AI_gv1ue1wop*1YZE6l-
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMSlider", eq5d5llib_varmap.userMeasurement);
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GTE", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0"))) {
          // Block#: X-1)!8+D!q}A7WEfh2{Q
          $('[obj-name="CEQ5D5LHMSlider"]').show(); // Block#: g%#y+dT5`^Rh^1)ZH}@t
          $('[obj-name="IEQ5D5LHMMarker"]').show(); // Block#: KiW`Jz4J`DtE=adn{9E#
          com.fc.JavaScriptDistLib.Container.setProperty["y"]("CEQ5D5LHMSlider", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0") - 14)); // Block#: `o`1Gjx+~h83^!}))W,V
          com.fc.JavaScriptDistLib.Image.setProperty["y"]("IEQ5D5LHMMarker", (com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0") - 3)); // Block#: kK,D^2XK{Jk0g_I?CiF#
          setUserMeasurement(com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0")).then(response => {;
          });
          // Block#: 4pS]AMnTJ]zEl]l2SpmW
          updateYourHealthLabel().then(response => {;
          });
          // Block#: Ung8KV36vy]jW4pXk{{%
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMSlider", eq5d5llib_varmap.userMeasurement);
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GT", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM100")) &&
          com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LT", com.fc.JavaScriptDistLib.Label.getProperty["y"]("LEQ5D5LHM0"))
        ) {
          // Block#: ula^Mj$xa=``2~OmMmRX
          $('[obj-name="CEQ5D5LHMSlider"]').show(); // Block#: ]!3kxW3TP_Qk$hj^DYmT
          $('[obj-name="IEQ5D5LHMMarker"]').show(); // Block#: G_[2o@!.;[0+dpOeKS{s
          com.fc.JavaScriptDistLib.Container.setProperty["y"]("CEQ5D5LHMSlider", (y - 14)); // Block#: 7V=4lAa^4FBu$vFJ(*1m
          com.fc.JavaScriptDistLib.Image.setProperty["y"]("IEQ5D5LHMMarker", (y - 3)); // Block#: /,@0]{w%)-9/pDIW;{*^
          setUserMeasurement(y).then(response => {;
          });
          // Block#: i]@Eshj}n]iAp9x(Na=4
          updateYourHealthLabel().then(response => {;
          });
          // Block#: (p%h]Mv*+cm7WV5v,_j}
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMSlider", eq5d5llib_varmap.userMeasurement);
        }
      });
    }
    /**
     * Describe this function...
     */
    this.updateYourHealthLabel = updateYourHealthLabel;

    function updateYourHealthLabel() {
      return new Promise(function(resolve, reject) {
        // Block#: s?S3]YO8AD}B8!o17iOQ
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMBoxValue", eq5d5llib_varmap.userMeasurement);
      });
    }
    /**
     * Describe this function...
     */
    this.EQ5D5LHMdisplayNotification = EQ5D5LHMdisplayNotification;

    function EQ5D5LHMdisplayNotification() {
      return new Promise(function(resolve, reject) {
        // Block#: |W6R/U?h0^EqOOTcYvx4
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LHMNotificationText", (EQ5DTranslate('Please tap on the scale to indicate<br> how your health is TODAY.'))); // Block#: `URrdY|]6(D(wIw7`2VO
        $('[obj-name="CEQ5D5LHMOverlay"]').show();
      });
    }
    /**
     * Describe this function...
     */
    this.translate = translate;

    function translate(text) {
      return EQ5DTranslate(text);
    }
    // Block#: gbOpKEp#*k,_GE6|Dk{s
    function on_BEQ5D5LSplashNext_click(e) {
      try {
        // Block#: {3*4$U2RYT(S{Wi#GiZE
        if(!eq5d5llib_varmap.buttonClicked) {
          // Block#: u]_L%82PSgp7^X}.p/)k
          eq5d5llib_varmap.buttonClicked = true;
          // To check if another task is available (true) or the current flow is at the end (false).
          // Block#: hH%S[Tjyn*%bS]aWp/+n
          if(workflowlibraryv37.doesExistCurrentTask()) {
            // Block#: Y?b}M33fn?)IWrJifu7i
            eq5d5llib_varmap.returnError = saveTaskAndNext('Next');
          } else {
            // Block#: hG1i6FZv1x2jhBBb1U~G
            startPI('EQ5D5LDemoV12', false).then(response => {;
            });
          }
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LSplashNext"]').on('click', on_BEQ5D5LSplashNext_click);
    // Block#: *s]4BO0x/:H.U[G8m!Ry
    function on_BEQ5D5LSplashPrevious_click(e) {
      try {
        // Block#: ZYM=2$5uIHjL4or5FYvY
        if(!eq5d5llib_varmap.buttonClicked) {
          // Block#: k(Z):3HFL$0(t^KzZXHX
          eq5d5llib_varmap.buttonClicked = true;
          // Block#: 8Nx{+4U0nZPLvti!X6^}
          eq5d5llib_varmap.returnError = saveTaskAndNext('Previous');
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LSplashPrevious"]').on('click', on_BEQ5D5LSplashPrevious_click);
    // Block#: ,CCuM]Cu.dWNMsJ$Udy;
    function on_listview_cell_configured_EQ5D5LListViewCell(EQ5D5LListViewCell, number) {
      try {
        // Block#: EAbLJAqEntM6T3q+~$Gi
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LEQ5D5LListViewCellText", (EQ5DTranslate((com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.checkBoxList[number], 'name'))))); // Block#: /ZnKGTm,pmAj{edHB7MI
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(eq5d5llib_varmap.hasClick, "EQ", number)) {
          // Block#: Vfd*y;={K/sZ==dd5{A`
          $('[obj-name="IEQ5D5LListViewCellStyle"]').hide(); // Block#: qe?)l;-]vLorT0ZeZ{GS
          $('[obj-name="IEQ5D5LListViewCellClick"]').show();
        } else {
          // Block#: -z%U8BztfVC*}}+p+Pt%
          $('[obj-name="IEQ5D5LListViewCellStyle"]').show(); // Block#: =uz4Csg9q?F_-#1g/`%S
          $('[obj-name="IEQ5D5LListViewCellClick"]').hide();
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.ListView.setConfigCallback('EQ5D5LListViewCell', on_listview_cell_configured_EQ5D5LListViewCell);
    // Block#: -HHQp{H8|_!FKkCvZx!Z
    function on_screen_showEQ5D5LDemoV12Screen() {
      try {
        // Block#: vZBAv6Xgr+7A*H7V6n,^
        if(eq5d5llib_varmap.initialized == null) {
          // Block#: Lc@#U0eF.`+y}Xtkn?O7
          eq5d5llib_varmap.initialized = true;
          // Block#: P|,7|]:3)%~Y1SJxXt@,
          initializeEQ5D5LlibV5().then(response => {;
          });
          // To setup the user name and the password to access to the
          // workflow. Start from here to interact with the workflow.
          // Block#: SK-kd%@5axV}yzp6on7H
          workflowlibraryv37.initWorkflow().then(response => {;
          });
        }
        // Block#: qR4yS[g:VHzi;5.4Hiko
        refreshLanguage().then(response => {;
        });
        // Block#: G:vMcduo`b2{z1/tUunz
        initialize_LibScreenEQ5D5LSplash().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="EQ5D5LDemoV12Screen"]').on('show', on_screen_showEQ5D5LDemoV12Screen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showEQ5D5LDemoV12Screen'] = on_screen_showEQ5D5LDemoV12Screen;
    // Block#: ]*IgyTK@jbl_Q2#}Bp_O
    function on_screen_showLibScreenEQ5D5L() {
      try {
        // Block#: ;+.[z,UI-l|=9AWML*=m
        initialize_LibScreenEQ5D5L().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="LibScreenEQ5D5L"]').on('show', on_screen_showLibScreenEQ5D5L);
    com.fc.JavaScriptDistLib.Screen.screenDict['showLibScreenEQ5D5L'] = on_screen_showLibScreenEQ5D5L;
    // Block#: iJTYqNX6Y$R9R6c5_5!+
    function on_listview_length_configured_EQ5D5LListView() {
      try {
        com.fc.JavaScriptDistLib.ListView.configureCells('EQ5D5LListView', eq5d5llib_varmap.LVcells);
        $('[obj-name="EQ5D5LListView"]').children().each(function(i) {
          if(i >= 0) {
            com.fc.JavaScriptDistLib.ListView.setContext($(this));
            com.fc.JavaScriptDistLib.ListView.executeConfigCallback('EQ5D5LListView', $(this), i);
            com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('EQ5D5LListView', $(this), i);
            com.fc.JavaScriptDistLib.ListView.resetContext($(this));
          }
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    // need loop to reset all other cells to default style per each click
    // Block#: H7[#rVa+9yFK}U_%kWtY
    function on_listview_cell_clicked_EQ5D5LListViewCell(EQ5D5LListViewCell, number) {
      try {
        // Block#: j~0t=Gl1ZY0F2Kg/~@VS
        eq5d5llib_varmap.hasClick = number;
        // Block#: `I2uKO]dAUoUO0@J{.C(
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('EQ5D5LListView');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('EQ5D5LListView');
        on_listview_length_configured_EQ5D5LListView();
        // Block#: /GSy;,Pa.QZW0oOljDsR
        eq5d5llib_varmap.userChoice = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(eq5d5llib_varmap.checkBoxList[number], 'name'));
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    }
    com.fc.JavaScriptDistLib.ListView.setClickCallback('EQ5D5LListViewCell', on_listview_cell_clicked_EQ5D5LListViewCell);
    // Block#: e_#,RA-=s[/ZP3!t].)t
    function on_BEQ5D5LNext_click(e) {
      try {
        // Block#: +.|91RSR-{6S7(qQ8hA#
        if(!eq5d5llib_varmap.buttonClicked) {
          // Block#: :IcPK:|3[h]C`8IfYtO3
          eq5d5llib_varmap.buttonClicked = true;
          // Block#: H`X[gEi7AGCvP.Oj0J1Y
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(eq5d5llib_varmap.hasClick, "NEQ", -1) ||
            com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.TextLib.convertToText(eq5d5llib_varmap.currentProperty), 'Instructions')
          ) {
            // Block#: :T}9Uc=27ag46kXCwF@K
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(eq5d5llib_varmap.userChoice, "EQUAL", '')) {
              // To set the value of a specific field (addressed by its id) in the current form.
              // Imported from Lib: WorkflowLibraryV23
              // Block#: PUot^n~xt}HU{F*0QXuM
              workflowlibraryv37.setField(com.fc.JavaScriptDistLib.TextLib.textChangeCase(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(workflowlibraryv37.getFormProperty('title'), 'name')), "LOWERCASE"), eq5d5llib_varmap.userChoice).then(response => {;
              });
            }
            // Block#: buyi}$C!jVz:VMUfR~M_
            eq5d5llib_varmap.returnError = saveTaskAndNext('next');
          } else {
            // Block#: nl%*hU9$Wo_w;/SF#s@s
            eq5d5llib_varmap.buttonClicked = false;
            // Block#: !yZsMNBLJD,6dfus7g:2
            EQ5D5LDisplayNotification().then(response => {;
            });
          }
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LNext"]').on('click', on_BEQ5D5LNext_click);
    // Block#: `N%Bz8s2Wvd`!6}haBC3
    function on_BEQ5D5LPrevious_click(e) {
      try {
        // Block#: .UgLZPrdiI/dt#$M)rM9
        if(!eq5d5llib_varmap.buttonClicked) {
          // Block#: }K4nD!O*C-.0Hm%U[+6v
          eq5d5llib_varmap.buttonClicked = true;
          // To check if another task is available (true) or the current flow is at the end (false).
          // Block#: NM0iZ(ZU$[]`ds6kLt5-
          if(!workflowlibraryv37.doesExistCurrentTask()) {
            // Block#: VcgzkDMP`:()IuY?VblB
            let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
            //Close all dialogs
            com.fc.JavaScriptDistLib.Screen.closeDialogs();
            hideScreen.hide();
            let showScreen = $('[obj-name="EQ5D5LDemoV12Screen"]');
            showScreen.show();
            history.pushState({
              'view': 'EQ5D5LDemoV12Screen'
            }, 'EQ5D5LDemoV12Screen', 'EQ5D5LDemoV12Screen');
            hideScreen.triggerHandler('hide');
            showScreen.triggerHandler('show');
          } else {
            // Block#: *u3ju%y2-L6ZFxFH6pQ#
            eq5d5llib_varmap.returnError = saveTaskAndNext('previous');
          }
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LPrevious"]').on('click', on_BEQ5D5LPrevious_click);
    // Block#: Vf*vXlAwdt5oT5[ptp9m
    function on_BEQ5D5LNotificationOK_click(e) {
      try {
        // Block#: k?qK!ModJ-6Cc())+7YW
        $('[obj-name="CEQ5D5LOverlay"]').hide();
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LNotificationOK"]').on('click', on_BEQ5D5LNotificationOK_click);
    // Block#: P[XhyU)f$QzxzNw*IT+R
    function on_BEQ5D5LNotification_click(e) {
      try {
        // Block#: w2%mUfv%+(vwup1_@H#X
        $('[obj-name="CEQ5D5LOverlay"]').hide();
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LNotification"]').on('click', on_BEQ5D5LNotification_click);
    // Block#: `p:b+r|]tWhjtW-c{fkk
    function on_screen_showLibScreenEQ5D5LHealthMeasure() {
      try {
        // Block#: 1yHS+uwJ/a2Snlj0eyZb
        initialize_LibScreenEQ5D5LHealthMeasure().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="LibScreenEQ5D5LHealthMeasure"]').on('show', on_screen_showLibScreenEQ5D5LHealthMeasure);
    com.fc.JavaScriptDistLib.Screen.screenDict['showLibScreenEQ5D5LHealthMeasure'] = on_screen_showLibScreenEQ5D5LHealthMeasure;
    // Block#: C~,@x;q8X%;g2OKsw:kt
    function on_BEQ5D5LHMPrevious_click(e) {
      try {
        // Block#: xnbMXxor%krM+k~@q87o
        if(!eq5d5llib_varmap.buttonClicked) {
          // Block#: _W0HM2Eird;.=yud=3+W
          eq5d5llib_varmap.buttonClicked = true;
          // Block#: y_MCpwY#5GZsg55xAj`I
          eq5d5llib_varmap.returnError = saveTaskAndNext('previous');
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMPrevious"]').on('click', on_BEQ5D5LHMPrevious_click);
    // Block#: TBzi^l0_~o/LFsjeRPCF
    function on_Image_IEQ5D5LHMMarker_TOUCHMOVE(e) {
      if($('[obj-name= "IEQ5D5LHMMarker"]:visible') && $('[obj-name= "IEQ5D5LHMMarker"]:visible')[0]) {
        var currentElement = $('[obj-name= "IEQ5D5LHMMarker"]');
        var currentScreen = $('.fc.Screen:visible');
        currentElement.bind('touchstart mousedown', function(event) {
          currentScreen.bind('touchmove mousemove', function(touchmove) {
            var ose = currentScreen.offset();
            var mousemove = touchmove.type === 'mousedown' || touchmove.type === 'touchstart',
              x = Math.round(mousemove ? touchmove.targetTouches[0].clientX : touchmove.clientX - ose.left),
              y = mousemove ? touchmove.targetTouches[0].clientY : touchmove.clientY - ose.top;
            // Block#: h?o+_[-[D-,,_exfk+z*
            moveMarker(x, y).then(response => {;
            });;
            touchmove.stopPropagation();
          });
          event.stopPropagation();
        });
        currentElement.bind('mouseup touchend', function(release) {
          currentScreen.off('mousemove touchmove');
          currentElement.off('mousedown touchstart');
          release.stopPropagation();
        });
      }
    };
    //Call
    on_Image_IEQ5D5LHMMarker_TOUCHMOVE();
    // Block#: {ilXlsoo0gTQbJ6l?$/,
    function on_BEQ5D5LHMNext_click(e) {
      try {
        // Block#: Asp1^ap{Eg)x{7;y]II2
        if(!eq5d5llib_varmap.buttonClicked) {
          // Block#: qy-B-#N$L9$7H8Z0j7/X
          eq5d5llib_varmap.buttonClicked = true;
          // Block#: ue2bzd%Sd4iw~bb_er%z
          if(eq5d5llib_varmap.hasMeasurement) {
            // To set the value of a specific field (addressed by its id) in the current form.
            // Block#: ~p!s8XV0%0;PBUXwoTsh
            workflowlibraryv37.setField('userMeasurement', eq5d5llib_varmap.userMeasurement).then(response => {;
            });
            // Block#: yuu+6@acpiu}0G/o;[{]
            eq5d5llib_varmap.returnError = saveTaskAndNext('next');
          } else {
            // Block#: 6GZ]3TszbIl7`]z*rw=(
            eq5d5llib_varmap.buttonClicked = false;
            // Block#: F/XrdL,^2a1ufOk#+DPV
            EQ5D5LHMdisplayNotification().then(response => {;
            });
          }
        }
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMNext"]').on('click', on_BEQ5D5LHMNext_click);
    // Block#: ~OxM|W*#~FZZUG]w*{pk
    function on_Image_IEQ5D5LHMScale_TOUCHMOVE(e) {
      if($('[obj-name= "IEQ5D5LHMScale"]:visible') && $('[obj-name= "IEQ5D5LHMScale"]:visible')[0]) {
        var currentElement = $('[obj-name= "IEQ5D5LHMScale"]');
        var currentScreen = $('.fc.Screen:visible');
        currentElement.bind('touchstart mousedown', function(event) {
          currentScreen.bind('touchmove mousemove', function(touchmove) {
            var ose = currentScreen.offset();
            var mousemove = touchmove.type === 'mousedown' || touchmove.type === 'touchstart',
              x = Math.round(mousemove ? touchmove.targetTouches[0].clientX : touchmove.clientX - ose.left),
              y = mousemove ? touchmove.targetTouches[0].clientY : touchmove.clientY - ose.top;
            // Block#: fBUf.CDMz^f{d#T-y!s_
            moveMarker(x, y).then(response => {;
            });;
            touchmove.stopPropagation();
          });
          event.stopPropagation();
        });
        currentElement.bind('mouseup touchend', function(release) {
          currentScreen.off('mousemove touchmove');
          currentElement.off('mousedown touchstart');
          release.stopPropagation();
        });
      }
    };
    //Call
    on_Image_IEQ5D5LHMScale_TOUCHMOVE();
    // Block#: Gv$.ps:EjET}le9v]4dk
    function on_BEQ5D5LHMNotification_click(e) {
      try {
        // Block#: ln$qaa[^a2}:e6GQ`Q3C
        $('[obj-name="CEQ5D5LHMOverlay"]').hide();
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMNotification"]').on('click', on_BEQ5D5LHMNotification_click);
    // Block#: 4y#P:920^xF0B.%(4y~K
    function on_BEQ5D5LHMNotificationOK_click(e) {
      try {
        // Block#: VE7IkF0[!qsM8wHX`C4s
        $('[obj-name="CEQ5D5LHMOverlay"]').hide();
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="BEQ5D5LHMNotificationOK"]').on('click', on_BEQ5D5LHMNotificationOK_click);
    com.fc.JavaScriptDistLib.Screen.screenPopInit();
  };
  var eq5d5llib = new EQ5D5Llib();
  // PROJECT CODE
  var _that = this;
  _that.userStatus = null;
  _that.value = null;
  _that.exitCode = null;
  _that.nextProcess = null;
  com.fc.CustomEventListeners["onLoginCompleted"] =
    /**
     * Describe this function...
     */
    function onLoginCompleted(userStatus) {
      return new Promise(function(resolve, reject) {
        // Block#: :U?#`~-1?jujc}i5Mjcu
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="HomeScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'HomeScreen'
        }, 'HomeScreen', 'HomeScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
  /**
   * Describe this function...
   */
  function startFlow(name2) {
    return new Promise(function(resolve, reject) {
      // Describe this function...
      // Block#: 6q]-qOT{fo%e-?$fX=+S
      genericflowlib.startFlowProcess(name2, true, null).then(response => {;
      });
    });
  }
  com.fc.CustomEventListeners["onFlowComplete"] =
    /**
     * Describe this function...
     */
    function onFlowComplete(value) {
      return new Promise(function(resolve, reject) {
        // Block#: [wQI!+{C-Z^P^/yQ}lZC
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="HomeScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'HomeScreen'
        }, 'HomeScreen', 'HomeScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
  com.fc.CustomEventListeners["onEQ5D5L_completed"] =
    /**
     * Describe this function...
     */
    function onEQ5D5L_completed(exitCode, nextProcess) {
      return new Promise(function(resolve, reject) {
        // Block#: kO7#3E?U.uRO*^{,]p|0
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="HomeScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'HomeScreen'
        }, 'HomeScreen', 'HomeScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      });
    }
  // Block#: X:ung#d?Yb5%3rBTG9U!
  function on_Button_click(e) {
    try {
      // Describe this function...
      // Block#: `Go^tqEBqhecOOPo*(D)
      loginlibgiovanni.startLoginProcess().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: ~qI@v{RRUia%H[$9JAuL
  function on_eQualStart_click(e) {
    try {
      // Block#: 1zo/K9zhZTOKZT^g;7%/
      startFlow('eQualificationProcessDemoV122').then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="eQualStart"]').on('click', on_eQualStart_click);
  // Block#: 0CI4/SwlF5MMSC}mZ[6.
  function on_eConsStart_click(e) {
    try {
      // Block#: C~i:@D!XJ5c!`r6y7:W;
      startFlow('eConsentProcessDemoV122').then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="eConsStart"]').on('click', on_eConsStart_click);
  // Block#: p6F$ZB^SBC=m))liO#8h
  function on_eQ5Start_click(e) {
    try {
      // Describe this function...
      // Block#: s@/?ZK~in?Xzie7RK?KE
      eq5d5llib.startEQ5D5L().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="eQ5Start"]').on('click', on_eQ5Start_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="StartingScreen"]').show();
});
// Generated by snapp
// 209079-105278-847647-600294
