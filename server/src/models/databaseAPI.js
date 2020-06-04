const format = require('pg-format');
const db = require('./database.js');
const { v4: uuidv4 } = require('uuid');

const databaseAPI = {};

databaseAPI.createUser  =  async ({email, username, password}) => {
  const uuid = uuidv4()
  const query = `insert into users (id, email, username, password) values ($1, $2, $3, $4) returning *;`;
  const values = [uuid, email, username, password]

  try {
    const res = await db.query(query, values)
    return res.rows[0];
  } catch(err) {
    throw new Error(err)
  }
}

databaseAPI.validateUser = async ({username, password}) => {
  const query = `select * from users where username=$1 and password=$2;`;
  const values = [username, password]

  try {
    const result = await db.query(query, values)
    if (result.rows.length > 0) {
      return result.rows[0]
    } else {
      return false;
    }
  } catch(err) {
    throw new Error(err)
  }
}

databaseAPI.getUser = async ({username}) => {
  const query = `select username, id from users where username=$1;`;
  const values = [username]

  try {
    const res = await db.query(query, values)
    return res.rows[0];
  } catch(err) {
    throw new Error(err)
  }
}

databaseAPI.createGroup  =  async ({group: { groupName, amount, charityLink, goalName, deadline }}) => {
  const uuid = uuidv4()
  const query = `insert into groups (id, group_name, amount, charity_link, goal_name, deadline) values ($1, $2, $3, $4, $5, $6) returning *;`;
  const values = [uuid, groupName, amount, charityLink, goalName, deadline]

  try {
    const res = await db.query(query, values)
    return res.rows[0];
  } catch(err) {
    throw new Error(err)
  }
}

databaseAPI.addMembers  =  async ({group: {members}}, groupId) => {
  const membersArray = [];
  const today = new Date();
  members.forEach(member => {
    let uuid = uuidv4()
    membersArray.push([uuid, member.id, member.username, groupId, 0, '1970-01-01Z00:00:00:000']);
  })

  const query = format(`insert into members (id, user_id, username, group_id, days_completed, last_completed) values %L returning *;`, membersArray);

  try {
    const res = await db.query(query)
    const filteredMembers = [];
    res.rows.forEach(obj => filteredMembers.push({
      id: obj.user_id,
      username: obj.username,
      daysCompleted: obj.days_completed,
      lastCompleted: obj.last_completed,
      completedToday: today - obj.lastCompleted > 86400 ? false : true
    }))
    return filteredMembers;
  } catch(err) {
    throw new Error(err)
  }
}

databaseAPI.getGroups = async ({userId}) => {
  const query = `select groups.id, groups.group_name as "groupName", groups.amount, groups.goal_name as "goalName", groups.deadline, groups.charity_link as "charityLink" from groups join members on members.user_id = $1;`;
  const values = [userId]

  try {
    const res = await db.query(query, values)
    return res.rows;
  } catch(err) {
    throw new Error(err)
  }
}

databaseAPI.getMembers = async (groupIds) => {
  const query = format(`select members.user_id, members.group_id, members.user_id, members.username, members.days_completed, members.last_completed from members join groups on members.group_id = %L;`, groupIds)
  const today = new Date();

  try {
    const res = await db.query(query)

    const filteredMembers = [];
    res.rows.forEach(obj => filteredMembers.push({
      id: obj.user_id,
      groupId: obj.group_id,
      username: obj.username,
      daysCompleted: obj.days_completed,
      lastCompleted: obj.last_completed,
      completedToday: today - obj.lastCompleted > 86400 ? false : true
    }))
    return filteredMembers;
  } catch(err) {
    throw new Error(err)
  }
}

databaseAPI.getIndividualGroup = async ({ groupId }) => {
  const query = `select groups.id, groups.group_name as "groupName", groups.amount, groups.goal_name as "goalName", groups.deadline, groups.charity_link as "charityLink" from groups where id=$1;`;
  const values = [groupId]

  try {
    const res = await db.query(query, values)
    // console.log(res.rows)
    return res.rows;
  } catch(err) {
    throw new Error(err)
  }
}


databaseAPI.completeTask = async ({userId, groupId}) => {
  const today = new Date();
  const query = `update members set days_completed = days_completed + 1, last_completed = $1 where user_id = $2 and group_id = $3;`;
  const values = [today, userId, groupId]

  try {
    const res = await db.query(query, values)
    return res.rows[0];
  } catch(err) {
    throw new Error(err)
  }
}

module.exports = databaseAPI;