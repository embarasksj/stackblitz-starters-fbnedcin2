const users = [
  {
    id: 12,
    name: 'max',
  },
];

export const getItem = async (ctx) => {
  ctx.status=200;
  ctx.body = users[0];
};


export const deleteItem = async (ctx) => {
  const id =ctx.request.body.id;
  const deletedItem=users.findIndex((u)=>u.id===id);
  if(!~itemIndex){
    ctx.status=403;
    ctx.body='item is not deleted'
  }
  
  users[itemIndex]=null;
  
 
  ctx.status=200;
  ctx.body='success';
};

export const createitem = async (ctx) => {
  const item =ctx.request.body;
  users.push(item);
  ctx.status=200;
  ctx.body='item added'
};
export const updateitem = async (ctx) => {
const id =ctx.request.body?.id;
const name=ctx.request.body?.name;
let user;
if(name !== null){
user=user.find((u)=>u.id===id);
user.name=name;
}
ctx.status=200;
ctx.body=user;
};
