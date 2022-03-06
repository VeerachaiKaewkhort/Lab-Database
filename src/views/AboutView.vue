<template>
  <div class="about">
    <h1>ข้อมูลรายชื่อผู้เสี่ยงติดเชื้อ Covid-19</h1>
    <button @click="addData()">เพิ่มข้อมูล</button>
    <button @click="readData()">อ่านข้อมูล</button>
    <h3>{{ csDoc }}</h3>
    วันที่:<br>
    <input type="date" v-model="date"><br>
    ชื่อ:<br>
    <input type="text" v-model="fname"><br>
    นามสกุล:<br>
    <input type="text" v-model="lname"><br>
    ผลตรวจโควิด:<br>
    <input type="checkbox" v-model="negative">ผลบวก<br>
    <input type="checkbox" v-model="positive">ผลลบ<br>
    เบอร์โทรศัพท์:<br>
    <input type="tel" v-model="tel"><br>
    Email:<br>
    <input type="text" v-model="email"><br>
    <button @click="addData()">บันทึกข้อมูล</button>
  </div>
</template>

<script>
import { collection, addDoc , getDocs } from "firebase/firestore";
import db from "../plugins/firebaselnit";

export default {
  data() {
    return{
      csDoc: [],
      fname:"",
      lname:"",
      date:"",
      tel:"",
      negative:"",
      positive:"-",
      emil:""
    
    };
  },

  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "List"), {
          date: this.date,
          first: this.fname,
          last: this.lname,
          tel: this.tel,
          negative :this.negative,
          positive :this.positive,
          email : this.email
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData(){
      const querySnapshot = await getDocs(collection(db, "List"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.csDoc.push({ id:doc.id, data: doc.data () });
      });
    }
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> 