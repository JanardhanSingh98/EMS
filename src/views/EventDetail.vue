<template>
    <div class="crousel">
      <v-container >
        <v-layout row wrap>
          <v-flex xs12>
            <v-carousel
            hide-delimiter-background
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
            height="400"
            >
              <v-carousel-item
                v-for="(item, id) in items"
                :key="id"
                :src="item.content"
                reverse-transition="slide-x-reverse-transition"
                transition="slide-x-transition"
              >
              
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="ma-4">
              <v-row>
                <v-col cols="12" sm="12" md="" lg="9">
                  <div >
                    <span class="font-weight-bold display-1" > Out of Context - An English Poetry Club - Baner </span>
                    <br>
                    <br>
                    <v-chip outlined>Entertainment</v-chip>
                    <v-list shaped  >

                      
                        <v-list-item  >
                      
                          <v-list-item-icon>
                            <v-icon color="blue" left>
                              mdi-crosshairs-gps
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title class="font-weight-light subtitle-2" >
                              Mandai Market, Amrale Road, Mandai, Shukrawar Peth, Pune, Maharashtra, India
                            </v-list-item-title>
                          </v-list-item-content>

                        </v-list-item>
                      


                      <v-list-item>
                        <v-list-item-icon>
                              <v-icon color="blue" class="" left>
                                mdi-update
                              </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title class="font-weight-light subtitle-2 ">
                                Nov 24th 2019
                              </v-list-item-title>
                            </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                  
                  <div>
                    <v-tabs background-color="transparent">
                      <v-tab>
                        Details
                      </v-tab>
                      <v-tab-item>
                        <br>
                        <v-container background-color="transparent" color="blue">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit. Itaque, hic recusandae sunt, sint deleniti odit dolores facere autem quam doloribus similique! Dolores ab vel obcaecati quas error tenetur.
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, molestiae? Ea vero culpa dolores suscipit quisquam autem tempora dolor doloremque nemo! Tenetur consequuntur dignissimos voluptatibus reprehenderit quam quod nobis. Harum!
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quia? Quasi ratione ex eveniet aut sint consequatur inventore corrupti alias omnis accusantium provident, nihil ut magnam, assumenda sapiente. Nihil, maiores.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo expedita asperiores error, facere blanditiis quibusdam necessitatibus unde fugiat consequuntur consequatur sequi deleniti exercitationem cum aut possimus dolore. Ad, sequi?
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, obcaecati quasi, laboriosam voluptatum accusamus ad doloribus ea hic soluta deleniti consectetur eos earum sapiente veniam distinctio, velit debitis! Ipsum, non.
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed beatae in repellat suscipit repellendus odit voluptate sapiente, tenetur cumque deserunt modi nam aliquam qui molestiae et error pariatur quod vero!
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores deleniti quae accusamus. Voluptates voluptatibus dolorem a commodi ex enim voluptate quos quas quae, quod soluta natus dolorum, in laboriosam.
                      
                        </v-container>
                      </v-tab-item>

                      <v-tab>
                        Venue
                      </v-tab>
                      <v-tab-item>
                        abc
                      </v-tab-item>
                    </v-tabs>

                    <v-tabs-items >
                      <v-tab-item>
                        <v-card >
                          <v-card-text>acd</v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs-items>

                  </div>
                </v-col>

                <v-col cols="12" sm="12" md="" lg="3">
                  <div class="text-center"  >
                    <v-btn width="800" rounded color="primary" dark>Register</v-btn>
                  </div><br>
                  <div class="text-center" elevation>
                    <span class="font-weight-bold title ">Organiser Contact</span>
                    <br>
                    <div>

                      <v-list background-color="blue">

                        <v-list-item background-color="blue">
                          <v-list-item-icon>
                            <v-icon color="blue" right>
                              mdi-face
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title class="text-left font-weight-light subtitle-2" >
                              SPW Expedition
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-icon>
                            <v-icon color="blue" class="" right>
                              mdi-cellphone-iphone
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title class="text-left font-weight-light subtitle-2 ">
                              9431455187
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-icon>
                            <v-icon color="blue" class="" right>
                              mdi-gmail
                            </v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title class="text-left font-weight-light subtitle-2 ">
                              contact@eventbeep.com
                            </v-list-item-title>
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