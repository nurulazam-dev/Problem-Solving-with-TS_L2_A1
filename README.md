1. What are some differences between interfaces and types in TypeScript?

   > interface মূলত object এর structure define করতে ব্যবহার করা হয়। আর type ব্যবহার করা হয় জটিল type/union/utility টাইপের জন্য। interface এর ক্ষেত্রে interface একাধিক বার ঘোষণা করলে বা লিখলে declaration mergin হয়। অর্থাৎ, তারা একত্রে মিলবে। অন্যদিকে, type এর ক্ষেত্রে declaration mergin হয় না। অর্থাৎ একই নাম দিয়ে ঘোষণা করলে error হবে।

2. What is the use of the keyof keyword in TypeScript? Provide an example.

   > সাধারণত TypeScript এ `keyof` keyword ব্যবহার করা হয় কোন object type এর সব প্রপার্টির নামগুলোকে একটি union টাইপ হিসেবে পাওযার জন্য। এটি মূলত টাইপ-সেফ প্রপার্টি access ও generic ফাংশনে ভুল key ব্যবহার থেকে আমাদের রক্ষা করে।
- For Example:
```bash
type User = {id: number; name:string; active: boolean;}
type UserKeys = keyof User
```
> Output: "id" | "name" | "active"
