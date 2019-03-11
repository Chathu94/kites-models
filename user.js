module.exports = {
  default: (mongoose, Blocks) => {
    const { Schema } = mongoose;

    return class User extends Blocks.Model {
      constructor() {
        const structure = new mongoose.Schema({
          name: { type: String, required: true },
          username: { type: String, required: true },
          password: { type: String, required: true },
          token: { type: String }
        });
        super({ structure, application: "auth", name: "User" });
      }
    };
  }
};
