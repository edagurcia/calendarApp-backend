const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnection = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    const connection = await mongoose.connect(
      process.env.DATABASE_URI,
      options
    );
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`DB online`);
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar base de datos");
  }
};

module.exports = {
  dbConnection,
};
