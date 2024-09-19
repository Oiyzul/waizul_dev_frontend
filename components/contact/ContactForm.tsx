import { motion } from "framer-motion";

type PropTyes = {
  handleSubmit: any;
  loading: boolean;
  error: string;
  success: string;
};
const ContactForm = ({ handleSubmit, loading, error, success }: PropTyes) => {
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="flex flex-col gap-5"
    >
      <span>Dear Md. Waizul Haque,</span>
      <input
        type="text"
        name="to_name"
        id=""
        className="hidden"
        value={"Md. Waizul Haque"}
      />
      <textarea
        rows={6}
        className="bg-transparent border-b-2 border-b-white outline-none resize-none"
        name="message"
        placeholder="Write a message..."
        required
      />
      <span>My mail address is:</span>
      <input
        name="from_email"
        type="email"
        className="bg-transparent border-b-2 border-b-white outline-none"
        placeholder="My email is..."
        required
      />

      <span>Regards</span>
      <input
        name="from_name"
        type="text"
        className="bg-transparent border-b-2 border-b-white outline-none"
        placeholder="My name is..."
        required
      />
      <button className="p-5 border-none bg-cyan-700 hover:bg-cyan-800 cursor-pointer font-medium">
        {loading ? "Sending..." : "Submit"}
      </button>

      {success && (
        <p className="text-green-700">Your mail has been received.</p>
      )}
      {error && <p className="text-red-700">'Something went wrong'{error}</p>}
    </motion.form>
  );
};

export default ContactForm;
