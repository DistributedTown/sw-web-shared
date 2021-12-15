export const ParseSWErrorMessage = (error: any) => {
  if (!error) {
    return error;
  }

  if (error instanceof TypeError) {
    error = error.message;
  }

  if (typeof error === "object") {
    error = JSON.stringify(error);
  }

  if (typeof error !== "string") {
    throw new Error("SW smart contract error message is not a string!");
  }

  const [, skillWalletMsg] = error.split("execution reverted:");
  const [, message] = (skillWalletMsg || "").split("SkillWallet:");
  return (message || skillWalletMsg || error || "Unknown error").trim();
};
