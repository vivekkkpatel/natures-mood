const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-500/10 backdrop-blur-xl border border-red-400/40 text-red-200 px-6 py-3 rounded-2xl text-center shadow-lg">
      {message}
    </div>
  );
};

export default ErrorMessage;