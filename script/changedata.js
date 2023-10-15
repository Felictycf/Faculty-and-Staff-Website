// 连接到MongoDB
conn = new Mongo();
db = conn.getDB("teacher-system");

// 定义要替换的IP和新值
var oldIP = "47.113.221.19";
var newValue = "localhost";

// 替换在各个字段中的IP
var fields = ["backgroupImage", "pdf", "url", "avatar"];
fields.forEach(function(field) {
    var query = {};
    var update = {};

    query[field] = { $regex: oldIP, $options: "i" };
    update[field] = { $concat: [
            { $substrCP: [ "$" + field, 0, { $indexOfCP: [ "$" + field, oldIP ] } ] },
            newValue,
            { $substrCP: [ "$" + field, { $add: [ { $indexOfCP: [ "$" + field, oldIP ] }, oldIP.length ] }, -1 ] }
        ]};

    db.users_2.updateMany(query, { $set: update });
});
