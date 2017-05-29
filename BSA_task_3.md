<b>1. Написать запрос для поиска всех студентов, у которых score > 87% и < 93% по любому из типов выполненных заданий.</b>

	db.BSAcol.find({ scores : { $elemMatch: { score: { $gt: 87, $lt:93 }}}});

<b>2. Написать запрос-агрегацию для выборки всех студентов, у которых результат по экзамену (type: "exam") более 90% (использование unwind)</b>

	db.BSAcol.aggregate([{ $unwind: "$scores" }, { $match: { "scores.type": "exam", "scores.score": { $gt: 90 }}}]);

<b>3. Студентам с именем Dusti Lemmond добавить поле “accepted” со значением true.</b>

	db.BSAcol.update({ "name": "Dusti Lemmond" }, { $set: { "accepted": true }}, { multi: true });
