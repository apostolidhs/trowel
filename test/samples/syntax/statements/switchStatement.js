switch(1) {
    case 2: a=b;
    case 3: c=d;
    default: e=f;
    case 4: g=h;
}

switch(item.type) {
  
  case enumerated.one: 
      doSomething("that");
      break;
      
  case enumerated.two: 
      doSomethingElse("that");
      break;

  default:
      console.log("default case");
}