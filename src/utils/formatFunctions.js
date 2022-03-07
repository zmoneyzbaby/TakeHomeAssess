export const formatYmd = (date) => date.toISOString();

// export const formatFullName = (first, last) => {
//   const formatF = first.trim().charAt(0).toUpperCase() + first.slice(1);
//   const formatL = last.trim().chat(0).toUpperCase() + last.slice(1);
//   const formattedName = formatF + formatL;
//   return formattedName;
// };

export const formatPhone = (phone, ext) => {
  var formattedPhone = "";
  const digits = phone.toString().trim();

  formattedPhone =
    "(" +
    digits.slice(0, 3) +
    ")" +
    "-" +
    digits.slice(4 - 7) +
    "-" +
    digits.slice(7, 11);

  if (ext) {
    formattedPhone = formattedPhone + " Ext: " + ext.toString();
  }

  return formattedPhone;
};

export const formatBuilder = (builder) => {
  return {
    createdAt: formatYmd(new Date()),
    fullName: builder.firstName + " " + builder.lastName,
    phone: formatPhone(builder.phone, builder.ext),
    email: builder.email,
    address: {
      area: builder.area,
      description: builder.address,
    },
    id: builder.id,
  };
};
