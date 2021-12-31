export const dataInfoForm = (dt) => {
  const data = [
    {
      label: "Name",
      content: dt?.name,
    },
    {
      label: "Email",
      content: dt?.email,
    },
    {
      label: "Phone",
      content: dt?.phone,
    },
    {
      label: "ID Group",
      content: dt?.groupId,
    },
    {
      label: "Type",
      content: dt?.typeUser,
    },
  ];
  return data;
};
