function main(args) {
  let res;
  console.log(args)
  if (!args.keyword) {
    res = "no keyword";
      return {"body": res}
    }
    res = "Kautiya says " + args.keyword;
  return {"body": res}
}
  
