const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
}
const hasMixed = value => {
  return new RegExp(/[a-z]/).test(value) &&
           new RegExp(/[A-Z]/).test(value);
}
const hasSpecial = value => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
}

export const strengthIndicator = (value) => {
  console.log(value,"hiiiiiiiiiiiii")
  let strengths = 0;
  if (value.length > 5)
     strengths++;
  if (value.length > 7)
     strengths++;
  if (hasNumber(value))
     strengths++;
  if (hasSpecial(value))
     strengths++;
  if (hasMixed(value))
     strengths++;
  return strengths;
}