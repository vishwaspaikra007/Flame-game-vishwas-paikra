 function blur_bgon () {
         document.getElementById("myVideo").style.zIndex = "2";
     }
    function blur_bgoff () {
         document.getElementById("myVideo").style.zIndex = "-2";
     }
     function flame() {
         // variable declaration
        var fname, sname,size, sizef, sizes, i, j, l, k = 0, text = "", check = [], flame = ["f","l","a","m","e"], vblock1, vblock2, vblock3, vblock4, vblock5, save, saveWord, kcount = 0;
         
         //intializing values....................................................................................
         vblock1 = document.getElementById("block1");
         
         // taking values from the form
        fname = document.getElementById("form_for_two_name").elements.namedItem("firstName").value;
        sname = document.getElementById("form_for_two_name").elements.namedItem("secondName").value;
        
        sizef = fname.length;  // length of first name
        sizes = sname.length;  // length of second name
        size = sizef + sizes;  // length of names combined
         
         //output of names and length
        document.getElementById("result").innerHTML = "first name <b><i style='color: white;'>" + fname + "</i></b> Second name <b><i style='color: white;'>" +  sname + "</i></b> " + sizef + sizes + size;
         
        // mathching letters
        for(i=0;i<sizef;i++)
            {
                for(j=0;j<sizes;j++)
                    {
                        if (j === check[j]) {
                            continue;
                        }
                            
                        else if (fname.charAt(i) == sname.charAt(j)) { text += fname.charAt(i) + " ";
                        size -= 2;
                        check[j] = j;
                        break;}
                    }
            }
         document.getElementById("result2").innerHTML = "Matched Letter : <b><i style='color: red;'>" + text + "</i></b>";
         
         // flame algorithm
        for (i=0;i<5;i++)
            {
                go:
                for(j=0;j< size;j++)
                    {    
                        // popup();
                            if(i === 0) {
                                document.getElementById("block1").style.display = "block";
                                document.getElementById("block1").innerHTML = "<button class='close' onclick='close1()'><b>V</b></button>" + "<br><h3>" + flame + "</h3><br><p id='pop_para' align='center' width='100%'>Are you ready for the <b>Flame</b></p>";
                            }
                            if(i === 1) {
                                document.getElementById("block2").style.display = "block";
                                if(save === 0) {
                                    saveWord = "Friends";
                                }
                                if(save === 1) {
                                    saveWord = "Lovers";
                                }
                                if(save === 2) {
                                    saveWord = "Attracted";
                                }
                                if(save === 3) {
                                    saveWord = "Married";
                                }
                                if(save === 4) {
                                    saveWord = "Enemy";
                                }
                                
                                document.getElementById("block2").innerHTML = "<button class='close' onclick='close2()'><b>V</b></button>" + "<br><h3>" + flame + "</h3><br><p id='pop_para' align='center' width='100%'>So both of you are not <b>" + saveWord + "</b></p>";
                            }
                            if(i === 2) {
                                document.getElementById("block3").style.display = "block";
                                if(save === 0) {
                                    saveWord = "Friends";
                                }
                                if(save === 1) {
                                    saveWord = "Lovers";
                                }
                                if(save === 2) {
                                    saveWord = "Attracted";
                                }
                                if(save === 3) {
                                    saveWord = "Married";
                                }
                                if(save === 4) {
                                    saveWord = "Enemy";
                                }
                                document.getElementById("block3").innerHTML = "<button class='close' onclick='close3()'><b>V</b></button>" + "<br><h3>" + flame + "</h3><br><p id='pop_para' align='center' width='100%'>Neither <b>" + saveWord + "</b></p>";
                            }
                             if(i === 3) {
                                document.getElementById("block4").style.display = "block";
                                 if(save === 0) {
                                    saveWord = "Friends";
                                }
                                if(save === 1) {
                                    saveWord = "Lovers";
                                }
                                if(save === 2) {
                                    saveWord = "Attracted";
                                }
                                if(save === 3) {
                                    saveWord = "Married";
                                }
                                if(save === 4) {
                                    saveWord = "Enemy";
                                }
                                 document.getElementById("block4").innerHTML = "<button class='close' onclick='close4()'><b>V</b></button>" + "<br><h3>" + flame + "</h3><br><p id='pop_para' align='center' width='100%'>Neither <b>" + saveWord + "</b></p>";
                            }  
                            if(i === 4) {
                                document.getElementById("block5").style.display = "block";
                                if(save === 0) {
                                    saveWord = "Friends";
                                }
                                if(save === 1) {
                                    saveWord = "Lovers";
                                }
                                if(save === 2) {
                                    saveWord = "Attracted";
                                }
                                if(save === 3) {
                                    saveWord = "Married";
                                }
                                if(save === 4) {
                                    saveWord = "Enemy";
                                }
                                document.getElementById("block5").innerHTML = "<button class='close' onclick='close5()'><b>V</b></button>" + "<h3><br>" + flame + "</h3><br><p id='pop_para' align='center' width='100%'>Neither <b>" + saveWord + "</b></p>";
                            }
                        // algo for removing of letters
                        if(flame[k] === undefined)
                            {
                                k++;j--;
                                if (k >=5) {
                                k=0;
                                }
                                continue go;
                            }
                        if(i === 4) {
                            break;
                        }
                        if (j === size-1) {
                            delete flame[k];
                            save = k;
                            kcount += k;
                        }
                        k++;
                        if (k >=5) {
                            k=0;
                        }
                    }
               if(i === 4) {
                                document.getElementById("block6").style.display = "block";
                                if(kcount === 6) {
                                    saveWord = "Enemy";
                                }
                                if(kcount === 7) {
                                    saveWord = "Married";
                                }
                                if(kcount === 8) {
                                    saveWord = "Attracted";
                                }
                                if(kcount === 9) {
                                    saveWord = "Lovers";
                                }
                                if(kcount === 10) {
                                    saveWord = "Friends";
                                }
                                document.getElementById("block6").innerHTML = "<button class='close' onclick='close6(); blur_bgoff();'><b>V</b></button>" + "<h3><br>" + flame + "</h3><br><p id='pop_para' align='center' width='100%'>So both of you are <b>" + saveWord + "</b></p>";
                            } 
              }  
         if(k === 0) {
         document.getElementById("result3").innerHTML = flame[k] + "--><b><i style='color: white;'>" + fname + "</i></b> and <b><i style='color: white;'>" + sname + "</i></b> are going to be very good<b style='color: white'> friends</b>.NO matter what they will help each other in every situation. The Friendhip between the two will exist forever.";
         }
         else if(k === 1) {
         document.getElementById("result3").innerHTML = flame[k] + "--><b><i style='color: white;'>" + fname + "</i></b> and <b><i style='color: white;'>" + sname + "</i></b> are sure have been fallen in <b style='color: white'>love</b> and if not they will soon. They are going to live their live happily and will share their love with each other. Love between the two is unfathomable.";
         }
         else if(k === 2) {
         document.getElementById("result3").innerHTML = flame[k] + "--><b><i style='color: white;'>" + fname + "</i></b> and <b><i style='color: white;'>" + sname + "</i></b> are <b style='color: white'>atrracted</b> to each other and if not both, atlest one of them is for sure. This infatuation is good for them because during this period they might discover some of the most memorablempart of their life." ;
         }
         else if(k === 3) {
         document.getElementById("result3").innerHTML = flame[k] + "--><b><i style='color: white;'>" + fname + "</i></b> and <b><i style='color: white;'>" + sname + "</i></b> are <b style='color: white'>married</b> to each other and if not soon they will be. Both know each other well but even great thing to know about is that your parents will help you to have your marriage arranged. Nothing is better than an arranged marriage.";
         }
         else if(k === 4) {
         document.getElementById("result3").innerHTML = flame[k] + "--><b><i style='color: white;'>" + fname + "</i></b> and <b><i style='color: white;'>" + sname + "</i></b> Both of you are crazy and live your life according to your own rules and regulation and these rules and regulations will cause both of you to become <b style='color: white'>enemy</b>. Probabily both of you hate each other from the core of the heart. Interaction may cause each other's life to go miserable. Better stay away from each other.";
         }
         else {
         document.getElementById("result3").innerHTML = "there is some error try refreshing the the page.";
         }   
    }
    
    // pop script.................................................... pop script
    
       function close1() {
           document.getElementById("block1").style.display = "none";
       }function close2() {
           document.getElementById("block2").style.display = "none"; 
       }function close3() {
           document.getElementById("block3").style.display = "none";
       }function close4() {
           document.getElementById("block4").style.display = "none";
       }function close5() {
           document.getElementById("block5").style.display = "none";
           
       }function close6() {
           document.getElementById("block6").style.display = "none";
           
       }
    
    // volume function .....................................
    function volumeclose() {
        document.getElementById("volup").style.display = "none"; document.querySelector('audio').volume = 0;
        document.getElementById("voldo").style.display = "block";
    }
    function volumeon() {
        document.getElementById("voldo").style.display = "none";
        document.getElementById("volup").style.display = "block";  document.querySelector('audio').volume = 1;
    }
        
        