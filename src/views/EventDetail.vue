<template>
  <div class="crousel">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-img
            max-height="400"
            src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/12/16131147/future-phone-mobile-live-events-technology-trends.png"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="ma-4">
            <v-row>
              <v-col cols="12" sm="12" md lg="9">
                <div>
                  <span class="font-weight-bold display-1">{{get.ename}}</span>
                  <br />
                  <br />
                  <v-chip outlined>{{get.ecato}}</v-chip>
                  <v-list shaped>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="blue" left>mdi-crosshairs-gps</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-light subtitle-2">{{get.adress}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="blue" class left>mdi-update</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          class="font-weight-light subtitle-2"
                        >{{get.date1}} to {{ get.date2 }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>

                <div>
                  <v-tabs background-color="transparent">
                    <v-tab>Details</v-tab>
                    <v-tab-item>
                      <br />
                      <div>
                        <ckeditor
                          :editor="editor"
                          :disabled="editorDisabled"
                          v-model="get.editorData"
                        ></ckeditor>
                      </div>
                      <!--<v-container background-color="transparent" color="blue">
                         {{get.editorData}}
                      </v-container>-->
                    </v-tab-item>

                    <v-tab>Venue</v-tab>
                    <v-tab-item>{{get.adress}}</v-tab-item>
                  </v-tabs>

                  <v-tabs-items>
                    <v-tab-item>
                      <v-card>
                        <v-card-text>acd</v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </div>
              </v-col>

              <v-col cols="12" sm="12" md lg="3">
                <div class="text-center">
                  <v-btn
                    width="800"
                    rounded
                    color="primary"
                    v-bind:disabled="get.date1 <= currentDate"
                  >Register</v-btn>
                </div>
                <br />
                <div class="text-center" elevation>
                  <span class="font-weight-bold title">Organiser Contact</span>
                  <br />
                  <div>
                    <v-list background-color="blue">
                      <v-list-item background-color="blue">
                        <v-list-item-icon>
                          <v-icon color="blue" right>mdi-face</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            class="text-left font-weight-light subtitle-2"
                          >{{get.oname}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="blue" class right>mdi-cellphone-iphone</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            class="text-left font-weight-light subtitle-2"
                          >{{get.ophone}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="blue" class right>mdi-gmail</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            class="text-left font-weight-light subtitle-2"
                          >{{get.oemail}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import { db, fb } from "@/firebase";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data: () => ({
    currentDate: new Date().toJSON().slice(0, 10).replace(/-/g, "-"),
    id: null,
    get: {
      ename: null,
      ecato: null,
      date1: null,
      date2: null,
      editorData: null,
      oname: null,
      ophone: null,
      oemail: null,
      adress: null,
      add_date: null,
      edit_date: null,
    },
    editor: ClassicEditor,
    editorDisabled: true,
  }),
  created() {
    fb.auth().currentUser;
    this.id = this.$route.params.id;
    db.collection("events")
      .doc(this.id)
      .get()
      .then((doc) => {
        this.get = doc.data();
        console.log(doc.data());
      });
  },
};
</script>
