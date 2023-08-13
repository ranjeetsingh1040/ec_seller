export default function ({ app, redirect, route }) {
  console.log(route.name);  
  if (app.$auth.loggedIn) {
    if(app.$auth.user.profileStatus==1)
    {
      return redirect({name: 'dashboard'});
    }
  }
}
