class View {
  static errView(err) {
    return "command failed to execute";
  }

  static sucessView() {
    return "command was executed successfully";
  }

  static contactShow(rows) {
    let n = rows.length;
    console.log("------------");
    for (let i = 0; i < n; i++) {
      let person = `${rows[i].id} - ${rows[i].name} : ${rows[i].phoneNumber} - ${rows[i].email}`;
      console.log(person);
      console.log("----------");
    }
    return;
  }

  static async showGroup(rows) {
    let n = rows.length;
    console.log("------------");
    for (let i = 0; i < n; i++) {
      let group = `${rows[i].id} - ${rows[i].groupName}`;
      console.log(group);
      console.log("----------");
    }
    return;
  }
}
