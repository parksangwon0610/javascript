// localStorage
const db = {
    activities: [
        {
            activityId: "activity1",
            memberId: "activityMember1"
        },
        {
            activityId: "activity2",
            memberId: "activityMember2"
        },
        {
            activityId: "activity3",
            memberId: "activityMember3"
        }
    ],
    groups: [
        {
            groupId: "group1",
            memberId: "groupMember1"
        },
        {
            groupId: "group2",
            memberId: "groupMember2"
        },
        {
            groupId: "group3",
            memberId: "groupMember3"
        }
    ],
    workspaces: [ // 워크스페이스도 여러개 일 수 있음
        {
            workspaceId: "workspace1",
            memberId: "workspaceMember1"
        }
    ]
}

// type : activities: 0, groups: 1, workspaces: 2
let storageList = [
    {type: 'ACTIVITY', key: 'activities', index: 0},
    {type: 'GROUP', key: 'groups', index: 1},
    {type: 'WORKSPACE', key: 'workspaces', index: 2},
]
const storageList1 = [
    {type: 'ACTIVITY', key: 'activities', index: 0},
    {type: 'GROUP', key: 'groups', index: 1},
    {type: 'WORKSPACE', key: 'workspaces', index: 2},
]



/**
 * * 요청(requestType) 레벨까지 재귀로 호출됩니다.
 * @param {*} requestTypeIdArray: string[], 현재 페이지의 스택  
 *     ['ACTIVITY', 'GROUP', 'WORKSPACE'] 순서는 변경할 수도 있음
 * @param {*} requestType: string(or Enum), 현재 페이지의 레벨 
 *     ACTIVITY, GROUP, WORKSPACE
 */
const method1 = async (requestTypeIdArray, requestType) => {
    const { type, key } = storageList.shift();

    if(type !== requestType) {
        return method1(requestTypeIdArray, requestType);
    }
    const requestTypeId = requestTypeIdArray.shift();
    const foundData = db[key].find(element => element[`${type.toLowerCase()}Id`] === requestTypeId);
    return foundData || method1(requestTypeIdArray, storageList[0].type);
}

/**
 * * 요청한 스택을 차례로 호출하여 멤버를 찾습니다. 
 * @param {*} requestArray: Object[], 현재 페이지의 객체 스택
 * [
    {type: 'ACTIVITY', id: 'activity3'},
    {type: 'GROUP', id: 'group3'},
    {type: 'WORKSPACE', id: 'workspace1'},
 * ]
 */
const method2 = async (requestArray) => {
    const startStorageList = storageList1.slice(-requestArray.length); 
    for(const request of requestArray) {
        const {key, type} = startStorageList.shift();
        const foundData = db[key].find(element => element[`${type.toLowerCase()}Id`] === request.id);
        if(foundData) {
            return foundData;
        } 
    }
}

function fetchAccount (input) {
    const { type, wId, gId, aId } = input;
    const requestTypeIdArray = [aId, gId, wId].filter(e => e !== undefined);
    const requestType = type;
    const memberId = method3(requestTypeIdArray, requestType);
    memberId || console.log('No Member Found, check LocalStorage Workspace Level of your device');
    return memberId;
}
const findMemberId = async (requestTypeIdArray, requestType) => {
    const { type, key } = storageList.shift();

    if(type !== requestType) {
        return findMemberId(requestTypeIdArray, requestType);
    }
    const requestTypeId = requestTypeIdArray.shift();
    const foundData = db[key].find(element => element[`${type.toLowerCase()}Id`] === requestTypeId);
    return foundData || findMemberId(requestTypeIdArray, storageList[0].type);
}


fetchAccount({gId: 'group3', wId: 'workspace1', type: 'GROUP'}).then(console.log);
// method1([
//     'activity2', 
//     'group4', 
//     'workspace1'
// ], 'ACTIVITY').then(console.log);

// method2([
//     {type: 'ACTIVITY', id: 'activity3'},
//     {type: 'GROUP', id: 'group3'},
//     {type: 'WORKSPACE', id: 'workspace1'},
// ]).then(console.log);

