import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from 'src/app/global.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'రచయిత ముందుమాట',
      url: '/home',
      icon: 'pencil',
      sub: null
    }, 
    {
      title: 'ఉత్తరములు',
      url: '/introduction',
      icon: 'pencil',
      sub: null
    }, 
    {
      title: 'KISS ముఖ్య ఉద్దేశ్యములు',
      url: '/kiss',
      icon: 'pencil',
      sub: null
    }, 
    {
      title: 'గ్రంథము వ్రాయుటకు ప్రేరణ',
      url: '/about-us',
      icon: 'information',
      sub: null
    },
    {
      title: 'జ్ఞాన వాక్యములు',
      url: '/content-details',
      icon: 'list',
      sub: [
        {

          idx: 1,
          padyam: `1. ఖురాన్ గ్రంథము సమస్త మానవాళికి సంబంధించినది`
        },
        {

          idx: 2,
          padyam: `2. స్థూలవాక్యములు ( ముహ్కమాత్ ) -సూక్ష్మ వాక్యములు( ముతషాబిహత్ ) ఖుర్ఆన్ గ్రంథములో గలవు `
        }
        ,
        {
          idx: 3,
          padyam: `3. సూక్ష్మ వాక్యముల జ్ఞానము దేవునికే తెలుసు. సూక్ష్మజ్ఞానమును ( ముతషాబిహాత్ ) బుద్ధి , శ్రద్ధ కలవారు గ్రహిస్తారు`
        },
        {

          idx: 4,
          padyam: `4. దేవుడు అవతరిస్తాడు . దేవుడు ఎలా అవతరిస్తాడు`
        },
        {

          idx: 5,
          padyam: `5. దేవునికి మాత్రమే తెలిసిన ముతషాబిహాత్  వాక్యముల వివరము మనుషులు ఎప్పుడు గ్రహించగలరు ?`
        },
        {

          idx: 5,
          padyam: `6. దైవజ్ఞానమునకు అసత్యాలను ఆపాదిస్తే నరకాన్ని తప్పదు దేవుడు చూస్తున్నాడు`
        },
        {
          idx: 6,
          padyam: `7."భూమిని ఎడా పెడా దంచినపుడు" వాక్య అంతరార్థము దేవుడు భూమిమీద భగవంతునిగా వస్తాడు`
        },
        {

          idx: 7,
          padyam: `8. ఖురాన్ మాతృగ్రంథములో యున్నది`
        },
        {

          idx: 8,
          padyam: `9. ఏసు తనకు పూర్వము వచ్చిన తౌరాత్ గ్రంథమును ధృవీకరించేవాడు . ఏసుకు ఇంజీల్ గ్రంథము ఇవ్వబడినది ఇంజీల్ లో సత్యము - మార్గదర్శకము ఉన్నాయి`
        },
        {
          idx: 9,
          padyam: `10. ఖుర్ఆన్ సత్యమైనది మరియు పూర్వపు గ్రంథములను ధృవీకరిస్తుంది`
        },
        {

          idx: 9,
          padyam: `11. తౌరాత్ , ఇంజీల్ , ఖుర్ఆన్ మూడు గ్రంథములు సర్వులకూ ధర్మమార్గములో ఆవశ్యకం`
        },
        {
          idx: 9,
          padyam: `12. తౌరాత్ గ్రంథము మార్గదర్శిని , జ్యోతిర్మయి - పూర్వము సమస్యల పరిష్కారిణిగా అందరికీ ఆమోదయోగ్యమైనది`
        },
        {
          idx: 9,
          padyam: `13. తౌరాత్ గ్రంథమును స్వీకరించక ఇతర గ్రంథములను స్వీకరించిన , దేవుని వాక్యములను ధిక్కరించినట్లే`
        },
        {

          idx: 10,
          padyam: `14. దేవుడు ముగ్గురుగా లేడు , దేవుడు ఒక్కడే ( ముగ్గురు దేవుళ్ళు లేరు )`
        },
        {
          idx: 11,
          padyam: `15. గ్రంథ జ్ఞానమును ( దాచి పెట్టి ) మార్చి చెప్పితే శాపాలపాలు అవుతారు`
        },
        {

          idx: 12,
          padyam: `16. దైవమార్గములో చంపబడితే వారు మృతులు కారు`
        },
        {
          idx: 13,
          padyam: `17. ఇహముకన్నా పరమే శాశ్వతము . స్త్రీ , పురుషులకు కూడా పరలోక ప్రాప్తి కలదు`
        },
        {

          idx: 14,
          padyam: `18. మట్టితో సృష్టించాడు , కర్మప్రకారమే మరణములను , జన్మలను ఏర్పరచాడు.`
        },
        {

          idx: 15,
          padyam: `19. పునర్జన్మలున్నాయి`
        },
        {

          idx: 15,
          padyam: `20. పునర్జన్మలను తిరస్కరిస్తే కలకాలం నరకప్రాప్తే`
        },
        {

          idx: 16,
          padyam: `21. జననము - మరణము - పునర్జన్మ కల్పించేవాడు దేవుడే`
        },
        {

          idx: 16,
          padyam: `22. వృద్ధునిగా మరణించినా , శిశువుగా జన్మిస్తావు`
        },
        {

          idx: 16,
          padyam: `23. పునర్జన్మలు పునర్మరణములు కలవు`
        },
        {

          idx: 17,
          padyam: `24. 'ధర్మస్థాపనకు రక్తపాతమును సృష్టించేవారు వద్దన్నారు ”  దేవదూతలు`
        },
        {
          idx: 18,
          padyam: `25. దేవుడు మనిషిగా అవతరిస్తే సాష్టాంగపడవచ్చు`
        },
        {

          idx: 19,
          padyam: `26. దేవుడు అవతరిస్తాడు ఇబ్లీసు మాత్రమే సాష్టాంగ పడడు`
        },
        {

          idx: 20,
          padyam: `27. దైవధర్మమును వక్రంపట్టించేవాడే ఇబ్లీసు దైవదాసుల మీద మాత్రమే ఇబ్లీసు ఆటకట్టు`
        },
        {
          idx: 21,
          padyam: `28. అవిశ్వాసులు విశ్వసించరు . ఆయన తన మార్గము వారికి చూపడు`
        },
        {
          idx: 22,
          padyam: `29. సత్యతిరస్కారులు దైవజ్ఞానం అర్థం చేసుకోలేరు`
        },
        {
          idx: 23,
          padyam: `30. భూమ్యాకాశాలను మరియు సప్తాకాశాలను దేవుడే  సృష్టించాడు`
        },
        {

          idx: 24,
          padyam: `31. అగోచర ( ఇంద్రియాతీత ) రహస్యాలు అల్లాహ్ కే స్వంతం`
        },
        {

          idx: 24,
          padyam: `32. సమస్తము తెలిసినవాడు , అందరినీ చూచేవాడు`
        },
        {

          idx: 25,
          padyam: `33.  దేవుడు ఒక్కడే`
        },
        {

          idx: 26,
          padyam: `34. కునుకు నిద్రలేనివాడు , నినుస్త ఆధారుడు సమస్తజ్ఞానమునకు అధిపతి , ఆయన సర్వవ్యాపి`
        },
        {

          idx: 26,
          padyam: `35. ఆరాధనలకు అర్హుడు దేవుడే అని , జ్ఞానులు , దేవదూతలు , దేవుడు మాత్రమే ఎరుగుదురు . సమస్త ప్రాణుల జుట్టు ఆయన చేతిలో ఉన్నది`
        },
        {
          idx: 26,
          padyam: `36. దేవుడు కోరినవారి దూతల ద్వారా జ్ఞానాన్ని అందిస్తాడు`
        },
        {

          idx: 27,
          padyam: `37. ధర్మము విషయంలో బలవంతము ఉండరాదు`
        },
        {
          idx: 28,
          padyam: `38. మానవులు - జిన్నాతులు ( దేవతలు ) దేవున్ని ఆరాధించుటకే పుట్టబడినారు`
        },
        {

          idx: 29,
          padyam: `39. జిన్నాతులకు ( దేవతలకు ) కూడా పునర్జన్మ కలదు`
        },
        {

          idx: 29,
          padyam: `40. జిన్నాతులకు ( దేవతలకు ) హెచ్చు , తగ్గు జన్మలు తప్పవు `
        },
        {

          idx: 30,
          padyam: `41. దేవుడు ఒక్కడే , నిరాధారుడు , సంతానరహితుడు , ఎవరిబిడ్డడూ కాదు , ఆయనకు సాటి లేదు`
        },
        {

          idx: 31,
          padyam: `42. కర్మపత్రము - తప్పుఒప్పుల పట్టిక , మానవుని మెడలోనే వ్రేలాడదీయబడి వున్నది`
        },
        {

          idx: 32,
          padyam: `43. దేవుడు పాపములను క్షమిస్తాడు , సమస్త పాపములు ( కర్మలు ) క్షమించబడుటయే ఆయన అపారకరుణ`
        },
        {

          idx: 33,
          padyam: `44. దేవుడు సమస్త ప్రాణులకు మరణానంతరం ఏ జన్మనైనా ఇస్తాడు`
        },
        {

          idx: 34,
          padyam: `45. పునర్జన్మలను విశ్వసించనివాడు దైవాన్ని విస్మరించిన వాడు మరియు దేవునికి అబద్ధములు అంటగట్టేవాడు`
        },
        {

          idx: 35,
          padyam: `46. పునర్జన్మ విషయము అతీంద్రియమైనది`
        },
        {

          idx: 36,
          padyam: `47. సమస్త ప్రాణుల చావు , పుట్టుక ( పునర్జన్మము ) కర్మరీత్యా అల్లాహ్ చేతిలోనే ఉన్నాయి`
        },
        {
          idx: 37,
          padyam: `48. అండజములు , పిండజములు , ఉద్భిజములు దేవుని సృష్టియే`
        },
        {

          idx: 37,
          padyam: `49. చావు పుట్టుకలు ఆయన చేతిలోనివే మరణించిన వానిని తిరిగి పుట్టించేదీ ఆయనే !`
        },
        {

          idx: 37,
          padyam: `50. తెరాత్ గ్రంథము ( జనన , మరణములను , ధృవీకరిస్తుంది ) అది ముస్లీమ్యిన ప్రవక్తలకు , యూదులకు సమస్యల పరిష్కారిణి`
        },
        {

          idx: 38,
          padyam: `51. పూర్వపు గ్రంథాలను ఖుర్ఆన్ ధృవీకరిస్తుంది . ఈ విషయములో తిరస్కారులుగా ఉండకండి`
        },
        {

          idx: 38,
          padyam: `52. ఖురాన్ దైవ గ్రంథము , అది పూర్వగ్రంథముల ధృవీకరణ`
        },
        {
          idx: 38,
          padyam: `53. పూర్వగ్రంథముల ముఖ్య విషయాలను విపులీకరించేది ఖుర్ఆన్`
        },
        {

          idx: 39,
          padyam: `54. దైవ ఆదేశాలు పొందుపరచబడినది తౌరాత్ . తౌరాత్ను కాదని న్యాయనిర్ణయం చేసేవాడు విశ్వాసియే కాడు`
        },
        {

          idx: 40,
          padyam: `55. సమస్త మానవాళికీ ఒక్క దేవుడిని పరిచయం చేస్తుంది . ఆరాధించనివారిని హెచ్చరిస్తుంది`
        },
        {
          idx: 41,
          padyam: `56. దేవున్నీ నిందించే బహుదైవారాధకులను తనకు ఇష్టం లేనివారిని దేవుడే అపమార్గం పట్టిస్తాడు . వారికి మార్గము అర్థము కానివ్వడు`
        },
        {

          idx: 42,
          padyam: `57. జిబ్రయేల్ దూతకాదు , ఆయన “ నమ్మదగిన ఆత్మ ”`
        },
        {

          idx: 43,
          padyam: `58. దేవుడు ఏ మానవునితోనూ ప్రత్యక్షముగా మాట్లాడడు . ఆయన తన జ్ఞానమును మూడు విధముల మానవునికి తెల్పును`
        },
        {

          idx: 44,
          padyam: `59. ప్రతి ప్రాణినీ కనిపెట్టుకునే దూత ఉంటాడు`
        },
        {
          idx: 44,
          padyam: `60. ప్రతి వ్యక్తి ( ప్రతి ప్రాణీ ) తోలేవాడితో , సాక్ష్యమిచ్చే వాడితోనే వస్తాడు`
        },
        {

          idx: 45,
          padyam: `61. విశ్వాసుల మార్గములో అవిశ్వాసులు ప్రవేశించలేరు`
        },
        {
          idx: 46,
          padyam: `62. ప్రవక్త హెచ్చరించేవాడు మాత్రమే , ప్రవక్తలు , దూతలు ఆరాధింపబడేవారు కాదు`
        },
        {

          idx: 46,
          padyam: `63. ముహమ్మద్ ఎవరికీ తండ్రికాడు . చివరి ప్రవక్త`
        },
        {

          idx: 47,
          padyam: `64. దేవుడొక్కడే అగోచరజ్ఞాని`
        },
        {

          idx: 47,
          padyam: `65. తన ఇష్ట ప్రవక్తకు మాత్రమే అగోచరాన్ని తెలుపును. అలాంటివానికి పహారాదారులను నియమిస్తాడు`
        },
        {

          idx: 48,
          padyam: `66. ముహమ్మదకు పూర్వ ప్రవక్తలు పురుషులే . వారు  అన్నం తినేవారే`
        },
        {

          idx: 49,
          padyam: `67. ఖుర్ఆన్ గౌరవప్రదమైనది . సురక్షిత గ్రంథములో వ్రాయబడినది . లోకేశ్వరుని తరపున వచ్చినది పరిశుద్ధులు మాత్రమే ముట్టుకోగలరు`
        },
        {

          idx: 50,
          padyam: `68. సర్వులూ ఒకేప్రాణితో పుట్టించబడ్డారు . నివాసస్థలము , అప్పగింత `
        },
        {
          idx: 51,
          padyam: `69. పరలోకప్రాప్త గమ్యము , అది దేవునివద్దే ఉన్నది`
        },
        {
          idx: 51,
          padyam: `70. జన్మల సంస్కారులకే శాంతినిలయము`
        },
        {

          idx: 51,
          padyam: `71. అంతిమ గృహము మేలైనది`
        },
        {

          idx: 51,
          padyam: `72. పరలోకము మీకు ఏమాత్రం తెలియదు`
        },
        {
          idx: 51,
          padyam: `73. గడువు తీరితే ప్రభువు సాన్నిధ్యం`
        },
        {
          idx: 51,
          padyam: `74. ముక్తి – నరకాగ్ని`
        },
        {

          idx: 51,
          padyam: `75. ఇహలోకం – పరలోకం`
        },
        {

          idx: 51,
          padyam: `76. ప్రథమం - ఇహలోకం , అంతిమం – పరలోకం`
        },
        {

          idx: 51,
          padyam: `77. దేవుడు ఇచ్చేదే మోక్షం . దేవదూతలు & ( ఆ విషయంలో ) అశక్తులు`
        },
        {
          idx: 52,
          padyam: `78. రెండు తూర్పులు - రెండు పడమరలు`
        },
        {

          idx: 52,
          padyam: `79. దేవుడే కార్యకర్త`
        },
        {

          idx: 53,
          padyam: `80. దేవుని ప్రసాదం ! పునరావృతమయ్యే ఏడు ఆయత్ లు `
        },
        {

          idx: 54,
          padyam: `81. అనవసర విషయాలు – విచారణ`
        },
        {

          idx: 54,
          padyam: `82. రేపు చేస్తానని చెప్పకు ( నీవు ఏమీ చేయలేవు )`
        },
        {

          idx: 55,
          padyam: `83. జ్ఞాన విముఖత - సన్మార్గ భ్రష్టత`
        },
        {

          idx: 56,
          padyam: `84. నేటి ఈ దినం – ప్రళయదినమే`
        },
        {

          idx: 57,
          padyam: `85. ప్రళయము తథ్యం - ప్రభవము తథ్యం`
        },
        {

          idx: 58,
          padyam: `86. మరణము పిదప జననం . ఇహంలోనే , స్త్రీ - పురుషులుగా జన్మలు ( పునర్జన్మ కలదు )`
        },
        {

          idx: 58,
          padyam: `87. దైవసూచనలకు పెడార్థం కల్పిస్తే నరకాగ్ని తప్పదు`
        },
        {

          idx: 58,
          padyam: `88. అంతిమదినము - ఎవరి సిఫారసూ పనికిరాదు`
        },
        {
          idx: 58,
          padyam: `89. సిరిసంపదలు ఆ రోజు పనికిరావు`
        },
        {

          idx: 58,
          padyam: `90. అంతిమదినం నాడే సఫలీకృతునికి – మోక్షప్రాప్తి`
        },
        {

          idx: 59,
          padyam: `91. నమాజ్ - జకాత్ మాత్రమే దైవమార్గములో ముఖ్యమైనవి`
        },
        {

          idx: 59,
          padyam: `92. సహనము మరియు నమాజ్ మేలైనవి`
        },
        {

          idx: 60,
          padyam: `93. బహుదైవారాధకులు వట్టి భ్రమలను అనుసరించే వారే`
        },
        {
          idx: 61,
          padyam: `94. భూమ్యాకాశములలో రేయింబగళ్ళు - దైవభీతి వరులు మాత్రమే ఎరుగుదురు`
        },
        {

          idx: 62,
          padyam: `95. “గ్రంథజ్ఞానమును వక్రీకరిస్తే నాకు కూడా శిక్ష తప్పదు ” అంటున్నాడు మహాజ్ఞాని జిబ్రయేల్ వారు`
        },
        {

          idx: 63,
          padyam: `96. సత్యజ్ఞానమును మంత్రజాలం అంటారు అజ్ఞానులు`
        },
        {

          idx: 63,
          padyam: `97. సృష్ట్యాదిలో మానవజాతి అంతా ఒకే సంఘము ఆ తర్వాతే చీలికలు`
        },
        {

          idx: 63,
          padyam: `98. ప్రతి సమాజమునకూ ఒక ప్రవక్త`
        },
        {

          idx: 64,
          padyam: `99. దైవధర్మమును కాలక్షేపంగా చేస్తే వానిపట్ల దేవుడు కూడా విస్మరిస్తాడు`
        },
        {

          idx: 64,
          padyam: `100. విశ్వపతియైన దైవాన్ని వదలి ఇతరులను ఆరాధిస్తున్నావా ! నీ జుట్టు ఆయన చేతిలో ఉంది.`
        },
        {
          idx: 64,
          padyam: `101. దేవతారాధకులు వట్టి మిథ్యాచారులు `
        },
        {

          idx: 65,
          padyam: `102. తమను తాము వంచించుకునేవారు కఠిన శిక్షకు అర్హులు`
        },
        {
          idx: 66,
          padyam: `103. స్వర్గం కోసం ఇతరులను హతమార్చితే మూడు పాయలుగాయున్న ఆ నరకం తథ్యం`
        },
        {

          idx: 67,
          padyam: `104. నరకపాలకులు - 19 మంది దేవదూతలు`
        },
        {

          idx: 67,
          padyam: `105. జ్ఞానంపట్ల శ్రద్ధవహించు - అవగాహనా బాధ్యత మాదే`
        },
        {
          idx: 68,
          padyam: `106. సుఖాలు కలిగితే పొగిడే మనిషి , కష్టాలువస్తే దైవాన్ని నిందిస్తాడు`
        },
        {

          idx: 69,
          padyam: `107. జ్ఞాపకము దైవానిదే . గుట్టు రట్టు దైవానికి సకలం ఎరుకే`
        },
        {
          idx: 70,
          padyam: `108. భౌతికవాదులు - దైవశాపగ్రస్తులు , దూతలు కూడా శపిస్తారు`
        },
        {
          idx: 71,
          padyam: `109. జనన మరణాలు ఎన్ని పొందినా చిట్టచివరికి అల్లాహ్ యే గమ్యం`,
        },
        {
          idx: 72,
          padyam: `110. మతధర్మాలన్నీ వదలి చివరికి దైవధర్మం స్వీకరించాల్సిందే`,
        },
        {
          idx: 72,
          padyam: `111. అన్య ( మత ) ధర్మాన్ని ఆచరిస్తే పరలోకము దూరమే`,
        },
        {
          idx: 73,
          padyam: `112. నిజదైవాన్ని ఆరాధిస్తే పాపపుణ్యములు తొలుగుతాయి`,
        },
        {
          idx: 74,
          padyam: `113. జ్ఞానం , మార్గదర్శక జ్యోతి , గ్రంథజ్ఞానం అతివాదులకు గిట్టదు`,
        },
        {
          idx: 75,
          padyam: `114. ప్రవక్త మరణిస్తే - మిగతావారు బ్రతికుంటారా ?`,
        },
        {
          idx: 76,
          padyam: `115. మన చావుపుట్టుకలన్నీ ప్రకృతి ద్వారానే దేవుడు కల్పిస్తాడు `,
        },
        {
          idx: 76,
          padyam: `116. మృతభూమికి జీవం పోసేవాడు దేవుడే`,
        },
        {
          idx: 77,
          padyam: `117. దేవతలకూ ( జిన్నాతులకు ) ఆచరణీయమైనది ఖురాన్`,
        },
        {
          idx: 77,
          padyam: `118. మనుషులు ఆరాధించబట్టే జిన్నాతులకు మరింత పొగరు`,
        },
        {
          idx: 78,
          padyam: `119. స్త్రీ పురుషులు ఎవరికైనా వారి పుణ్యమే స్వర్గప్రాప్తి ,పాపమే నరకప్రాప్తి`,
        },
        {
          idx: 79,
          padyam: `120. సంతాన ప్రాప్తి దైవము చేతుల్లోనే`,
        },
        {
          idx: 80,
          padyam: `121. ప్రాణము పోసేది , ప్రాణము తీసేది ఆయనే`,
        },
        {
          idx: 81,
          padyam: `122. దేవునికి భార్యే లేనప్పుడు సంతానం ఎలా కలుగుతుంది ?`,
        },
        {
          idx: 82,
          padyam: `123. దేవుడు తలిస్తే అందరూ ఒక సమాజమే పరీక్షించుటే ఆయన అభిలాష`,
        },
        {
          idx: 83,
          padyam: `124. ఏ మానవమాత్రునిపై దైవసందేశాన్ని అవతరింపచేయలేదు`,
        },
        {
          idx: 84,
          padyam: `125. శనివార విషయము - ప్రళయమున ప్రభువు తీర్పు`,
        },
        {
          idx: 85,
          padyam: `126. విశ్వాసులకు , అవిశ్వాసులకు మధ్యన తెర`,
        },
        {
          idx: 86,
          padyam: `127. జనన మరణముల శిక్షనూ , మోక్షప్రాప్తి శుభవార్తనూ తెల్పునదే ఖుర్ఆన్`,
        },
        {
          idx: 87,
          padyam: `128. బూటకపు దేవతలు కీలుబొమ్మలే . అస్వతంత్రులే`,
        },
        {
          idx: 88,
          padyam: `129. మొదట ఇద్దరు ప్రవక్తలు పంపబడగా , వారికి అండగా మూడవ ప్రవక్త`,
        },
        {
          idx: 89,
          padyam: `130. భూమ్యాకాశములు సమస్తం ఎరిగినవాడు అల్లాహ్ యే !`,
        }, 
        {
          idx: 90,
          padyam: `131. దేవుడే దైవదూతలలో , మానవులలో సందేశహరులుగా ఎంపిక చేసుకొంటాడు`,
        } 
        , 
        {
          idx: 91,
          padyam: `132.దేవునివద్దనుండి స్పష్టమైన నిదర్శనం వచ్చేసింది ! ( బుర్ హాన్ ) `,
        } 
        , 
        {
          idx: 92,
          padyam: `133. పూర్వపు ప్రవక్తలూ ధిక్కారానికి గురైనారు`,
        } 
        , 
        {
          idx: 92,
          padyam: `134. దైవతిరస్కారుల పరిహాసమాటలకు దూరంగా ఉండు`,
        } 
        , 
        {
          idx: 93,
          padyam: `135. ఆయనే ఆద్యంతుడు . రహస్యము , బాహ్యము ఆయనే సర్వజ్ఞుడు . సర్వమునకూ అధిపతి`,
        } , 
        {
          idx: 93,
          padyam: `136. భూమ్యాకాశముల సృజనకర్త`,
        } 
        , 
        {
          idx: 94,
          padyam: `137. రాత్రీపగళ్ళు , సూర్యచంద్రుల లెక్కల నిర్ధారణ`,
        } , 
        {
          idx: 95,
          padyam: `138. దేవుడు “ అయిపో ” అంటే చాలు అయిపోతుంది`,
        } , 
        {
          idx: 96,
          padyam: `139. భూమ్యాకాశాలను ఆరు రోజుల్లో సృష్టించాడు`,
        }, 
        {
          idx: 97,
          padyam: `140. ప్రళయ విషయజ్ఞానం నా ప్రభువు వద్దనే ఉన్నది  `,
        } 
        , 
        {
          idx: 98,
          padyam: `141. మాశిక్ష అన్నివేళల్లో వచ్చిపడింది`,
        } 
        , 
        {
          idx: 99,
          padyam: `142. తొలిసారిగా పుట్టించినవాడే మళ్ళీ పుట్టిస్తాడు`,
        } , 
        {
          idx: 100,
          padyam: `143. మీ పుట్టుక పూర్వోత్తరాలు ( అన్ని జన్మలూ ) నాకు తెలుసు `,
        } 
        , 
        {
          idx: 100,
          padyam: `144. మిమ్మల్ని పుట్టించి , జీవితాన్నిచ్చి , బుద్ధిని ప్రసాదించాము `,
        } , 
        {
          idx: 101,
          padyam: `145. అవిశ్వాసులు దైవదూతలకు ఆడవారి పేర్లను ఆపాదిస్తారు`,
        } , 
        {
          idx: 102,
          padyam: `146. దేవునికి ఆడపిల్లలు - మీకు మగపిల్లలా`,
        }, 
        {
          idx: 103,
          padyam: `147. సప్తాకాశములు , నిర్ణీతగడువు - చివరికి మావైపు గమ్యము మీరు మరచిపోయారు`,
        } 
        , 
        {
          idx: 104,
          padyam: `148. సప్తాకాశాలను ఒకదానిపై ఒకటి పేర్చాడు సూర్యచంద్రుల కాంతివంతం`,
        } 
        , 
        {
          idx: 105,
          padyam: `149. సైతాను నియమిస్తాము . వాడే సన్మార్గము పోకుండా అడ్డుకుంటాడు`,
        } , 
        {
          idx: 105,
          padyam: `150. ఆహారములో ధర్మసమ్మతము , పవిత్రము - అపవిత్రము నిషేధాలా`,
        } 
        , 
        {
          idx: 106,
          padyam: `151. ఏ ప్రవక్తనయినా తనజాతి భాషలో మాట్లాడేవానిగా పంపుతాము`,
        } , 
        {
          idx: 107,
          padyam: `152. భూమ్యాకాశములలోనికి ఎక్కేది , దిగేది ఆయనకు తెలుసు`,
        } , 
        {
          idx: 108,
          padyam: `153. ఆయన మీలోనుండే మీ భార్యలను పుట్టిస్తున్నాడు`,
        }, 
        {
          idx: 109,
          padyam: `154. మెరుపు ద్వారా భయపెడుతాడు మృత భూమికి జీవము పోస్తాడు`,
        } 
        , 
        {
          idx: 109,
          padyam: `155. మేము ప్రాణనాళముకంటే దగ్గరగాయున్నాము`,
        } 
        , 
        {
          idx: 110,
          padyam: `156. మానవుల ఉపాధి నిమిత్తం మృత ప్రదేశానికి జీవం పోశాం`,
        } , 
        {
          idx: 111,
          padyam: `157. ఒక ప్రాణి ( వ్యక్తి ) రక్షణే - సర్వ ప్రాణి ( సమాజ ) రక్షణ ఒక ప్రాణి హత్య - సర్వసమాజ హత్య`,
        } 
        , 
        {
          idx: 112,
          padyam: `158. కపటులను - ముఫ్రిక్కులను మట్టుబెట్టండి`,
        } , 
        {
          idx: 112,
          padyam: `159. శరణుకోరినవానికి ఆశ్రయం ఇవ్వు`,
        } , 
        {
          idx: 112,
          padyam: `160. నచ్చినా , నచ్చకపోయినా యుద్ధము మీకు విధి చేయబడింది`,
        }, 
        {
          idx: 112,
          padyam: `161. దేవునిమార్గములో దేవునికంటే ప్రియమైనవి లేవు`,
        } 
        , 
        {
          idx: 112,
          padyam: `162. ధర్మయుద్ధం - ప్రజ్ఞావచనముల పరీక్ష`,
        } 
        , 
        {
          idx: 112,
          padyam: `163. పరీక్ష నిమిత్తమే చావుబ్రతుకులను సృష్టించాడు`,
        } , 
        {
          idx: 113,
          padyam: `164. దేవతలు స్త్రీలే . వారిని ఆశ్రయిస్తే సైతానునే ఆశ్రయించినట్టు`,
        } 
        , 
        {
          idx: 114,
          padyam: `165. ఈసా ( ఏసు ) ను చంపలేదు , శిలువపైకి ఎక్కించనూ లేదు`,
        } , 
        {
          idx: 115,
          padyam: `166. ముస్లీమ్ - హిందువుల అనుబంధ ఫోటోలు`,
        } , 
        {
          idx: 116,
          padyam: `167. మూసా అంటే ఎవరు ? తౌరాత్ అంటే ఏది ? అక్షయ ఆహారం అంటే ఏది ?`,
        } 
        , 
        {
          idx: 117,
          padyam: `168. పరదా ( ముసుగు ) ఎప్పుడు వచ్చింది? పరదా దైవసంబంధమా?`,
        }

      ]
    },
    {
      title: 'వీడియోలు',
      url: '/watch-videos',
      icon: 'tv',
      sub: null
    }
     
     

  ];

  constructor(
    private platform: Platform,
    public router:Router,
    private splashScreen: SplashScreen,
    public globaldata: GlobalService,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sh: any = 0;
  sm: any = 0;
  mainItem = 0;
  selectedItem = 0;
  subItem = 0;
  goToChapter(page){
    console.log(page);
    if(page.sub!=null){
      console.log('do nothing');
    }else if(page.sub==null){
      if(page.url==undefined || page.url==null){
      this.globaldata.currentTatvam=page.idx-1;

        this.router.navigateByUrl('content-details');
      }else{
        this.router.navigateByUrl(page.url);
      }
      
    }
  }
  ngOnInit() {
    //const path = window.location.pathname.split('folder/')[1];
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

