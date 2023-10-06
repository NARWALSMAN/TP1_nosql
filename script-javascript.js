// connection à la base de données nommée 'my_db'
connection=new Mongo();
mydb=connection.getDB('tpmongo'); // remplacer my_db par le nom de votre base

mydb.test.drop(); //  Au cas où on a déjà fait des tests
mydb.test.insertOne({"a":1});	// insertion d'un document dans la collection 'test'
mydb.test.insertOne({a:2}); 	// les guillemets sont parfois optionnels dans mongo
mydb.test.insertMany([{a:3},{a:4}]); // insertion de plusieurs documents dans la collection 'test'

// affiche le contenu de la collection
recordset = mydb.test.find();
print("Contenu de la collection test :");
while ( recordset.hasNext() ) {
   printjson( recordset.next() );
}
