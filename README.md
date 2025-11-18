1. What are some differences between interfaces and types in TypeScript?

   > interface মূলত object এর structure define করতে ব্যবহার করা হয়। আর type ব্যবহার করা হয় জটিল type/union/utility টাইপের জন্য। interface এর ক্ষেত্রে interface একাধিক বার ঘোষণা করলে বা লিখলে declaration mergin হয়। অর্থাৎ, তারা একত্রে মিলবে। অন্যদিকে, type এর ক্ষেত্রে declaration mergin হয় না। অর্থাৎ একই নাম দিয়ে ঘোষণা করলে error হবে।

2. What is the use of the keyof keyword in TypeScript? Provide an example.

   > TypeScript এ keyof keyword ব্যবহার করা হয়
