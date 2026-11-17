"use strict";
// type1
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role === UserRole.SuperAdmin || role === UserRole.Moderator;
}
canEdit(UserRole.SuperAdmin); // true
canEdit(UserRole.Moderator); // true
canEdit(UserRole.Viewer); // false
// type2
const btn = document.querySelector("button");
btn.disabled = true;
