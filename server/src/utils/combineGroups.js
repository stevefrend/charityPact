
module.exports = combineGroups = (groups, members) => {
  const combinedGroup = []
  groups.forEach(group => {
    group.members = [];
    members.forEach(member => {
      console.log('member.groupId:', member.groupId)
      if (group.id === member.groupId) {
        group.members.push(member)
      }
    })
    combinedGroup.push(group)
    // console.log(group)
  })
  return combinedGroup;
}
