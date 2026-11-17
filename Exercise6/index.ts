
// type1
enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer"
}

function canEdit(role: UserRole) {
  return role === UserRole.SuperAdmin || role === UserRole.Moderator;
}

canEdit(UserRole.SuperAdmin); // true
canEdit(UserRole.Moderator); // true
canEdit(UserRole.Viewer); // false


// type2
const btn = document.querySelector("button") as HTMLButtonElement;
btn.disabled = true; 
