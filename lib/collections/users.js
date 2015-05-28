// Schema = {};
//
// Schema.UserCountry = new SimpleSchema({
//     name: {
//         type: String
//     },
//     code: {
//         type: String,
//         regEx: /^[A-Z]{2}$/
//     }
// });
//
// Schema.UserProfile = new SimpleSchema({
//     // firstName: {
//         type: String,
//         regEx: /^[a-zA-Z-]{2,25}$/,
//         optional: true
//     },
//     lastName: {
//         type: String,
//         regEx: /^[a-zA-Z]{2,25}$/,
//         optional: true
//     },
//     birthday: {
//         type: Date,
//         optional: true
//     },
//     gender: {
//         type: String,
//         allowedValues: ['Male', 'Female'],
//         optional: true
//     },
//     organization : {
//         type: String,
//         regEx: /^[a-z0-9A-z .]{3,30}$/,
//         optional: true
//     },
//     // website: {
//     //     type: String,
//     //     regEx: SimpleSchema.RegEx.Url,
//     //     optional: true
//     // },
//     // bio: {
//     //     type: String,
//     //     optional: true
//     // },
//     country: {
//         type: Schema.UserCountry,
//         optional: true
//     }
// });
//
// Schema.User = new SimpleSchema({
//     username: {
//         type: String,
//         regEx: /^[a-z0-9A-Z_]{3,15}$/
//     },
//     emails: {
//         type: [Object],
//         // this must be optional if you also use other login services like facebook,
//         // but if you use only accounts-password, then it can be required
//         optional: true
//     },
//     "emails.$.address": {
//         type: String,
//         regEx: SimpleSchema.RegEx.Email
//     },
//     "emails.$.verified": {
//         type: Boolean
//     },
//     createdAt: {
//         type: Date
//     },
//     profile: {
//         type: Schema.UserProfile,
//         optional: true
//     },
//     services: {
//         type: Object,
//         optional: true,
//         blackbox: true
//     }
// });
//
// Meteor.users.attachSchema(Schema.User);
