// SAMPLE ARRAY OF IMAGES
const slides = [
  'p000.jpg', 'p001.jpg', 'p002.jpg', 'p003.jpg', 'p004.jpg', 'p005.jpg', 'p006.jpg', 'p007.jpg', 'p008.jpg', 'p009.jpg',
  'p010.jpg', 'p011.jpg', 'p012.jpg', 'p013.jpg', 'p014.jpg', 'p015.jpg', 'p016.jpg', 'p017.jpg', 'p018.jpg', 'p019.jpg',
  'p020.jpg', 'p021.jpg', 'p022.jpg', 'p023.jpg', 'p024.jpg', 'p025.jpg', 'p026.jpg', 'p027.jpg', 'p028.jpg', 'p029.jpg',
  'p030.jpg', 'p031.jpg', 'p032.jpg', 'p033.jpg', 'p034.jpg', 'p035.jpg', 'p036.jpg', 'p037.jpg', 'p038.jpg', 'p039.jpg',
  'p040.jpg', 'p041.jpg', 'p042.jpg', 'p043.jpg', 'p044.jpg', 'p045.jpg', 'p046.jpg', 'p047.jpg', 'p048.jpg', 'p049.jpg',
  'p050.jpg', 'p051.jpg', 'p052.jpg', 'p053.jpg', 'p054.jpg', 'p055.jpg', 'p056.jpg', 'p057.jpg', 'p058.jpg', 'p059.jpg',
  'p060.jpg', 'p061.jpg', 'p062.jpg', 'p063.jpg', 'p064.jpg', 'p065.jpg', 'p066.jpg', 'p067.jpg', 'p068.jpg', 'p069.jpg',
  'p070.jpg', 'p071.jpg', 'p072.jpg', 'p073.jpg', 'p074.jpg', 'p075.jpg', 'p076.jpg', 'p077.jpg', 'p078.jpg', 'p079.jpg',
  'p080.jpg', 'p081.jpg', 'p082.jpg', 'p083.jpg', 'p084.jpg', 'p085.jpg', 'p086.jpg', 'p087.jpg', 'p088.jpg', 'p089.jpg',
  'p090.jpg', 'p091.jpg', 'p092.jpg', 'p093.jpg', 'p094.jpg', 'p095.jpg', 'p096.jpg', 'p097.jpg', 'p098.jpg', 'p099.jpg',
  'p100.jpg', 'p101.jpg', 'p102.jpg', 'p103.jpg', 'p104.jpg', 'p105.jpg', 'p106.jpg', 'p107.jpg', 'p108.jpg', 'p109.jpg',
  'p110.jpg', 'p111.jpg', 'p112.jpg', 'p113.jpg', 'p114.jpg', 'p115.jpg', 'p116.jpg', 'p117.jpg', 'p118.jpg', 'p119.jpg',
  'p120.jpg', 'p121.jpg', 'p122.jpg', 'p123.jpg', 'p124.jpg', 'p125.jpg', 'p126.jpg', 'p127.jpg', 'p128.jpg', 'p129.jpg',
  'p130.jpg', 'p131.jpg', 'p132.jpg', 'p133.jpg', 'p134.jpg', 'p135.jpg', 'p136.jpg', 'p137.jpg', 'p138.jpg', 'p139.jpg',
  'p140.jpg', 'p141.jpg', 'p142.jpg', 'p143.jpg', 'p144.jpg', 'p145.jpg', 'p146.jpg', 'p147.jpg', 'p148.jpg', 'p149.jpg',
  'p150.jpg', 'p151.jpg', 'p152.jpg', 'p153.jpg', 'p154.jpg', 'p155.jpg', 'p156.jpg', 'p157.jpg', 'p158.jpg', 'p159.jpg',
  'p160.jpg', 'p161.jpg', 'p162.jpg', 'p163.jpg', 'p164.jpg', 'p165.jpg', 'p166.jpg', 'p167.jpg', 'p168.jpg', 'p169.jpg',
  'p170.jpg', 'p171.jpg', 'p172.jpg', 'p173.jpg', 'p174.jpg', 'p175.jpg', 'p176.jpg', 'p177.jpg', 'p178.jpg', 'p179.jpg',
  'p180.jpg', 'p181.jpg', 'p182.jpg', 'p183.jpg', 'p184.jpg', 'p185.jpg', 'p186.jpg', 'p187.jpg', 'p188.jpg', 'p189.jpg',
  'p190.jpg', 'p191.jpg', 'p192.jpg', 'p193.jpg', 'p194.jpg', 'p195.jpg', 'p196.jpg', 'p197.jpg', 'p198.jpg', 'p199.jpg',
  'p200.jpg', 'p201.jpg', 'p202.jpg', 'p203.jpg', 'p204.jpg', 'p205.jpg', 'p206.jpg', 'p207.jpg', 'p208.jpg', 'p209.jpg',
  'p210.jpg', 'p211.jpg', 'p212.jpg', 'p213.jpg', 'p214.jpg', 'p215.jpg', 'p216.jpg', 'p217.jpg', 'p218.jpg', 'p219.jpg',
  'p220.jpg', 'p221.jpg', 'p222.jpg', 'p223.jpg', 'p224.jpg', 'p225.jpg', 'p226.jpg', 'p227.jpg', 'p228.jpg', 'p229.jpg',
  'p230.jpg', 'p231.jpg', 'p232.jpg', 'p233.jpg', 'p234.jpg', 'p235.jpg', 'p236.jpg', 'p237.jpg', 'p238.jpg', 'p239.jpg',
  'p240.jpg', 'p241.jpg', 'p242.jpg', 'p243.jpg', 'p244.jpg', 'p245.jpg', 'p246.jpg', 'p247.jpg', 'p248.jpg', 'p249.jpg',
  'p250.jpg', 'p251.jpg', 'p252.jpg', 'p253.jpg', 'p254.jpg', 'p255.jpg', 'p256.jpg', 'p257.jpg', 'p258.jpg', 'p259.jpg',
  'p260.jpg', 'p261.jpg', 'p262.jpg', 'p263.jpg', 'p264.jpg', 'p265.jpg', 'p266.jpg', 'p267.jpg', 'p268.jpg', 'p269.jpg',
  'p270.jpg', 'p271.jpg', 'p272.jpg', 'p273.jpg', 'p274.jpg', 'p275.jpg', 'p276.jpg', 'p277.jpg', 'p278.jpg', 'p279.jpg',
  'p280.jpg', 'p281.jpg', 'p282.jpg', 'p283.jpg', 'p284.jpg', 'p285.jpg', 'p286.jpg', 'p287.jpg', 'p288.jpg', 'p289.jpg',
  'p290.jpg', 'p291.jpg', 'p292.jpg', 'p293.jpg', 'p294.jpg', 'p295.jpg', 'p296.jpg', 'p297.jpg', 'p298.jpg', 'p299.jpg',
  'p300.jpg', 'p301.jpg', 'p302.jpg', 'p303.jpg', 'p304.jpg', 'p305.jpg', 'p306.jpg', 'p307.jpg', 'p308.jpg', 'p309.jpg',
  'p310.jpg', 'p311.jpg', 'p312.jpg', 'p313.jpg', 'p314.jpg', 'p315.jpg', 'p316.jpg', 'p317.jpg', 'p318.jpg', 'p319.jpg',
  'p320.jpg', 'p321.jpg', 'p322.jpg', 'p323.jpg', 'p324.jpg', 'p325.jpg', 'p326.jpg', 'p327.jpg', 'p328.jpg', 'p329.jpg',
  'p330.jpg', 'p331.jpg', 'p332.jpg', 'p333.jpg', 'p334.jpg', 'p335.jpg', 'p336.jpg', 'p337.jpg', 'p338.jpg', 'p339.jpg',
  'p340.jpg', 'p341.jpg', 'p342.jpg', 'p343.jpg', 'p344.jpg', 'p345.jpg', 'p346.jpg', 'p347.jpg', 'p348.jpg', 'p349.jpg',
  'p350.jpg', 'p351.jpg', 'p352.jpg', 'p353.jpg', 'p354.jpg', 'p355.jpg', 'p356.jpg', 'p357.jpg', 'p358.jpg', 'p359.jpg',
  'p360.jpg', 'p361.jpg', 'p362.jpg', 'p363.jpg', 'p364.jpg', 'p365.jpg', 'p366.jpg', 'p367.jpg', 'p368.jpg', 'p369.jpg',
  'p370.jpg', 'p371.jpg', 'p372.jpg', 'p373.jpg', 'p374.jpg', 'p375.jpg', 'p376.jpg', 'p377.jpg', 'p378.jpg', 'p379.jpg',
  'p380.jpg', 'p381.jpg', 'p382.jpg', 'p383.jpg', 'p384.jpg', 'p385.jpg', 'p386.jpg', 'p387.jpg', 'p388.jpg', 'p389.jpg',
  'p390.jpg', 'p391.jpg', 'p392.jpg', 'p393.jpg', 'p394.jpg', 'p395.jpg', 'p396.jpg', 'p397.jpg', 'p398.jpg', 'p399.jpg',
  'p400.jpg', 'p401.jpg', 'p402.jpg', 'p403.jpg', 'p404.jpg', 'p405.jpg', 'p406.jpg', 'p407.jpg', 'p408.jpg', 'p409.jpg',
  'p410.jpg', 'p411.jpg', 'p412.jpg', 'p413.jpg', 'p414.jpg', 'p415.jpg', 'p416.jpg', 'p417.jpg', 'p418.jpg', 'p419.jpg',
  'p420.jpg', 'p421.jpg', 'p422.jpg', 'p423.jpg', 'p424.jpg', 'p425.jpg', 'p426.jpg', 'p427.jpg', 'p428.jpg', 'p429.jpg',
  'p430.jpg', 'p431.jpg', 'p432.jpg', 'p433.jpg', 'p434.jpg', 'p435.jpg', 'p436.jpg', 'p437.jpg', 'p438.jpg', 'p439.jpg',
  'p440.jpg', 'p441.jpg', 'p442.jpg', 'p443.jpg', 'p444.jpg', 'p445.jpg', 'p446.jpg', 'p447.jpg', 'p448.jpg', 'p449.jpg',
  'p450.jpg', 'p451.jpg', 'p452.jpg', 'p453.jpg', 'p454.jpg', 'p455.jpg', 'p456.jpg', 'p457.jpg', 'p458.jpg', 'p459.jpg',
  'p460.jpg', 'p461.jpg', 'p462.jpg', 'p463.jpg', 'p464.jpg', 'p465.jpg', 'p466.jpg', 'p467.jpg', 'p468.jpg', 'p469.jpg',
  'p470.jpg', 'p471.jpg', 'p472.jpg', 'p473.jpg', 'p474.jpg', 'p475.jpg', 'p476.jpg', 'p477.jpg', 'p478.jpg', 'p479.jpg',
  'p480.jpg', 'p481.jpg', 'p482.jpg', 'p483.jpg', 'p484.jpg', 'p485.jpg', 'p486.jpg', 'p487.jpg', 'p488.jpg', 'p489.jpg',
  'p490.jpg', 'p491.jpg', 'p492.jpg', 'p493.jpg', 'p494.jpg', 'p495.jpg', 'p496.jpg', 'p497.jpg', 'p498.jpg', 'p499.jpg',
  'p500.jpg', 'p501.jpg', 'p502.jpg', 'p503.jpg', 'p504.jpg', 'p505.jpg', 'p506.jpg', 'p507.jpg', 'p508.jpg', 'p509.jpg',
  'p510.jpg', 'p511.jpg', 'p512.jpg', 'p513.jpg', 'p514.jpg', 'p515.jpg', 'p516.jpg', 'p517.jpg', 'p518.jpg', 'p519.jpg',
  'p520.jpg', 'p521.jpg', 'p522.jpg', 'p523.jpg', 'p524.jpg', 'p525.jpg', 'p526.jpg', 'p527.jpg', 'p528.jpg', 'p529.jpg',
  'p530.jpg', 'p531.jpg', 'p532.jpg', 'p533.jpg', 'p534.jpg', 'p535.jpg', 'p536.jpg', 'p537.jpg', 'p538.jpg', 'p539.jpg',
  'p540.jpg', 'p541.jpg', 'p542.jpg', 'p543.jpg', 'p544.jpg', 'p545.jpg', 'p546.jpg', 'p547.jpg', 'p548.jpg', 'p549.jpg',
  'p550.jpg', 'p551.jpg', 'p552.jpg', 'p553.jpg', 'p554.jpg', 'p555.jpg', 'p556.jpg', 'p557.jpg', 'p558.jpg', 'p559.jpg',
  'p560.jpg', 'p561.jpg', 'p562.jpg', 'p563.jpg', 'p564.jpg', 'p565.jpg', 'p566.jpg', 'p567.jpg', 'p568.jpg', 'p569.jpg',
  'p570.jpg', 'p571.jpg', 'p572.jpg', 'p573.jpg', 'p574.jpg', 'p575.jpg', 'p576.jpg', 'p577.jpg', 'p578.jpg', 'p579.jpg',
  'p580.jpg', 'p581.jpg', 'p582.jpg', 'p583.jpg', 'p584.jpg', 'p585.jpg', 'p586.jpg', 'p587.jpg', 'p588.jpg', 'p589.jpg',
  'p590.jpg', 'p591.jpg', 'p592.jpg', 'p593.jpg', 'p594.jpg', 'p595.jpg', 'p596.jpg', 'p597.jpg', 'p598.jpg', 'p599.jpg',
  'p600.jpg', 'p601.jpg', 'p602.jpg', 'p603.jpg', 'p604.jpg', 'p605.jpg', 'p606.jpg', 'p607.jpg', 'p608.jpg', 'p609.jpg',
  'p610.jpg', 'p611.jpg', 'p612.jpg', 'p613.jpg', 'p614.jpg', 'p615.jpg', 'p616.jpg', 'p617.jpg', 'p618.jpg', 'p619.jpg',
  'p620.jpg', 'p621.jpg', 'p622.jpg', 'p623.jpg', 'p624.jpg', 'p625.jpg', 'p626.jpg', 'p627.jpg', 'p628.jpg', 'p629.jpg',
  'p630.jpg', 'p631.jpg', 'p632.jpg', 'p633.jpg', 'p634.jpg', 'p635.jpg', 'p636.jpg', 'p637.jpg', 'p638.jpg', 'p639.jpg',
  'p640.jpg', 'p641.jpg', 'p642.jpg', 'p643.jpg', 'p644.jpg', 'p645.jpg', 'p646.jpg', 'p647.jpg', 'p648.jpg', 'p649.jpg',
  'p650.jpg', 'p651.jpg', 'p652.jpg', 'p653.jpg', 'p654.jpg', 'p655.jpg', 'p656.jpg', 'p657.jpg', 'p658.jpg', 'p659.jpg',
  'p660.jpg', 'p661.jpg', 'p662.jpg', 'p663.jpg', 'p664.jpg', 'p665.jpg', 'p666.jpg', 'p667.jpg', 'p668.jpg', 'p669.jpg',
  'p670.jpg', 'p671.jpg', 'p672.jpg', 'p673.jpg', 'p674.jpg', 'p675.jpg', 'p676.jpg', 'p677.jpg', 'p678.jpg', 'p679.jpg',
  'p680.jpg', 'p681.jpg', 'p682.jpg', 'p683.jpg', 'p684.jpg', 'p685.jpg', 'p686.jpg', 'p687.jpg', 'p688.jpg', 'p689.jpg',
  'p690.jpg', 'p691.jpg', 'p692.jpg', 'p693.jpg', 'p694.jpg', 'p695.jpg', 'p696.jpg', 'p697.jpg', 'p698.jpg', 'p699.jpg',
  'p700.jpg', 'p701.jpg', 'p702.jpg', 'p703.jpg', 'p704.jpg', 'p705.jpg', 'p706.jpg', 'p707.jpg', 'p708.jpg', 'p709.jpg',
  'p710.jpg', 'p711.jpg', 'p712.jpg', 'p713.jpg', 'p714.jpg', 'p715.jpg', 'p716.jpg', 'p717.jpg', 'p718.jpg', 'p719.jpg',
  'p720.jpg', 'p721.jpg', 'p722.jpg', 'p723.jpg', 'p724.jpg', 'p725.jpg', 'p726.jpg', 'p727.jpg', 'p728.jpg', 'p729.jpg',
  'p730.jpg', 'p731.jpg', 'p732.jpg', 'p733.jpg', 'p734.jpg', 'p735.jpg', 'p736.jpg', 'p737.jpg', 'p738.jpg', 'p739.jpg',
  'p740.jpg', 'p741.jpg', 'p742.jpg', 'p743.jpg', 'p744.jpg', 'p745.jpg', 'p746.jpg', 'p747.jpg', 'p748.jpg', 'p749.jpg',
  'p750.jpg', 'p751.jpg', 'p752.jpg', 'p753.jpg', 'p754.jpg', 'p755.jpg', 'p756.jpg', 'p757.jpg', 'p758.jpg', 'p759.jpg',
  'p760.jpg', 'p761.jpg', 'p762.jpg', 'p763.jpg', 'p764.jpg', 'p765.jpg', 'p766.jpg', 'p767.jpg', 'p768.jpg', 'p769.jpg',
  'p770.jpg', 'p771.jpg', 'p772.jpg', 'p773.jpg', 'p774.jpg', 'p775.jpg', 'p776.jpg', 'p777.jpg', 'p778.jpg', 'p779.jpg',
  'p780.jpg', 'p781.jpg', 'p782.jpg', 'p783.jpg', 'p784.jpg', 'p785.jpg', 'p786.jpg', 'p787.jpg', 'p788.jpg', 'p789.jpg',
  'p790.jpg', 'p791.jpg', 'p792.jpg', 'p793.jpg', 'p794.jpg', 'p795.jpg', 'p796.jpg', 'p797.jpg', 'p798.jpg', 'p799.jpg',
  'p800.jpg', 'p801.jpg', 'p802.jpg', 'p803.jpg', 'p804.jpg', 'p805.jpg', 'p806.jpg', 'p807.jpg', 'p808.jpg', 'p809.jpg',
  'p810.jpg', 'p811.jpg', 'p812.jpg', 'p813.jpg', 'p814.jpg', 'p815.jpg', 'p816.jpg', 'p817.jpg', 'p818.jpg', 'p819.jpg',
  'p820.jpg', 'p821.jpg', 'p822.jpg', 'p823.jpg', 'p824.jpg', 'p825.jpg', 'p826.jpg', 'p827.jpg', 'p828.jpg', 'p829.jpg',
  'p830.jpg', 'p831.jpg', 'p832.jpg', 'p833.jpg', 'p834.jpg', 'p835.jpg', 'p836.jpg', 'p837.jpg', 'p838.jpg', 'p839.jpg',
  'p840.jpg', 'p841.jpg', 'p842.jpg', 'p843.jpg', 'p844.jpg', 'p845.jpg', 'p846.jpg', 'p847.jpg', 'p848.jpg', 'p849.jpg',
  'p850.jpg', 'p851.jpg', 'p852.jpg', 'p853.jpg', 'p854.jpg', 'p855.jpg', 'p856.jpg', 'p857.jpg', 'p858.jpg', 'p859.jpg',
  'p860.jpg', 'p861.jpg', 'p862.jpg', 'p863.jpg', 'p864.jpg', 'p865.jpg', 'p866.jpg', 'p867.jpg', 'p868.jpg', 'p869.jpg',
  'p870.jpg', 'p871.jpg', 'p872.jpg', 'p873.jpg', 'p874.jpg', 'p875.jpg', 'p876.jpg', 'p877.jpg', 'p878.jpg', 'p879.jpg',
  'p880.jpg', 'p881.jpg', 'p882.jpg', 'p883.jpg', 'p884.jpg', 'p885.jpg', 'p886.jpg', 'p887.jpg', 'p888.jpg', 'p889.jpg',
  'p890.jpg', 'p891.jpg', 'p892.jpg', 'p893.jpg', 'p894.jpg', 'p895.jpg', 'p896.jpg', 'p897.jpg', 'p898.jpg', 'p899.jpg',
  'p900.jpg', 'p901.jpg', 'p902.jpg', 'p903.jpg', 'p904.jpg', 'p905.jpg', 'p906.jpg', 'p907.jpg', 'p908.jpg', 'p909.jpg',
  'p910.jpg', 'p911.jpg', 'p912.jpg', 'p913.jpg', 'p914.jpg', 'p915.jpg', 'p916.jpg', 'p917.jpg', 'p918.jpg', 'p919.jpg',
  'p920.jpg', 'p921.jpg', 'p922.jpg', 'p923.jpg', 'p924.jpg', 'p925.jpg', 'p926.jpg', 'p927.jpg', 'p928.jpg', 'p929.jpg',
  'p930.jpg', 'p931.jpg', 'p932.jpg', 'p933.jpg', 'p934.jpg', 'p935.jpg', 'p936.jpg', 'p937.jpg', 'p938.jpg', 'p939.jpg',
  'p940.jpg', 'p941.jpg', 'p942.jpg', 'p943.jpg', 'p944.jpg', 'p945.jpg', 'p946.jpg', 'p947.jpg', 'p948.jpg', 'p949.jpg',
  'p950.jpg', 'p951.jpg', 'p952.jpg', 'p953.jpg', 'p954.jpg', 'p955.jpg', 'p956.jpg', 'p957.jpg', 'p958.jpg', 'p959.jpg',
  'p960.jpg', 'p961.jpg', 'p962.jpg', 'p963.jpg', 'p964.jpg'
];

// NVIGATE BETWEEN TOPIC LIST & SLIDE SHOW

const results = document.querySelectorAll('.openTab');
results.forEach(result => {
  result.addEventListener('click', function handleClick(event) {
    let topicList = document.getElementById('frontPage');
    topicList.style.display = 'none';
    let slideBox = document.getElementById('slideBox');
    slideBox.style.display = 'block';
  });
});

// FUNCTION TO CREATE THE SLIDESHOW

let slideIndex = 0;
let slideshowDiv;

function displayCurrentSlide() {
  const slideUrl = slides[slideIndex];
  slideshowDiv.innerHTML = `<img src="${slideUrl}" alt="Image ${slideIndex + 1}">`;
}

function createSlideshow(imageArray) {

  slideshowDiv = document.getElementById('slideshow-container');
  slideshowDiv.innerHTML = "";

  for (let i = 0; i < imageArray.length; i++) {
    const img = document.createElement('img');
    img.src = imageArray[i];
    img.id = 'imageId';
    img.alt = `Image ${i + 1}`;
    slideshowDiv.appendChild(img);
  }
  showSlides(slideIndex);
}

// CODE FOR CONTROLLING THE SLIDESHOW

function showSlides(index) {
  const imageArray = slideshowDiv.getElementsByTagName('img');

  if (index >= imageArray.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = imageArray.length - 1;
  } else {
    slideIndex = index;
  }
  for (let i = 0; i < imageArray.length; i++) {
    imageArray[i].style.display = 'none';
  }
  imageArray[slideIndex].style.display = 'block';
}

// TEMPORARY CODE FOR MOUSE CLICK NAVIGATION

document.getElementById('prev').addEventListener('click', function () {
  showSlides(slideIndex + 1);
});
document.getElementById('next').addEventListener('click', function () {
  showSlides(slideIndex - 1);
});

// CODE FOR TOUCH NAVIGATION

let imageSlider = document.getElementById('slideBox');
let initialX, initialY, initialTime;

imageSlider.addEventListener('touchstart', function (e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
  initialTime = new Date();
});

imageSlider.addEventListener('touchend', function (e) {
  var deltaX = e.changedTouches[0].clientX - initialX;
  var deltaY = Math.abs(e.changedTouches[0].clientY - initialY);
  var deltaTime = new Date() - initialTime;

  if (deltaX >= 30 && deltaY <= 100 && deltaTime <= 300) {
    showSlides(slideIndex + 1);
  }
  else if (deltaX <= -30 && deltaY <= 100 && deltaTime <= 300) {
    showSlides(slideIndex - 1);
  }
});

// CODE TO CLOSE SLIDESHOW

document.getElementById('exit').addEventListener('click', function () {
  let slideBox = document.getElementById('slideBox');
  slideBox.style.display = 'none';
  let topicList = document.getElementById('frontPage');
  topicList.style.display = 'block';
});

//  CODE FOR TOPIC 1
const show1Tab = document.getElementById('topicName1');
const open1Tabs = document.querySelectorAll('.content1');
show1Tab.addEventListener('click', function () {
  open1Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret1 = document.getElementById('pointer1');
show1Tab.addEventListener('click', function () {
  caret1.classList.toggle('caretD');
});

const ar0001 = [slides[8], slides[37], slides[38], slides[67]];
document.getElementById('c0001').addEventListener('click', function () {
  createSlideshow(ar0001);
});
const ar0002 = [slides[203], slides[216], slides[222], slides[223], slides[232], slides[233], slides[238]];
document.getElementById('c0002').addEventListener('click', function () {
  createSlideshow(ar0002);
});
const ar0003 = [slides[250], slides[277], slides[278]];
document.getElementById('c0003').addEventListener('click', function () {
  createSlideshow(ar0003);
});
const ar0004 = [slides[331], slides[332], slides[335], slides[337], slides[338], slides[343], slides[350]];
document.getElementById('c0004').addEventListener('click', function () {
  createSlideshow(ar0004);
});
const ar0005 = [slides[353]];
document.getElementById('c0005').addEventListener('click', function () {
  createSlideshow(ar0005);
});
const ar0006 = [slides[394]];
document.getElementById('c0006').addEventListener('click', function () {
  createSlideshow(ar0006);
});
const ar0007 = [slides[395], slides[396], slides[398]];
document.getElementById('c0007').addEventListener('click', function () {
  createSlideshow(ar0007);
});
const ar0008 = [slides[408]];
document.getElementById('c0008').addEventListener('click', function () {
  createSlideshow(ar0008);
});
const ar0009 = [slides[427], slides[428], slides[434]];
document.getElementById('c0009').addEventListener('click', function () {
  createSlideshow(ar0009);
});
const ar0010 = [slides[460]];
document.getElementById('c0010').addEventListener('click', function () {
  createSlideshow(ar0010);
});
const ar0011 = [slides[502]];
document.getElementById('c0011').addEventListener('click', function () {
  createSlideshow(ar0011);
});
const ar0012 = [slides[517]];
document.getElementById('c0012').addEventListener('click', function () {
  createSlideshow(ar0012);
});
const ar0013 = [slides[541], slides[542]];
document.getElementById('c0013').addEventListener('click', function () {
  createSlideshow(ar0013);
});
const ar0014 = [slides[553], slides[554]];
document.getElementById('c0014').addEventListener('click', function () {
  createSlideshow(ar0014);
});
const ar0015 = [slides[567], slides[568]];
document.getElementById('c0015').addEventListener('click', function () {
  createSlideshow(ar0015);
});
const ar0016 = [slides[580], slides[581], slides[582]];
document.getElementById('c0016').addEventListener('click', function () {
  createSlideshow(ar0016);
});
const ar0017 = [slides[585], slides[586]];
document.getElementById('c0017').addEventListener('click', function () {
  createSlideshow(ar0017);
});
const ar0018 = [slides[612]];
document.getElementById('c0018').addEventListener('click', function () {
  createSlideshow(ar0018);
});
const ar0019 = [slides[640], slides[644]];
document.getElementById('c0019').addEventListener('click', function () {
  createSlideshow(ar0019);
});
const ar0020 = [slides[647], slides[648], slides[649], slides[650], slides[651], slides[652], slides[653], slides[654]];
document.getElementById('c0020').addEventListener('click', function () {
  createSlideshow(ar0020);
});
const ar0021 = [slides[658], slides[660]];
document.getElementById('c0021').addEventListener('click', function () {
  createSlideshow(ar0021);
});
const ar0022 = [slides[665], slides[666]];
document.getElementById('c0022').addEventListener('click', function () {
  createSlideshow(ar0022);
});
const ar0023 = [slides[676]];
document.getElementById('c0023').addEventListener('click', function () {
  createSlideshow(ar0023);
});
const ar0024 = [slides[698], slides[699], slides[701]];
document.getElementById('c0024').addEventListener('click', function () {
  createSlideshow(ar0024);
});
const ar0025 = [slides[706], slides[707]];
document.getElementById('c0025').addEventListener('click', function () {
  createSlideshow(ar0025);
});
const ar0026 = [slides[735], slides[738]];
document.getElementById('c0026').addEventListener('click', function () {
  createSlideshow(ar0026);
});
const ar0027 = [slides[755], slides[756], slides[757], slides[759]];
document.getElementById('c0027').addEventListener('click', function () {
  createSlideshow(ar0027);
});
const ar0028 = [slides[761], slides[762]];
document.getElementById('c0028').addEventListener('click', function () {
  createSlideshow(ar0028);
});
const ar0029 = [slides[775], slides[776]];
document.getElementById('c0029').addEventListener('click', function () {
  createSlideshow(ar0029);
});
const ar0030 = [slides[781], slides[789], slides[790]];
document.getElementById('c0030').addEventListener('click', function () {
  createSlideshow(ar0030);
});
const ar0031 = [slides[795], slides[796]];
document.getElementById('c0031').addEventListener('click', function () {
  createSlideshow(ar0031);
});
const ar0032 = [slides[815], slides[819], slides[821]];
document.getElementById('c0032').addEventListener('click', function () {
  createSlideshow(ar0032);
});
const ar0033 = [slides[826], slides[827]];
document.getElementById('c0033').addEventListener('click', function () {
  createSlideshow(ar0033);
});
const ar0034 = [slides[831]];
document.getElementById('c0034').addEventListener('click', function () {
  createSlideshow(ar0034);
});
const ar0035 = [slides[837]];
document.getElementById('c0035').addEventListener('click', function () {
  createSlideshow(ar0035);
});
const ar0036 = [slides[855], slides[856]];
document.getElementById('c0036').addEventListener('click', function () {
  createSlideshow(ar0036);
});
const ar0037 = [slides[858], slides[859]];
document.getElementById('c0037').addEventListener('click', function () {
  createSlideshow(ar0037);
});
const ar0038 = [slides[870], slides[871]];
document.getElementById('c0038').addEventListener('click', function () {
  createSlideshow(ar0038);
});
const ar0039 = [slides[881]];
document.getElementById('c0039').addEventListener('click', function () {
  createSlideshow(ar0039);
});
const ar0040 = [slides[882], slides[883]];
document.getElementById('c0040').addEventListener('click', function () {
  createSlideshow(ar0040);
});
const ar0041 = [slides[887]];
document.getElementById('c0041').addEventListener('click', function () {
  createSlideshow(ar0041);
});
const ar0042 = [slides[897], slides[898], slides[899]];
document.getElementById('c0042').addEventListener('click', function () {
  createSlideshow(ar0042);
});
const ar0043 = [slides[927]];
document.getElementById('c0043').addEventListener('click', function () {
  createSlideshow(ar0043);
});
const ar0044 = [slides[946]];
document.getElementById('c0044').addEventListener('click', function () {
  createSlideshow(ar0044);
});
const arCompRef001 = [slides[8], slides[37], slides[38], slides[67], slides[203], slides[216], slides[222], slides[223], slides[232], slides[233], slides[238], slides[250], slides[277], slides[278], slides[331], slides[332], slides[335], slides[337], slides[338], slides[343], slides[350], slides[353], slides[394], slides[395], slides[396], slides[398], slides[408], slides[427], slides[428], slides[434], slides[460], slides[502], slides[517], slides[541], slides[542], slides[553], slides[554], slides[567], slides[568], slides[580], slides[581], slides[582], slides[585], slides[586], slides[612], slides[640], slides[644], slides[647], slides[648], slides[649], slides[650], slides[651], slides[652], slides[653], slides[654], slides[658], slides[660], slides[665], slides[666], slides[676], slides[698], slides[699], slides[701], slides[706], slides[707], slides[735], slides[738], slides[755], slides[756], slides[757], slides[759], slides[761], slides[762], slides[775], slides[776], slides[781], slides[789], slides[790], slides[795], slides[796], slides[815], slides[819], slides[821], slides[826], slides[827], slides[831], slides[837], slides[855], slides[856], slides[858], slides[859], slides[870], slides[871], slides[881], slides[882], slides[883], slides[887], slides[897], slides[898], slides[899], slides[927], slides[946]];
document.getElementById('compRef001').addEventListener('click', function () {
  createSlideshow(arCompRef001);
});

// CODE FOR TOPIC 2

const show2Tab = document.getElementById('topicName2');
const open2Tabs = document.querySelectorAll('.content2');
show2Tab.addEventListener('click', function () {
  open2Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret2 = document.getElementById('pointer2');
show2Tab.addEventListener('click', function () {
  caret2.classList.toggle('caretD');
});

const ar0045 = [slides[32], slides[37], slides[65], slides[66]];
document.getElementById('c0045').addEventListener('click', function () {
  createSlideshow(ar0045);
});
const ar0046 = [slides[78], slides[79], slides[81], slides[82], slides[90]];
document.getElementById('c0046').addEventListener('click', function () {
  createSlideshow(ar0046);
});
const ar0047 = [slides[144], slides[166]];
document.getElementById('c0047').addEventListener('click', function () {
  createSlideshow(ar0047);
});
const ar0048 = [slides[191]];
document.getElementById('c0048').addEventListener('click', function () {
  createSlideshow(ar0048);
});
const ar0049 = [slides[203], slides[206], slides[223]];
document.getElementById('c0049').addEventListener('click', function () {
  createSlideshow(ar0049);
});
const ar0050 = [slides[271]];
document.getElementById('c0050').addEventListener('click', function () {
  createSlideshow(ar0050);
});
const ar0051 = [slides[329]];
document.getElementById('c0051').addEventListener('click', function () {
  createSlideshow(ar0051);
});
const ar0052 = [slides[399]];
document.getElementById('c0052').addEventListener('click', function () {
  createSlideshow(ar0052);
});
const ar0053 = [slides[428], slides[434]];
document.getElementById('c0053').addEventListener('click', function () {
  createSlideshow(ar0053);
});
const ar0054 = [slides[455]];
document.getElementById('c0054').addEventListener('click', function () {
  createSlideshow(ar0054);
});
const ar0055 = [slides[485], slides[486]];
document.getElementById('c0055').addEventListener('click', function () {
  createSlideshow(ar0055);
});
const ar0056 = [slides[498], slides[508]];
document.getElementById('c0056').addEventListener('click', function () {
  createSlideshow(ar0056);
});
const ar0057 = [slides[515], slides[516], slides[528]];
document.getElementById('c0057').addEventListener('click', function () {
  createSlideshow(ar0057);
});
const ar0058 = [slides[535]];
document.getElementById('c0058').addEventListener('click', function () {
  createSlideshow(ar0058);
});
const ar0059 = [slides[557]];
document.getElementById('c0059').addEventListener('click', function () {
  createSlideshow(ar0059);
});
const ar0060 = [slides[628]];
document.getElementById('c0060').addEventListener('click', function () {
  createSlideshow(ar0060);
});
const ar0061 = [slides[641]];
document.getElementById('c0061').addEventListener('click', function () {
  createSlideshow(ar0061);
});
const ar0062 = [slides[693], slides[694]];
document.getElementById('c0062').addEventListener('click', function () {
  createSlideshow(ar0062);
});
const ar0063 = [slides[711]];
document.getElementById('c0063').addEventListener('click', function () {
  createSlideshow(ar0063);
});
const ar0064 = [slides[722], slides[729]];
document.getElementById('c0064').addEventListener('click', function () {
  createSlideshow(ar0064);
});
const ar0065 = [slides[731], slides[732]];
document.getElementById('c0065').addEventListener('click', function () {
  createSlideshow(ar0065);
});
const ar0066 = [slides[745], slides[747], slides[756]];
document.getElementById('c0066').addEventListener('click', function () {
  createSlideshow(ar0066);
});
const ar0067 = [slides[789]];
document.getElementById('c0067').addEventListener('click', function () {
  createSlideshow(ar0067);
});
const ar0068 = [slides[791]];
document.getElementById('c0068').addEventListener('click', function () {
  createSlideshow(ar0068);
});
const ar0069 = [slides[875]];
document.getElementById('c0069').addEventListener('click', function () {
  createSlideshow(ar0069);
});
const ar0070 = [slides[889]];
document.getElementById('c0070').addEventListener('click', function () {
  createSlideshow(ar0070);
});
const ar0071 = [slides[916]];
document.getElementById('c0071').addEventListener('click', function () {
  createSlideshow(ar0071);
});
const ar0072 = [slides[963]];
document.getElementById('c0072').addEventListener('click', function () {
  createSlideshow(ar0072);
});
const arCompRef002 = [slides[32], slides[37], slides[65], slides[66], slides[78], slides[79], slides[81], slides[82], slides[90], slides[144], slides[166], slides[191], slides[203], slides[206], slides[223], slides[271], slides[329], slides[399], slides[428], slides[434], slides[455], slides[485], slides[486], slides[498], slides[508], slides[515], slides[516], slides[528], slides[535], slides[557], slides[628], slides[641], slides[693], slides[694], slides[711], slides[722], slides[729], slides[731], slides[732], slides[745], slides[747], slides[756], slides[789], slides[791], slides[875], slides[889], slides[916], slides[963]];
document.getElementById('compRef002').addEventListener('click', function () {
  createSlideshow(arCompRef002);
});

// CODE FOR TOPIC 3

const show3Tab = document.getElementById('topicName3');
const open3Tabs = document.querySelectorAll('.content3');
show3Tab.addEventListener('click', function () {
  open3Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret3 = document.getElementById('pointer3');
show3Tab.addEventListener('click', function () {
  caret3.classList.toggle('caretD');
});

const ar0073 = [slides[65], slides[66]];
document.getElementById('c0073').addEventListener('click', function () {
  createSlideshow(ar0073);
});
const ar0074 = [slides[78]];
document.getElementById('c0074').addEventListener('click', function () {
  createSlideshow(ar0074);
});
const ar0075 = [slides[581]];
document.getElementById('c0075').addEventListener('click', function () {
  createSlideshow(ar0075);
});
const ar0076 = [slides[756]];
document.getElementById('c0076').addEventListener('click', function () {
  createSlideshow(ar0076);
});
const arCompRef003 = [slides[65], slides[66], slides[78], slides[581], slides[756]];
document.getElementById('compRef003').addEventListener('click', function () {
  createSlideshow(arCompRef003);
});

// CODE FOR TOPIC 4

const show4Tab = document.getElementById('topicName4');
const open4Tabs = document.querySelectorAll('.content4');
show4Tab.addEventListener('click', function () {
  open4Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret4 = document.getElementById('pointer4');
show4Tab.addEventListener('click', function () {
  caret4.classList.toggle('caretD');
});
const ar0077 = [slides[840], slides[842]];
document.getElementById('c0077').addEventListener('click', function () {
  createSlideshow(ar0077);
});
const ar0078 = [slides[849]];
document.getElementById('c0078').addEventListener('click', function () {
  createSlideshow(ar0078);
});
const ar0079 = [slides[858]];
document.getElementById('c0079').addEventListener('click', function () {
  createSlideshow(ar0079);
});
const arCompRef004 = [slides[840], slides[842], slides[849], slides[858]];
document.getElementById('compRef004').addEventListener('click', function () {
  createSlideshow(arCompRef004);
});

// CODE FOR TOPIC 5

const show5Tab = document.getElementById('topicName5');
const open5Tabs = document.querySelectorAll('.content5');
show5Tab.addEventListener('click', function () {
  open5Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret5 = document.getElementById('pointer5');
show5Tab.addEventListener('click', function () {
  caret5.classList.toggle('caretD');
});

const ar0080 = [slides[6], slides[25], slides[26], slides[35], slides[67], slides[68], slides[77]];
document.getElementById('c0080').addEventListener('click', function () {
  createSlideshow(ar0080);
});
const ar0081 = [slides[84], slides[118]];
document.getElementById('c0081').addEventListener('click', function () {
  createSlideshow(ar0081);
});
const ar0082 = [slides[157], slides[161]];
document.getElementById('c0082').addEventListener('click', function () {
  createSlideshow(ar0082);
});
const ar0083 = [slides[175], slides[176], slides[181], slides[182], slides[202]];
document.getElementById('c0083').addEventListener('click', function () {
  createSlideshow(ar0083);
});
const ar0084 = [slides[205], slides[215]];
document.getElementById('c0084').addEventListener('click', function () {
  createSlideshow(ar0084);
});
const ar0085 = [slides[432], slides[439]];
document.getElementById('c0085').addEventListener('click', function () {
  createSlideshow(ar0085);
});
const ar0086 = [slides[465]];
document.getElementById('c0086').addEventListener('click', function () {
  createSlideshow(ar0086);
});
const ar0087 = [slides[530]];
document.getElementById('c0087').addEventListener('click', function () {
  createSlideshow(ar0087);
});
const ar0088 = [slides[555]];
document.getElementById('c0088').addEventListener('click', function () {
  createSlideshow(ar0088);
});
const ar0089 = [slides[581]];
document.getElementById('c0089').addEventListener('click', function () {
  createSlideshow(ar0089);
});
const ar0090 = [slides[635]];
document.getElementById('c0090').addEventListener('click', function () {
  createSlideshow(ar0090);
});
const ar0091 = [slides[654]];
document.getElementById('c0091').addEventListener('click', function () {
  createSlideshow(ar0091);
});
const ar0092 = [slides[701]];
document.getElementById('c0092').addEventListener('click', function () {
  createSlideshow(ar0092);
});
const ar0093 = [slides[703]];
document.getElementById('c0093').addEventListener('click', function () {
  createSlideshow(ar0093);
});
const ar0094 = [slides[779]];
document.getElementById('c0094').addEventListener('click', function () {
  createSlideshow(ar0094);
});
const ar0095 = [slides[785]];
document.getElementById('c0095').addEventListener('click', function () {
  createSlideshow(ar0095);
});
const ar0096 = [slides[807]];
document.getElementById('c0096').addEventListener('click', function () {
  createSlideshow(ar0096);
});
const ar0097 = [slides[858]];
document.getElementById('c0097').addEventListener('click', function () {
  createSlideshow(ar0097);
});
const ar0098 = [slides[909]];
document.getElementById('c0098').addEventListener('click', function () {
  createSlideshow(ar0098);
});
const arCompRef005 = [slides[6], slides[25], slides[26], slides[35], slides[67], slides[68], slides[77], slides[84], slides[118], slides[157], slides[161], slides[175], slides[176], slides[181], slides[182], slides[202], slides[205], slides[215], slides[432], slides[439], slides[465], slides[530], slides[555], slides[581], slides[635], slides[654], slides[701], slides[703], slides[779], slides[785], slides[807], slides[858], slides[909]];
document.getElementById('compRef005').addEventListener('click', function () {
  createSlideshow(arCompRef005);
});

// CODE FOR TOPIC 6

const show6Tab = document.getElementById('topicName6');
const open6Tabs = document.querySelectorAll('.content6');
show6Tab.addEventListener('click', function () {
  open6Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret6 = document.getElementById('pointer6');
show6Tab.addEventListener('click', function () {
  caret6.classList.toggle('caretD');
});

const ar0099 = [slides[8], slides[9], slides[18], slides[115], slides[52], slides[57], slides[58], slides[59], slides[65], slides[66], slides[75], slides[76]];
document.getElementById('c0099').addEventListener('click', function () {
  createSlideshow(ar0099);
});
const ar0100 = [slides[84]];
document.getElementById('c0100').addEventListener('click', function () {
  createSlideshow(ar0100);
});
const ar0101 = [slides[155]];
document.getElementById('c0101').addEventListener('click', function () {
  createSlideshow(ar0101);
});
const ar0102 = [slides[196]];
document.getElementById('c0102').addEventListener('click', function () {
  createSlideshow(ar0102);
});
const ar0103 = [slides[203], slides[214], slides[218], slides[226]];
document.getElementById('c0103').addEventListener('click', function () {
  createSlideshow(ar0103);
});
const ar0104 = [slides[317], slides[326]];
document.getElementById('c0104').addEventListener('click', function () {
  createSlideshow(ar0104);
});
const ar0105 = [slides[352], slides[353]];
document.getElementById('c0105').addEventListener('click', function () {
  createSlideshow(ar0105);
});
const ar0106 = [slides[397], slides[405]];
document.getElementById('c0106').addEventListener('click', function () {
  createSlideshow(ar0106);
});
const ar0107 = [slides[414]];
document.getElementById('c0107').addEventListener('click', function () {
  createSlideshow(ar0107);
});
const ar0108 = [slides[419]];
document.getElementById('c0108').addEventListener('click', function () {
  createSlideshow(ar0108);
});
const ar0109 = [slides[428], slides[429]];
document.getElementById('c0109').addEventListener('click', function () {
  createSlideshow(ar0109);
});
const ar0110 = [slides[453], slides[456], slides[457], slides[458], slides[462]];
document.getElementById('c0110').addEventListener('click', function () {
  createSlideshow(ar0110);
});
const ar0111 = [slides[472]];
document.getElementById('c0111').addEventListener('click', function () {
  createSlideshow(ar0111);
});
const ar0112 = [slides[497]];
document.getElementById('c0112').addEventListener('click', function () {
  createSlideshow(ar0112);
});
const ar0113 = [slides[498], slides[510]];
document.getElementById('c0113').addEventListener('click', function () {
  createSlideshow(ar0113);
});
const ar0114 = [slides[542], slides[544]];
document.getElementById('c0114').addEventListener('click', function () {
  createSlideshow(ar0114);
});
const ar0115 = [slides[567], slides[573]];
document.getElementById('c0115').addEventListener('click', function () {
  createSlideshow(ar0115);
});
const ar0116 = [slides[611]];
document.getElementById('c0116').addEventListener('click', function () {
  createSlideshow(ar0116);
});
const ar0117 = [slides[627], slides[628]];
document.getElementById('c0117').addEventListener('click', function () {
  createSlideshow(ar0117);
});
const ar0118 = [slides[640], slides[642], slides[644]];
document.getElementById('c0118').addEventListener('click', function () {
  createSlideshow(ar0118);
});
const ar0119 = [slides[657], slides[659], slides[661]];
document.getElementById('c0119').addEventListener('click', function () {
  createSlideshow(ar0119);
});
const ar0120 = [slides[679]];
document.getElementById('c0120').addEventListener('click', function () {
  createSlideshow(ar0120);
});
const ar0121 = [slides[683]];
document.getElementById('c0121').addEventListener('click', function () {
  createSlideshow(ar0121);
});
const ar0122 = [slides[696]];
document.getElementById('c0122').addEventListener('click', function () {
  createSlideshow(ar0122);
});
const ar0123 = [slides[710]];
document.getElementById('c0123').addEventListener('click', function () {
  createSlideshow(ar0123);
});
const ar0124 = [slides[746], slides[747], slides[748]];
document.getElementById('c0124').addEventListener('click', function () {
  createSlideshow(ar0124);
});
const ar0125 = [slides[769]];
document.getElementById('c0125').addEventListener('click', function () {
  createSlideshow(ar0125);
});
const ar0126 = [slides[772]];
document.getElementById('c0126').addEventListener('click', function () {
  createSlideshow(ar0126);
});
const ar0127 = [slides[824], slides[825]];
document.getElementById('c0127').addEventListener('click', function () {
  createSlideshow(ar0127);
});
const ar0128 = [slides[826], slides[827], slides[828], slides[830]];
document.getElementById('c0128').addEventListener('click', function () {
  createSlideshow(ar0128);
});
const ar0129 = [slides[841]];
document.getElementById('c0129').addEventListener('click', function () {
  createSlideshow(ar0129);
});
const ar0130 = [slides[858]];
document.getElementById('c0130').addEventListener('click', function () {
  createSlideshow(ar0130);
});
const ar0131 = [slides[866]];
document.getElementById('c0131').addEventListener('click', function () {
  createSlideshow(ar0131);
});
const ar0132 = [slides[876]];
document.getElementById('c0132').addEventListener('click', function () {
  createSlideshow(ar0132);
});
const ar0133 = [slides[887]];
document.getElementById('c0133').addEventListener('click', function () {
  createSlideshow(ar0133);
});
const ar0134 = [slides[893]];
document.getElementById('c0134').addEventListener('click', function () {
  createSlideshow(ar0134);
});
const ar0135 = [slides[898]];
document.getElementById('c0135').addEventListener('click', function () {
  createSlideshow(ar0135);
});
const ar0136 = [slides[901]];
document.getElementById('c0136').addEventListener('click', function () {
  createSlideshow(ar0136);
});
const ar0137 = [slides[915]];
document.getElementById('c0137').addEventListener('click', function () {
  createSlideshow(ar0137);
});
const ar0138 = [slides[944]];
document.getElementById('c0138').addEventListener('click', function () {
  createSlideshow(ar0138);
});
const arCompRef006 = [slides[8], slides[9], slides[18], slides[115], slides[52], slides[57], slides[58], slides[59], slides[65], slides[66], slides[75], slides[76], slides[84], slides[155], slides[196], slides[203], slides[214], slides[218], slides[226], slides[317], slides[326], slides[352], slides[353], slides[397], slides[405], slides[414], slides[419], slides[428], slides[429], slides[453], slides[456], slides[457], slides[458], slides[462], slides[472], slides[497], slides[498], slides[510], slides[542], slides[544], slides[567], slides[573], slides[611], slides[627], slides[628], slides[640], slides[642], slides[644], slides[657], slides[659], slides[661], slides[679], slides[683], slides[696], slides[710], slides[746], slides[747], slides[748], slides[769], slides[772], slides[824], slides[825], slides[826], slides[827], slides[828], slides[830], slides[841], slides[858], slides[866], slides[876], slides[887], slides[893], slides[898], slides[901], slides[915], slides[944]];
document.getElementById('compRef006').addEventListener('click', function () {
  createSlideshow(arCompRef006);
});

// CODE FOR TOPIC 7

const show7Tab = document.getElementById('topicName7');
const open7Tabs = document.querySelectorAll('.content7');
show7Tab.addEventListener('click', function () {
  open7Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret7 = document.getElementById('pointer7');
show7Tab.addEventListener('click', function () {
  caret7.classList.toggle('caretD');
});

const ar0139 = [slides[214], slides[217]];
document.getElementById('c0139').addEventListener('click', function () {
  createSlideshow(ar0139);
});
const ar0140 = [slides[317]];
document.getElementById('c0140').addEventListener('click', function () {
  createSlideshow(ar0140);
});
const ar0141 = [slides[374]];
document.getElementById('c0141').addEventListener('click', function () {
  createSlideshow(ar0141);
});
const ar0142 = [slides[397], slides[398]];
document.getElementById('c0142').addEventListener('click', function () {
  createSlideshow(ar0142);
});
const ar0143 = [slides[439]];
document.getElementById('c0143').addEventListener('click', function () {
  createSlideshow(ar0143);
});
const ar0144 = [slides[472]];
document.getElementById('c0144').addEventListener('click', function () {
  createSlideshow(ar0144);
});
const ar0145 = [slides[555]];
document.getElementById('c0145').addEventListener('click', function () {
  createSlideshow(ar0145);
});
const ar0146 = [slides[610]];
document.getElementById('c0146').addEventListener('click', function () {
  createSlideshow(ar0146);
});
const ar0147 = [slides[662]];
document.getElementById('c0147').addEventListener('click', function () {
  createSlideshow(ar0147);
});
const ar0148 = [slides[683], slides[692]];
document.getElementById('c0148').addEventListener('click', function () {
  createSlideshow(ar0148);
});
const ar0149 = [slides[700]];
document.getElementById('c0149').addEventListener('click', function () {
  createSlideshow(ar0149);
});
const ar0150 = [slides[826]];
document.getElementById('c0150').addEventListener('click', function () {
  createSlideshow(ar0150);
});
const ar0151 = [slides[890]];
document.getElementById('c0151').addEventListener('click', function () {
  createSlideshow(ar0151);
});
const ar0152 = [slides[915]];
document.getElementById('c0152').addEventListener('click', function () {
  createSlideshow(ar0152);
});
const arCompRef007 = [slides[214], slides[217], slides[317], slides[374], slides[397], slides[398], slides[439], slides[472], slides[555], slides[610], slides[662], slides[683], slides[692], slides[700], slides[826], slides[890], slides[915]];
document.getElementById('compRef007').addEventListener('click', function () {
  createSlideshow(arCompRef007);
})

// CODE FOR TOPIC 8

const show8Tab = document.getElementById('topicName8');
const open8Tabs = document.querySelectorAll('.content8');
show8Tab.addEventListener('click', function () {
  open8Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret8 = document.getElementById('pointer8');
show8Tab.addEventListener('click', function () {
  caret8.classList.toggle('caretD');
});

const ar0153 = [slides[17], slides[19], slides[20], slides[22], slides[26], slides[33], slides[34], slides[58], slides[59]];
document.getElementById('c0153').addEventListener('click', function () {
  createSlideshow(ar0153);
});
const ar0154 = [slides[78]];
document.getElementById('c0154').addEventListener('click', function () {
  createSlideshow(ar0154);
});
const ar0155 = [slides[155], slides[157]];
document.getElementById('c0155').addEventListener('click', function () {
  createSlideshow(ar0155);
});
const ar0156 = [slides[205], slides[206], slides[217], slides[223], slides[226], slides[229], slides[230]];
document.getElementById('c0156').addEventListener('click', function () {
  createSlideshow(ar0156);
});
const ar0157 = [slides[342], slides[343]];
document.getElementById('c0157').addEventListener('click', function () {
  createSlideshow(ar0157);
});
const ar0158 = [slides[414], slides[415]];
document.getElementById('c0158').addEventListener('click', function () {
  createSlideshow(ar0158);
});
const ar0159 = [slides[452], slides[453], slides[454], slides[458], slides[459]];
document.getElementById('c0159').addEventListener('click', function () {
  createSlideshow(ar0159);
});
const ar0160 = [slides[519]];
document.getElementById('c0160').addEventListener('click', function () {
  createSlideshow(ar0160);
});
const ar0161 = [slides[660]];
document.getElementById('c0161').addEventListener('click', function () {
  createSlideshow(ar0161);
});
const ar0162 = [slides[747], slides[748]];
document.getElementById('c0162').addEventListener('click', function () {
  createSlideshow(ar0162);
});
const ar0163 = [slides[858]];
document.getElementById('c0163').addEventListener('click', function () {
  createSlideshow(ar0163);
});
const ar0164 = [slides[865]];
document.getElementById('c0164').addEventListener('click', function () {
  createSlideshow(ar0164);
});
const arCompRef008 = [slides[17], slides[19], slides[20], slides[22], slides[26], slides[33], slides[34], slides[58], slides[59], slides[78], slides[155], slides[157], slides[205], slides[206], slides[217], slides[223], slides[226], slides[229], slides[230], slides[342], slides[343], slides[414], slides[415], slides[452], slides[453], slides[454], slides[458], slides[459], slides[519], slides[660], slides[747], slides[748], slides[858], slides[865]];
document.getElementById('compRef008').addEventListener('click', function () {
  createSlideshow(arCompRef008);
})

// CODE FOR TOPIC 9

const show9Tab = document.getElementById('topicName9');
const open9Tabs = document.querySelectorAll('.content9');
show9Tab.addEventListener('click', function () {
  open9Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret9 = document.getElementById('pointer9');
show9Tab.addEventListener('click', function () {
  caret9.classList.toggle('caretD');
});
const ar0165 = [slides[77]];
document.getElementById('c0165').addEventListener('click', function () {
  createSlideshow(ar0165);
});
const ar0166 = [slides[79], slides[104]];
document.getElementById('c0166').addEventListener('click', function () {
  createSlideshow(ar0166);
});
const ar0167 = [slides[188]];
document.getElementById('c0167').addEventListener('click', function () {
  createSlideshow(ar0167);
});
const ar0168 = [slides[205], slides[206], slides[210], slides[228], slides[234]];
document.getElementById('c0168').addEventListener('click', function () {
  createSlideshow(ar0168);
});
const ar0169 = [slides[349], slides[350]];
document.getElementById('c0169').addEventListener('click', function () {
  createSlideshow(ar0169);
});
const ar0170 = [slides[402], slides[404]];
document.getElementById('c0170').addEventListener('click', function () {
  createSlideshow(ar0170);
});
const ar0171 = [slides[412]];
document.getElementById('c0171').addEventListener('click', function () {
  createSlideshow(ar0171);
});
const ar0172 = [slides[426], slides[442]];
document.getElementById('c0172').addEventListener('click', function () {
  createSlideshow(ar0172);
});
const ar0173 = [slides[457]];
document.getElementById('c0173').addEventListener('click', function () {
  createSlideshow(ar0173);
});
const ar0174 = [slides[531], slides[532]];
document.getElementById('c0174').addEventListener('click', function () {
  createSlideshow(ar0174);
});
const ar0175 = [slides[635], slides[636]];
document.getElementById('c0175').addEventListener('click', function () {
  createSlideshow(ar0175);
});
const ar0176 = [slides[663]];
document.getElementById('c0176').addEventListener('click', function () {
  createSlideshow(ar0176);
});
const ar0177 = [slides[697]];
document.getElementById('c0177').addEventListener('click', function () {
  createSlideshow(ar0177);
});
const ar0178 = [slides[735], slides[736]];
document.getElementById('c0178').addEventListener('click', function () {
  createSlideshow(ar0178);
});
const ar0179 = [slides[747]];
document.getElementById('c0179').addEventListener('click', function () {
  createSlideshow(ar0179);
});
const ar0180 = [slides[771]];
document.getElementById('c0180').addEventListener('click', function () {
  createSlideshow(ar0180);
});
const ar0181 = [slides[883]];
document.getElementById('c0181').addEventListener('click', function () {
  createSlideshow(ar0181);
});
const ar0182 = [slides[919], slides[921]];
document.getElementById('c0182').addEventListener('click', function () {
  createSlideshow(ar0182);
});
const ar0183 = [slides[926]];
document.getElementById('c0183').addEventListener('click', function () {
  createSlideshow(ar0183);
});
const ar0184 = [slides[942]];
document.getElementById('c0184').addEventListener('click', function () {
  createSlideshow(ar0184);
});
const arCompRef009 = [slides[77], slides[6], slides[104], slides[188], slides[205], slides[206], slides[210], slides[228], slides[234], slides[349], slides[350], slides[402], slides[404], slides[412], slides[426], slides[442], slides[457], slides[531], slides[532], slides[635], slides[636], slides[663], slides[697], slides[735], slides[736], slides[747], slides[771], slides[883], slides[919], slides[921], slides[926], slides[942]];
document.getElementById('compRef009').addEventListener('click', function () {
  createSlideshow(arCompRef009);
});

// CODE FOR TOPIC 10

const show10Tab = document.getElementById('topicName10');
const open10Tabs = document.querySelectorAll('.content10');
show10Tab.addEventListener('click', function () {
  open10Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret10 = document.getElementById('pointer10');
show10Tab.addEventListener('click', function () {
  caret10.classList.toggle('caretD');
});
const ar0185 = [slides[65]];
document.getElementById('c0185').addEventListener('click', function () {
  createSlideshow(ar0185);
});
const ar0186 = [slides[164]];
document.getElementById('c0186').addEventListener('click', function () {
  createSlideshow(ar0186);
});
const ar0187 = [slides[266]];
document.getElementById('c0187').addEventListener('click', function () {
  createSlideshow(ar0187);
});
const ar0188 = [slides[298], slides[299]];
document.getElementById('c0188').addEventListener('click', function () {
  createSlideshow(ar0188);
});
const ar0189 = [slides[779]];
document.getElementById('c0189').addEventListener('click', function () {
  createSlideshow(ar0189);
});
const arCompRef010 = [slides[65], slides[164], slides[266], slides[298], slides[299], slides[779]];
document.getElementById('compRef010').addEventListener('click', function () {
  createSlideshow(arCompRef010);
});

// CODE FOR TOPIC 11

const show11Tab = document.getElementById('topicName11');
const open11Tabs = document.querySelectorAll('.content11');
show11Tab.addEventListener('click', function () {
  open11Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret11 = document.getElementById('pointer11');
show11Tab.addEventListener('click', function () {
  caret11.classList.toggle('caretD');
});
const ar0190 = [slides[97]];
document.getElementById('c0190').addEventListener('click', function () {
  createSlideshow(ar0190);
});
const ar0191 = [slides[144], slides[154]];
document.getElementById('c0191').addEventListener('click', function () {
  createSlideshow(ar0191);
});
const ar0192 = [slides[226]];
document.getElementById('c0192').addEventListener('click', function () {
  createSlideshow(ar0192);
});
const ar0193 = [slides[341]];
document.getElementById('c0193').addEventListener('click', function () {
  createSlideshow(ar0193);
});
const ar0194 = [slides[415], slides[416]];
document.getElementById('c0194').addEventListener('click', function () {
  createSlideshow(ar0194);
});
const ar0195 = [slides[645]];
document.getElementById('c0195').addEventListener('click', function () {
  createSlideshow(ar0195);
});
const ar0196 = [slides[735]];
document.getElementById('c0196').addEventListener('click', function () {
  createSlideshow(ar0196);
});
const arCompRef011 = [slides[97], slides[144], slides[154], slides[226], slides[341], slides[415], slides[416], slides[645], slides[735]];
document.getElementById('compRef011').addEventListener('click', function () {
  createSlideshow(arCompRef011);
});

// CODE FOR TOPIC 12

const show12Tab = document.getElementById('topicName12');
const open12Tabs = document.querySelectorAll('.content12');
show12Tab.addEventListener('click', function () {
  open12Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});

const caret12 = document.getElementById('pointer12');
show12Tab.addEventListener('click', function () {
  caret12.classList.toggle('caretD');
});
const ar0197 = [slides[8], slides[27]];
document.getElementById('c0197').addEventListener('click', function () {
  createSlideshow(ar0197);
});
const ar0198 = [slides[79], slides[87], slides[88]];
document.getElementById('c0198').addEventListener('click', function () {
  createSlideshow(ar0198);
});
const ar0199 = [slides[122]];
document.getElementById('c0199').addEventListener('click', function () {
  createSlideshow(ar0199);
});
const ar0200 = [slides[203], slides[205], slides[216], slides[217], slides[222], slides[223]];
document.getElementById('c0200').addEventListener('click', function () {
  createSlideshow(ar0200);
});
const ar0201 = [slides[249], slides[250]];
document.getElementById('c0201').addEventListener('click', function () {
  createSlideshow(ar0201);
});
const ar0202 = [slides[330], slides[331]];
document.getElementById('c0202').addEventListener('click', function () {
  createSlideshow(ar0202);
});
const ar0203 = [slides[353]];
document.getElementById('c0203').addEventListener('click', function () {
  createSlideshow(ar0203);
});
const ar0204 = [slides[408], slides[410], slides[413]];
document.getElementById('c0204').addEventListener('click', function () {
  createSlideshow(ar0204);
});
const ar0205 = [slides[418], slides[419], slides[424]];
document.getElementById('c0205').addEventListener('click', function () {
  createSlideshow(ar0205);
});
const ar0206 = [slides[426]];
document.getElementById('c0206').addEventListener('click', function () {
  createSlideshow(ar0206);
});
const ar0207 = [slides[463], slides[465]];
document.getElementById('c0207').addEventListener('click', function () {
  createSlideshow(ar0207);
});
const ar0208 = [slides[517]];
document.getElementById('c0208').addEventListener('click', function () {
  createSlideshow(ar0208);
});
const ar0209 = [slides[541]];
document.getElementById('c0209').addEventListener('click', function () {
  createSlideshow(ar0209);
});
const ar0210 = [slides[546]];
document.getElementById('c0210').addEventListener('click', function () {
  createSlideshow(ar0210);
});
const ar0211 = [slides[568]];
document.getElementById('c0211').addEventListener('click', function () {
  createSlideshow(ar0211);
});
const ar0212 = [slides[573], slides[574], slides[580], slides[581], slides[582]];
document.getElementById('c0212').addEventListener('click', function () {
  createSlideshow(ar0212);
});
const ar0213 = [slides[627]];
document.getElementById('c0213').addEventListener('click', function () {
  createSlideshow(ar0213);
});
const ar0214 = [slides[640]];
document.getElementById('c0214').addEventListener('click', function () {
  createSlideshow(ar0214);
});
const ar0215 = [slides[646], slides[647], slides[648], slides[654]];
document.getElementById('c0215').addEventListener('click', function () {
  createSlideshow(ar0215);
});
const ar0216 = [slides[656]];
document.getElementById('c0216').addEventListener('click', function () {
  createSlideshow(ar0216);
});
const ar0217 = [slides[662]];
document.getElementById('c0217').addEventListener('click', function () {
  createSlideshow(ar0217);
});
const ar0218 = [slides[696]];
document.getElementById('c0218').addEventListener('click', function () {
  createSlideshow(ar0218);
});
const ar0219 = [slides[710], slides[711]];
document.getElementById('c0219').addEventListener('click', function () {
  createSlideshow(ar0219);
});
const ar0220 = [slides[711], slides[717]];
document.getElementById('c0220').addEventListener('click', function () {
  createSlideshow(ar0220);
});
const ar0221 = [slides[725]];
document.getElementById('c0221').addEventListener('click', function () {
  createSlideshow(ar0221);
});
const ar0222 = [slides[731], slides[732], slides[742]];
document.getElementById('c0222').addEventListener('click', function () {
  createSlideshow(ar0222);
});
const ar0223 = [slides[755], slides[756], slides[757], slides[759]];
document.getElementById('c0223').addEventListener('click', function () {
  createSlideshow(ar0223);
});
const ar0224 = [slides[772], slides[779]];
document.getElementById('c0224').addEventListener('click', function () {
  createSlideshow(ar0224);
});
const ar0225 = [slides[781]];
document.getElementById('c0225').addEventListener('click', function () {
  createSlideshow(ar0225);
});
const ar0226 = [slides[791]];
document.getElementById('c0226').addEventListener('click', function () {
  createSlideshow(ar0226);
});
const ar0227 = [slides[798]];
document.getElementById('c0227').addEventListener('click', function () {
  createSlideshow(ar0227);
});
const ar0228 = [slides[824], slides[825]];
document.getElementById('c0228').addEventListener('click', function () {
  createSlideshow(ar0228);
});
const ar0229 = [slides[834]];
document.getElementById('c0229').addEventListener('click', function () {
  createSlideshow(ar0229);
});
const ar0230 = [slides[842]];
document.getElementById('c0230').addEventListener('click', function () {
  createSlideshow(ar0230);
});
const ar0231 = [slides[847], slides[848]];
document.getElementById('c0231').addEventListener('click', function () {
  createSlideshow(ar0231);
});
const ar0232 = [slides[858]];
document.getElementById('c0232').addEventListener('click', function () {
  createSlideshow(ar0232);
});
const ar0233 = [slides[875]];
document.getElementById('c0233').addEventListener('click', function () {
  createSlideshow(ar0233);
});
const ar0234 = [slides[887]];
document.getElementById('c0234').addEventListener('click', function () {
  createSlideshow(ar0234);
});
const ar0235 = [slides[893]];
document.getElementById('c0235').addEventListener('click', function () {
  createSlideshow(ar0235);
});
const ar0236 = [slides[897]];
document.getElementById('c0236').addEventListener('click', function () {
  createSlideshow(ar0236);
});
const ar0237 = [slides[909]];
document.getElementById('c0237').addEventListener('click', function () {
  createSlideshow(ar0237);
});
const ar0238 = [slides[926]];
document.getElementById('c0238').addEventListener('click', function () {
  createSlideshow(ar0238);
});
const ar0239 = [slides[942]];
document.getElementById('c0239').addEventListener('click', function () {
  createSlideshow(ar0239);
});
const ar0240 = [slides[944]];
document.getElementById('c0240').addEventListener('click', function () {
  createSlideshow(ar0240);
});
const ar0241 = [slides[953]];
document.getElementById('c0241').addEventListener('click', function () {
  createSlideshow(ar0241);
});
const arCompRef012 = [slides[8], slides[27], slides[79], slides[87], slides[88], slides[122], slides[203], slides[205], slides[216], slides[217], slides[222], slides[223], slides[249], slides[250], slides[330], slides[331], slides[353], slides[408], slides[410], slides[413], slides[418], slides[419], slides[424], slides[426], slides[463], slides[465], slides[517], slides[541], slides[546], slides[568], slides[573], slides[574], slides[580], slides[581], slides[582], slides[627], slides[640], slides[646], slides[647], slides[648], slides[654], slides[656], slides[662], slides[696], slides[710], slides[711], slides[711], slides[717], slides[725], slides[731], slides[732], slides[742], slides[755], slides[756], slides[757], slides[759], slides[772], slides[779], slides[781], slides[791], slides[798], slides[824], slides[825], slides[834], slides[842], slides[847], slides[848], slides[858], slides[875], slides[887], slides[893], slides[897], slides[909], slides[926], slides[942], slides[944], slides[953]];
document.getElementById('compRef012').addEventListener('click', function () {
  createSlideshow(arCompRef012);
});

// CODE FOR TOPIC 13

const show13Tab = document.getElementById('topicName13');
const open13Tabs = document.querySelectorAll('.content13');
show13Tab.addEventListener('click', function () {
  open13Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret13 = document.getElementById('pointer13');
show13Tab.addEventListener('click', function () {
  caret13.classList.toggle('caretD');
});

const ar0242 = [slides[2]];
document.getElementById('c0242').addEventListener('click', function () {
  createSlideshow(ar0242);
});
const ar0243 = [slides[25], slides[27], slides[63], slides[77]];
document.getElementById('c0243').addEventListener('click', function () {
  createSlideshow(ar0243);
});
const ar0244 = [slides[83], slides[100], slides[104], slides[108], slides[118]];
document.getElementById('c0244').addEventListener('click', function () {
  createSlideshow(ar0244);
});
const ar0245 = [slides[155], slides[156], slides[157]];
document.getElementById('c0245').addEventListener('click', function () {
  createSlideshow(ar0245);
});
const ar0246 = [slides[175], slides[176], slides[181], slides[202]];
document.getElementById('c0246').addEventListener('click', function () {
  createSlideshow(ar0246);
});
const ar0247 = [slides[203], slides[205], slides[216], slides[217]];
document.getElementById('c0247').addEventListener('click', function () {
  createSlideshow(ar0247);
});
const ar0248 = [slides[326]];
document.getElementById('c0248').addEventListener('click', function () {
  createSlideshow(ar0248);
});
const ar0249 = [slides[341], slides[343]];
document.getElementById('c0249').addEventListener('click', function () {
  createSlideshow(ar0249);
});
const ar0250 = [slides[362]];
document.getElementById('c0250').addEventListener('click', function () {
  createSlideshow(ar0250);
});
const ar0251 = [slides[406]];
document.getElementById('c0251').addEventListener('click', function () {
  createSlideshow(ar0251);
});
const ar0252 = [slides[434]];
document.getElementById('c0252').addEventListener('click', function () {
  createSlideshow(ar0252);
});
const ar0253 = [slides[494]];
document.getElementById('c0253').addEventListener('click', function () {
  createSlideshow(ar0253);
});
const ar0254 = [slides[498], slides[510]];
document.getElementById('c0254').addEventListener('click', function () {
  createSlideshow(ar0254);
});
const ar0255 = [slides[515]];
document.getElementById('c0255').addEventListener('click', function () {
  createSlideshow(ar0255);
});
const ar0256 = [slides[541]];
document.getElementById('c0256').addEventListener('click', function () {
  createSlideshow(ar0256);
});
const ar0257 = [slides[567], slides[573]];
document.getElementById('c0257').addEventListener('click', function () {
  createSlideshow(ar0257);
});
const ar0258 = [slides[573], slides[574]];
document.getElementById('c0258').addEventListener('click', function () {
  createSlideshow(ar0258);
});
const ar0259 = [slides[649]];
document.getElementById('c0259').addEventListener('click', function () {
  createSlideshow(ar0259);
});
const ar0260 = [slides[659]];
document.getElementById('c0260').addEventListener('click', function () {
  createSlideshow(ar0260);
});
const ar0261 = [slides[666]];
document.getElementById('c0261').addEventListener('click', function () {
  createSlideshow(ar0261);
});
const ar0262 = [slides[683]];
document.getElementById('c0262').addEventListener('click', function () {
  createSlideshow(ar0262);
});
const ar0263 = [slides[701]];
document.getElementById('c0263').addEventListener('click', function () {
  createSlideshow(ar0263);
});
const ar0264 = [slides[711]];
document.getElementById('c0264').addEventListener('click', function () {
  createSlideshow(ar0264);
});
const ar0265 = [slides[711]];
document.getElementById('c0265').addEventListener('click', function () {
  createSlideshow(ar0265);
});
const ar0266 = [slides[729]];
document.getElementById('c0266').addEventListener('click', function () {
  createSlideshow(ar0266);
});
const ar0267 = [slides[739]];
document.getElementById('c0267').addEventListener('click', function () {
  createSlideshow(ar0267);
});
const ar0268 = [slides[770], slides[779]];
document.getElementById('c0268').addEventListener('click', function () {
  createSlideshow(ar0268);
});
const ar0269 = [slides[789]];
document.getElementById('c0269').addEventListener('click', function () {
  createSlideshow(ar0269);
});
const ar0270 = [slides[799]];
document.getElementById('c0270').addEventListener('click', function () {
  createSlideshow(ar0270);
});
const ar0271 = [slides[815], slides[817]];
document.getElementById('c0271').addEventListener('click', function () {
  createSlideshow(ar0271);
});
const ar0272 = [slides[840], slides[841]];
document.getElementById('c0272').addEventListener('click', function () {
  createSlideshow(ar0272);
});
const ar0273 = [slides[858]];
document.getElementById('c0273').addEventListener('click', function () {
  createSlideshow(ar0273);
});
const ar0274 = [slides[897]];
document.getElementById('c0274').addEventListener('click', function () {
  createSlideshow(ar0274);
});
const ar0275 = [slides[916]];
document.getElementById('c0275').addEventListener('click', function () {
  createSlideshow(ar0275);
});
const ar0276 = [slides[919]];
document.getElementById('c0276').addEventListener('click', function () {
  createSlideshow(ar0276);
});
const ar0277 = [slides[930]];
document.getElementById('c0277').addEventListener('click', function () {
  createSlideshow(ar0277);
});
const ar0278 = [slides[964]];
document.getElementById('c0278').addEventListener('click', function () {
  createSlideshow(ar0278);
});
const arCompRef013 = [slides[2], slides[25], slides[27], slides[63], slides[77], slides[83], slides[100], slides[104], slides[108], slides[118], slides[155], slides[156], slides[157], slides[175], slides[176], slides[181], slides[202], slides[203], slides[205], slides[216], slides[217], slides[326], slides[341], slides[343], slides[362], slides[406], slides[434], slides[494], slides[498], slides[510], slides[515], slides[541], slides[567], slides[573], slides[573], slides[574], slides[649], slides[659], slides[666], slides[683], slides[701], slides[711], slides[729], slides[739], slides[770], slides[779], slides[789], slides[799], slides[815], slides[817], slides[840], slides[841], slides[858], slides[897], slides[916], slides[919], slides[930], slides[964]];
document.getElementById('compRef013').addEventListener('click', function () {
  createSlideshow(arCompRef013);
});

// CODE FOR TOPIC 14

const show14Tab = document.getElementById('topicName14');
const open14Tabs = document.querySelectorAll('.content14');
show14Tab.addEventListener('click', function () {
  open14Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret14 = document.getElementById('pointer14');
show14Tab.addEventListener('click', function () {
  caret14.classList.toggle('caretD');
});

const ar0279 = [slides[55], slides[59], slides[69]];
document.getElementById('c0279').addEventListener('click', function () {
  createSlideshow(ar0279);
});
const ar0280 = [slides[110]];
document.getElementById('c0280').addEventListener('click', function () {
  createSlideshow(ar0280);
});
const ar0281 = [slides[197]];
document.getElementById('c0281').addEventListener('click', function () {
  createSlideshow(ar0281);
});
const ar0282 = [slides[332]];
document.getElementById('c0282').addEventListener('click', function () {
  createSlideshow(ar0282);
});
const ar0283 = [slides[435]];
document.getElementById('c0283').addEventListener('click', function () {
  createSlideshow(ar0283);
});
const ar0284 = [slides[455], slides[456]];
document.getElementById('c0284').addEventListener('click', function () {
  createSlideshow(ar0284);
});
const ar0285 = [slides[478]];
document.getElementById('c0285').addEventListener('click', function () {
  createSlideshow(ar0285);
});
const ar0286 = [slides[540]];
document.getElementById('c0286').addEventListener('click', function () {
  createSlideshow(ar0286);
});
const ar0287 = [slides[678]];
document.getElementById('c0287').addEventListener('click', function () {
  createSlideshow(ar0287);
});
const ar0288 = [slides[702]];
document.getElementById('c0288').addEventListener('click', function () {
  createSlideshow(ar0288);
});
const ar0289 = [slides[890]];
document.getElementById('c0289').addEventListener('click', function () {
  createSlideshow(ar0289);
});
const arCompRef014 = [slides[55], slides[59], slides[69], slides[110], slides[197], slides[332], slides[435], slides[455], slides[456], slides[478], slides[540], slides[678], slides[702], slides[890]];
document.getElementById('compRef014').addEventListener('click', function () {
  createSlideshow(arCompRef014);
});

// CODE FOR TOPIC 15

const show15Tab = document.getElementById('topicName15');
const open15Tabs = document.querySelectorAll('.content15');
show15Tab.addEventListener('click', function () {
  open15Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret15 = document.getElementById('pointer15');
show15Tab.addEventListener('click', function () {
  caret15.classList.toggle('caretD');
});

const ar0290 = [slides[37], slides[40]];
document.getElementById('c0290').addEventListener('click', function () {
  createSlideshow(ar0290);
});
const ar0291 = [slides[84]];
document.getElementById('c0291').addEventListener('click', function () {
  createSlideshow(ar0291);
});
const ar0292 = [slides[135], slides[151], slides[161]];
document.getElementById('c0292').addEventListener('click', function () {
  createSlideshow(ar0292);
});
const ar0293 = [slides[180], slides[181], slides[196]];
document.getElementById('c0293').addEventListener('click', function () {
  createSlideshow(ar0293);
});
const ar0294 = [slides[213]];
document.getElementById('c0294').addEventListener('click', function () {
  createSlideshow(ar0294);
});
const ar0295 = [slides[397]];
document.getElementById('c0295').addEventListener('click', function () {
  createSlideshow(ar0295);
});
const ar0296 = [slides[421]];
document.getElementById('c0296').addEventListener('click', function () {
  createSlideshow(ar0296);
});
const ar0297 = [slides[453], slides[455], slides[456]];
document.getElementById('c0297').addEventListener('click', function () {
  createSlideshow(ar0297);
});
const ar0298 = [slides[478]];
document.getElementById('c0298').addEventListener('click', function () {
  createSlideshow(ar0298);
});
const ar0299 = [slides[506]];
document.getElementById('c0299').addEventListener('click', function () {
  createSlideshow(ar0299);
});
const ar0300 = [slides[540], slides[541]];
document.getElementById('c0300').addEventListener('click', function () {
  createSlideshow(ar0300);
});
const ar0301 = [slides[682]];
document.getElementById('c0301').addEventListener('click', function () {
  createSlideshow(ar0301);
});
const ar0302 = [slides[737], slides[740], slides[741]];
document.getElementById('c0302').addEventListener('click', function () {
  createSlideshow(ar0302);
});
const ar0303 = [slides[745]];
document.getElementById('c0303').addEventListener('click', function () {
  createSlideshow(ar0303);
});
const ar0304 = [slides[775], slides[776]];
document.getElementById('c0304').addEventListener('click', function () {
  createSlideshow(ar0304);
});
const ar0305 = [slides[840]];
document.getElementById('c0305').addEventListener('click', function () {
  createSlideshow(ar0305);
});
const ar0306 = [slides[921]];
document.getElementById('c0306').addEventListener('click', function () {
  createSlideshow(ar0306);
});
const arCompRef015 = [slides[37], slides[40], slides[84], slides[135], slides[151], slides[161], slides[180], slides[181], slides[196], slides[213], slides[397], slides[421], slides[453], slides[455], slides[456], slides[478], slides[506], slides[540], slides[541], slides[682], slides[737], slides[740], slides[741], slides[745], slides[775], slides[776], slides[840], slides[921]];
document.getElementById('compRef015').addEventListener('click', function () {
  createSlideshow(arCompRef015);
});

// CODE FOR TOPIC 16

const show16Tab = document.getElementById('topicName16');
const open16Tabs = document.querySelectorAll('.content16');
show16Tab.addEventListener('click', function () {
  open16Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret16 = document.getElementById('pointer16');
show16Tab.addEventListener('click', function () {
  caret16.classList.toggle('caretD');
});
const ar0307 = [slides[2]];
document.getElementById('c0307').addEventListener('click', function () {
  createSlideshow(ar0307);
});
const ar0308 = [slides[10], slides[25], slides[33], slides[34], slides[43], slides[44], slides[49], slides[64], slides[77], slides[78]];
document.getElementById('c0308').addEventListener('click', function () {
  createSlideshow(ar0308);
});
const ar0309 = [slides[130], slides[160]];
document.getElementById('c0309').addEventListener('click', function () {
  createSlideshow(ar0309);
});
const ar0310 = [slides[180], slides[196]];
document.getElementById('c0310').addEventListener('click', function () {
  createSlideshow(ar0310);
});
const ar0311 = [slides[205], slides[230]];
document.getElementById('c0311').addEventListener('click', function () {
  createSlideshow(ar0311);
});
const ar0312 = [slides[269], slides[270]];
document.getElementById('c0312').addEventListener('click', function () {
  createSlideshow(ar0312);
});
const ar0313 = [slides[363], slides[369]];
document.getElementById('c0313').addEventListener('click', function () {
  createSlideshow(ar0313);
});
const ar0314 = [slides[385], slides[391], slides[392]];
document.getElementById('c0314').addEventListener('click', function () {
  createSlideshow(ar0314);
});
const ar0315 = [slides[398]];
document.getElementById('c0315').addEventListener('click', function () {
  createSlideshow(ar0315);
});
const ar0316 = [slides[421], slides[422]];
document.getElementById('c0316').addEventListener('click', function () {
  createSlideshow(ar0316);
});
const ar0317 = [slides[428]];
document.getElementById('c0317').addEventListener('click', function () {
  createSlideshow(ar0317);
});
const ar0318 = [slides[478], slides[482]];
document.getElementById('c0318').addEventListener('click', function () {
  createSlideshow(ar0318);
});
const ar0319 = [slides[498]];
document.getElementById('c0319').addEventListener('click', function () {
  createSlideshow(ar0319);
});
const ar0320 = [slides[528]];
document.getElementById('c0320').addEventListener('click', function () {
  createSlideshow(ar0320);
});
const ar0321 = [slides[556]];
document.getElementById('c0321').addEventListener('click', function () {
  createSlideshow(ar0321);
});
const ar0322 = [slides[582]];
document.getElementById('c0322').addEventListener('click', function () {
  createSlideshow(ar0322);
});
const ar0323 = [slides[585]];
document.getElementById('c0323').addEventListener('click', function () {
  createSlideshow(ar0323);
});
const ar0324 = [slides[676]];
document.getElementById('c0324').addEventListener('click', function () {
  createSlideshow(ar0324);
});
const ar0325 = [slides[716]];
document.getElementById('c0325').addEventListener('click', function () {
  createSlideshow(ar0325);
});
const ar0326 = [slides[727]];
document.getElementById('c0326').addEventListener('click', function () {
  createSlideshow(ar0326);
});
const ar0327 = [slides[740], slides[741]];
document.getElementById('c0327').addEventListener('click', function () {
  createSlideshow(ar0327);
});
const ar0328 = [slides[746], slides[755]];
document.getElementById('c0328').addEventListener('click', function () {
  createSlideshow(ar0328);
});
const ar0329 = [slides[775]];
document.getElementById('c0329').addEventListener('click', function () {
  createSlideshow(ar0329);
});
const ar0330 = [slides[783], slides[784]];
document.getElementById('c0330').addEventListener('click', function () {
  createSlideshow(ar0330);
});
const ar0331 = [slides[859]];
document.getElementById('c0331').addEventListener('click', function () {
  createSlideshow(ar0331);
});
const ar0332 = [slides[930]];
document.getElementById('c0332').addEventListener('click', function () {
  createSlideshow(ar0332);
});
const arCompRef016 = [slides[2], slides[10], slides[25], slides[33], slides[34], slides[43], slides[44], slides[49], slides[64], slides[77], slides[78], slides[130], slides[160], slides[180], slides[196], slides[205], slides[230], slides[269], slides[270], slides[363], slides[369], slides[385], slides[391], slides[392], slides[398], slides[421], slides[422], slides[428], slides[478], slides[482], slides[498], slides[528], slides[556], slides[582], slides[585], slides[676], slides[716], slides[727], slides[740], slides[741], slides[746], slides[755], slides[775], slides[783], slides[784], slides[859], slides[930],];
document.getElementById('compRef016').addEventListener('click', function () {
  createSlideshow(arCompRef016);
});

// CODE FOR TOPIC 17

const show17Tab = document.getElementById('topicName17');
const open17Tabs = document.querySelectorAll('.content17');
show17Tab.addEventListener('click', function () {
  open17Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret17 = document.getElementById('pointer17');
show17Tab.addEventListener('click', function () {
  caret17.classList.toggle('caretD');
});
const ar0333 = [slides[205]];
document.getElementById('c0333').addEventListener('click', function () {
  createSlideshow(ar0333);
});
const ar0334 = [slides[353]];
document.getElementById('c0334').addEventListener('click', function () {
  createSlideshow(ar0334);
});
const ar0335 = [slides[401], slides[402]];
document.getElementById('c0335').addEventListener('click', function () {
  createSlideshow(ar0335);
});
const ar0336 = [slides[418], slides[419]];
document.getElementById('c0336').addEventListener('click', function () {
  createSlideshow(ar0336);
});
const ar0337 = [slides[453], slides[454]];
document.getElementById('c0337').addEventListener('click', function () {
  createSlideshow(ar0337);
});
const ar0338 = [slides[540]];
document.getElementById('c0338').addEventListener('click', function () {
  createSlideshow(ar0338);
});
const ar0339 = [slides[566]];
document.getElementById('c0339').addEventListener('click', function () {
  createSlideshow(ar0339);
});
const ar0340 = [slides[643], slides[644]];
document.getElementById('c0340').addEventListener('click', function () {
  createSlideshow(ar0340);
});
const ar0341 = [slides[651]];
document.getElementById('c0341').addEventListener('click', function () {
  createSlideshow(ar0341);
});
const ar0342 = [slides[690]];
document.getElementById('c0342').addEventListener('click', function () {
  createSlideshow(ar0342);
});
const ar0343 = [slides[740]];
document.getElementById('c0343').addEventListener('click', function () {
  createSlideshow(ar0343);
});
const ar0344 = [slides[747]];
document.getElementById('c0344').addEventListener('click', function () {
  createSlideshow(ar0344);
});
const ar0345 = [slides[772], slides[774]];
document.getElementById('c0345').addEventListener('click', function () {
  createSlideshow(ar0345);
});
const ar0346 = [slides[832], slides[835]];
document.getElementById('c0346').addEventListener('click', function () {
  createSlideshow(ar0346);
});
const ar0347 = [slides[884]];
document.getElementById('c0347').addEventListener('click', function () {
  createSlideshow(ar0347);
});
const ar0348 = [slides[960]];
document.getElementById('c0348').addEventListener('click', function () {
  createSlideshow(ar0348);
});
const arCompRef017 = [slides[205], slides[353], slides[401], slides[402], slides[418], slides[419], slides[453], slides[454], slides[540], slides[566], slides[643], slides[644], slides[651], slides[690], slides[740], slides[747], slides[772], slides[774], slides[832], slides[835], slides[884], slides[960]];
document.getElementById('compRef017').addEventListener('click', function () {
  createSlideshow(arCompRef017);
});

// CODE FOR TOPIC 18

const show18Tab = document.getElementById('topicName18');
const open18Tabs = document.querySelectorAll('.content18');
show18Tab.addEventListener('click', function () {
  open18Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret18 = document.getElementById('pointer18');
show18Tab.addEventListener('click', function () {
  caret18.classList.toggle('caretD');
});
const ar0349 = [slides[37], slides[38]];
document.getElementById('c0349').addEventListener('click', function () {
  createSlideshow(ar0349);
});
const ar0350 = [slides[291], slides[294]];
document.getElementById('c0350').addEventListener('click', function () {
  createSlideshow(ar0350);
});
const ar0351 = [slides[364]];
document.getElementById('c0351').addEventListener('click', function () {
  createSlideshow(ar0351);
});
const ar0352 = [slides[474], slides[475]];
document.getElementById('c0352').addEventListener('click', function () {
  createSlideshow(ar0352);
});
const ar0353 = [slides[537], slides[543]];
document.getElementById('c0353').addEventListener('click', function () {
  createSlideshow(ar0353);
});
const ar0354 = [slides[585]];
document.getElementById('c0354').addEventListener('click', function () {
  createSlideshow(ar0354);
});
const ar0355 = [slides[649]];
document.getElementById('c0355').addEventListener('click', function () {
  createSlideshow(ar0355);
});
const ar0356 = [slides[671]];
document.getElementById('c0356').addEventListener('click', function () {
  createSlideshow(ar0356);
});
const ar0357 = [slides[748]];
document.getElementById('c0357').addEventListener('click', function () {
  createSlideshow(ar0357);
});
const ar0358 = [slides[763]];
document.getElementById('c0358').addEventListener('click', function () {
  createSlideshow(ar0358);
});
const ar0359 = [slides[774]];
document.getElementById('c0359').addEventListener('click', function () {
  createSlideshow(ar0359);
});
const ar0360 = [slides[835]];
document.getElementById('c0360').addEventListener('click', function () {
  createSlideshow(ar0360);
});
const ar0361 = [slides[863]];
document.getElementById('c0361').addEventListener('click', function () {
  createSlideshow(ar0361);
});
const ar0362 = [slides[869], slides[870]];
document.getElementById('c0362').addEventListener('click', function () {
  createSlideshow(ar0362);
});
const ar0363 = [slides[943]];
document.getElementById('c0363').addEventListener('click', function () {
  createSlideshow(ar0363);
});
const arCompRef018 = [slides[37], slides[38], slides[291], slides[294], slides[364], slides[474], slides[475], slides[537], slides[543], slides[585], slides[649], slides[671], slides[748], slides[763], slides[774], slides[835], slides[863], slides[869], slides[870], slides[943]];
document.getElementById('compRef018').addEventListener('click', function () {
  createSlideshow(arCompRef018);
});

// CODE FOR TOPIC 19

const show19Tab = document.getElementById('topicName19');
const open19Tabs = document.querySelectorAll('.content19');
show19Tab.addEventListener('click', function () {
  open19Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret19 = document.getElementById('pointer19');
show19Tab.addEventListener('click', function () {
  caret19.classList.toggle('caretD');
});
const ar0364 = [slides[205], slides[206], slides[214]];
document.getElementById('c0364').addEventListener('click', function () {
  createSlideshow(ar0364);
});
const ar0365 = [slides[382]];
document.getElementById('c0365').addEventListener('click', function () {
  createSlideshow(ar0365);
});
const ar0366 = [slides[399]];
document.getElementById('c0366').addEventListener('click', function () {
  createSlideshow(ar0366);
});
const ar0367 = [slides[416]];
document.getElementById('c0367').addEventListener('click', function () {
  createSlideshow(ar0367);
});
const ar0368 = [slides[729]];
document.getElementById('c0368').addEventListener('click', function () {
  createSlideshow(ar0368);
});
const ar0369 = [slides[747]];
document.getElementById('c0369').addEventListener('click', function () {
  createSlideshow(ar0369);
});
const arCompRef019 = [slides[205], slides[206], slides[214], slides[382], slides[399], slides[416], slides[729], slides[747]];
document.getElementById('compRef019').addEventListener('click', function () {
  createSlideshow(arCompRef019);
});

// CODE FOR TOPIC 20

const show20Tab = document.getElementById('topicName20');
const open20Tabs = document.querySelectorAll('.content20');
show20Tab.addEventListener('click', function () {
  open20Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret20 = document.getElementById('pointer20');
show20Tab.addEventListener('click', function () {
  caret20.classList.toggle('caretD');
});
const ar0370 = [slides[2]];
document.getElementById('c0370').addEventListener('click', function () {
  createSlideshow(ar0370);
});
const ar0371 = [slides[27], slides[38]];
document.getElementById('c0371').addEventListener('click', function () {
  createSlideshow(ar0371);
});
const ar0372 = [slides[91]];
document.getElementById('c0372').addEventListener('click', function () {
  createSlideshow(ar0372);
});
const ar0373 = [slides[132], slides[135], slides[153], slides[166]];
document.getElementById('c0373').addEventListener('click', function () {
  createSlideshow(ar0373);
});
const ar0374 = [slides[191]];
document.getElementById('c0374').addEventListener('click', function () {
  createSlideshow(ar0374);
});
const ar0375 = [slides[205], slides[210], slides[211], slides[213], slides[214], slides[215], slides[216], slides[219], slides[220], slides[223], slides[225], slides[226], slides[230], slides[235], slides[238]];
document.getElementById('c0375').addEventListener('click', function () {
  createSlideshow(ar0375);
});
const ar0376 = [slides[244], slides[245], slides[278], slides[279]];
document.getElementById('c0376').addEventListener('click', function () {
  createSlideshow(ar0376);
});
const ar0377 = [slides[304], slides[305]];
document.getElementById('c0377').addEventListener('click', function () {
  createSlideshow(ar0377);
});
const ar0378 = [slides[334], slides[338], slides[340], slides[343], slides[344], slides[350], slides[351]];
document.getElementById('c0378').addEventListener('click', function () {
  createSlideshow(ar0378);
});
const ar0379 = [slides[352]];
document.getElementById('c0379').addEventListener('click', function () {
  createSlideshow(ar0379);
});
const ar0380 = [slides[381], slides[382], slides[394]];
document.getElementById('c0380').addEventListener('click', function () {
  createSlideshow(ar0380);
});
const ar0381 = [slides[398], slides[399], slides[403], slides[404]];
document.getElementById('c0381').addEventListener('click', function () {
  createSlideshow(ar0381);
});
const ar0382 = [slides[412]];
document.getElementById('c0382').addEventListener('click', function () {
  createSlideshow(ar0382);
});
const ar0383 = [slides[428], slides[433], slides[434], slides[435], slides[438]];
document.getElementById('c0383').addEventListener('click', function () {
  createSlideshow(ar0383);
});
const ar0384 = [slides[452], slides[453], slides[455], slides[458], slides[460]];
document.getElementById('c0384').addEventListener('click', function () {
  createSlideshow(ar0384);
});
const ar0385 = [slides[485], slides[486]];
document.getElementById('c0385').addEventListener('click', function () {
  createSlideshow(ar0385);
});
const ar0386 = [slides[490], slides[496], slides[497]];
document.getElementById('c0386').addEventListener('click', function () {
  createSlideshow(ar0386);
});
const ar0387 = [slides[515], slides[516], slides[519], slides[526], slides[527]];
document.getElementById('c0387').addEventListener('click', function () {
  createSlideshow(ar0387);
});
const ar0388 = [slides[531], slides[541], slides[542]];
document.getElementById('c0388').addEventListener('click', function () {
  createSlideshow(ar0388);
});
const ar0389 = [slides[554], slides[555], slides[557]];
document.getElementById('c0389').addEventListener('click', function () {
  createSlideshow(ar0389);
});
const ar0390 = [slides[573], slides[574], slides[581]];
document.getElementById('c0390').addEventListener('click', function () {
  createSlideshow(ar0390);
});
const ar0391 = [slides[599]];
document.getElementById('c0391').addEventListener('click', function () {
  createSlideshow(ar0391);
});
const ar0392 = [slides[608], slides[609], slides[610], slides[613]];
document.getElementById('c0392').addEventListener('click', function () {
  createSlideshow(ar0392);
});
const ar0393 = [slides[631], slides[632]];
document.getElementById('c0393').addEventListener('click', function () {
  createSlideshow(ar0393);
});
const ar0394 = [slides[635], slides[643], slides[644]];
document.getElementById('c0394').addEventListener('click', function () {
  createSlideshow(ar0394);
});
const ar0395 = [slides[650], slides[651]];
document.getElementById('c0395').addEventListener('click', function () {
  createSlideshow(ar0395);
});
const ar0396 = [slides[656], slides[657], slides[660]];
document.getElementById('c0396').addEventListener('click', function () {
  createSlideshow(ar0396);
});
const ar0397 = [slides[669], slides[670]];
document.getElementById('c0397').addEventListener('click', function () {
  createSlideshow(ar0397);
});
const ar0398 = [slides[687], slides[688]];
document.getElementById('c0398').addEventListener('click', function () {
  createSlideshow(ar0398);
});
const ar0399 = [slides[694], slides[696], slides[697], slides[701]];
document.getElementById('c0399').addEventListener('click', function () {
  createSlideshow(ar0399);
});
const ar0400 = [slides[710]];
document.getElementById('c0400').addEventListener('click', function () {
  createSlideshow(ar0400);
});
const ar0401 = [slides[731], slides[733], slides[734], slides[737], slides[738], slides[739], slides[742]];
document.getElementById('c0401').addEventListener('click', function () {
  createSlideshow(ar0401);
});
const ar0402 = [slides[747], slides[748], slides[756], slides[757], slides[758]];
document.getElementById('c0402').addEventListener('click', function () {
  createSlideshow(ar0402);
});
const ar0403 = [slides[766], slides[767], slides[769]];
document.getElementById('c0403').addEventListener('click', function () {
  createSlideshow(ar0403);
});
const ar0404 = [slides[771], slides[774], slides[778]];
document.getElementById('c0404').addEventListener('click', function () {
  createSlideshow(ar0404);
});
const ar0405 = [slides[781], slides[782], slides[785], slides[787], slides[789], slides[790]];
document.getElementById('c0405').addEventListener('click', function () {
  createSlideshow(ar0405);
});
const ar0406 = [slides[801], slides[802], slides[806]];
document.getElementById('c0406').addEventListener('click', function () {
  createSlideshow(ar0406);
});
const ar0407 = [slides[816], slides[817]];
document.getElementById('c0407').addEventListener('click', function () {
  createSlideshow(ar0407);
});
const ar0408 = [slides[834]];
document.getElementById('c0408').addEventListener('click', function () {
  createSlideshow(ar0408);
});
const ar0409 = [slides[838]];
document.getElementById('c0409').addEventListener('click', function () {
  createSlideshow(ar0409);
});
const ar0410 = [slides[840]];
document.getElementById('c0410').addEventListener('click', function () {
  createSlideshow(ar0410);
});
const ar0411 = [slides[899], slides[900]];
document.getElementById('c0411').addEventListener('click', function () {
  createSlideshow(ar0411);
});
const ar0412 = [slides[903]];
document.getElementById('c0412').addEventListener('click', function () {
  createSlideshow(ar0412);
});
const ar0413 = [slides[914], slides[915]];
document.getElementById('c0413').addEventListener('click', function () {
  createSlideshow(ar0413);
});
const ar0414 = [slides[955]];
document.getElementById('c0414').addEventListener('click', function () {
  createSlideshow(ar0414);
});
const ar0415 = [slides[961], slides[962]];
document.getElementById('c0415').addEventListener('click', function () {
  createSlideshow(ar0415);
});
const ar0416 = [slides[963]];
document.getElementById('c0416').addEventListener('click', function () {
  createSlideshow(ar0416);
});
const arCompRef020 = [slides[2], slides[27], slides[38], slides[91], slides[132], slides[135], slides[153], slides[166], slides[191], slides[205], slides[210], slides[211], slides[213], slides[214], slides[215], slides[216], slides[219], slides[220], slides[223], slides[225], slides[226], slides[230], slides[235], slides[238], slides[244], slides[245], slides[278], slides[279], slides[304], slides[305], slides[334], slides[338], slides[340], slides[343], slides[344], slides[350], slides[351], slides[352], slides[381], slides[382], slides[394], slides[398], slides[399], slides[403], slides[404], slides[412], slides[428], slides[433], slides[434], slides[435], slides[438], slides[452], slides[453], slides[455], slides[458], slides[460], slides[485], slides[486], slides[490], slides[496], slides[497], slides[515], slides[516], slides[519], slides[526], slides[527], slides[531], slides[541], slides[542], slides[554], slides[555], slides[557], slides[573], slides[574], slides[581], slides[599], slides[608], slides[609], slides[610], slides[613], slides[631], slides[632], slides[635], slides[643], slides[644], slides[650], slides[651], slides[656], slides[657], slides[660], slides[669], slides[670], slides[687], slides[688], slides[694], slides[696], slides[697], slides[701], slides[710], slides[731], slides[733], slides[734], slides[737], slides[738], slides[739], slides[742], slides[747], slides[748], slides[756], slides[757], slides[758], slides[766], slides[767], slides[769], slides[771], slides[774], slides[778], slides[781], slides[782], slides[785], slides[787], slides[789], slides[790], slides[801], slides[802], slides[806], slides[816], slides[817], slides[834], slides[838], slides[840], slides[899], slides[900], slides[903], slides[914], slides[915], slides[955], slides[961], slides[962], slides[963]];
document.getElementById('compRef020').addEventListener('click', function () {
  createSlideshow(arCompRef020);
});

// CODE FOR TOPIC 21

const show21Tab = document.getElementById('topicName21');
const open21Tabs = document.querySelectorAll('.content21');
show21Tab.addEventListener('click', function () {
  open21Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret21 = document.getElementById('pointer21');
show21Tab.addEventListener('click', function () {
  caret21.classList.toggle('caretD');
});
const ar0417 = [slides[12], slides[13]];
document.getElementById('c0417').addEventListener('click', function () {
  createSlideshow(ar0417);
});
const ar0418 = [slides[162]];
document.getElementById('c0418').addEventListener('click', function () {
  createSlideshow(ar0418);
});
const ar0419 = [slides[223]];
document.getElementById('c0419').addEventListener('click', function () {
  createSlideshow(ar0419);
});
const ar0420 = [slides[266]];
document.getElementById('c0420').addEventListener('click', function () {
  createSlideshow(ar0420);
});
const ar0421 = [slides[577]];
document.getElementById('c0421').addEventListener('click', function () {
  createSlideshow(ar0421);
});
const arCompRef021 = [slides[12], slides[13], slides[162], slides[223], slides[266], slides[577]];
document.getElementById('compRef021').addEventListener('click', function () {
  createSlideshow(arCompRef021);
});

// CODE FOR TOPIC 22

const show22Tab = document.getElementById('topicName22');
const open22Tabs = document.querySelectorAll('.content22');
show22Tab.addEventListener('click', function () {
  open22Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret22 = document.getElementById('pointer22');
show22Tab.addEventListener('click', function () {
  caret22.classList.toggle('caretD');
});
const ar0422 = [slides[44]];
document.getElementById('c0422').addEventListener('click', function () {
  createSlideshow(ar0422);
});
const ar0423 = [slides[827], slides[828]];
document.getElementById('c0423').addEventListener('click', function () {
  createSlideshow(ar0423);
});
const ar0424 = [slides[857]];
document.getElementById('c0424').addEventListener('click', function () {
  createSlideshow(ar0424);
});
const ar0425 = [slides[858]];
document.getElementById('c0425').addEventListener('click', function () {
  createSlideshow(ar0425);
});
const ar0426 = [slides[866]];
document.getElementById('c0426').addEventListener('click', function () {
  createSlideshow(ar0426);
});
const arCompRef022 = [slides[44], slides[827], slides[828], slides[857], slides[858], slides[866]];
document.getElementById('compRef022').addEventListener('click', function () {
  createSlideshow(arCompRef022);
});

// CODE FOR TOPIC 23

const show23Tab = document.getElementById('topicName23');
const open23Tabs = document.querySelectorAll('.content23');
show23Tab.addEventListener('click', function () {
  open23Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret23 = document.getElementById('pointer23');
show23Tab.addEventListener('click', function () {
  caret23.classList.toggle('caretD');
});
const ar0427 = [slides[65], slides[66]];
document.getElementById('c0427').addEventListener('click', function () {
  createSlideshow(ar0427);
});
const ar0428 = [slides[205]];
document.getElementById('c0428').addEventListener('click', function () {
  createSlideshow(ar0428);
});
const ar0429 = [slides[807]];
document.getElementById('c0429').addEventListener('click', function () {
  createSlideshow(ar0429);
});
const ar0430 = [slides[830]];
document.getElementById('c0430').addEventListener('click', function () {
  createSlideshow(ar0430);
});
const arCompRef023 = [slides[65], slides[66], slides[205], slides[807], slides[830]];
document.getElementById('compRef023').addEventListener('click', function () {
  createSlideshow(arCompRef023);
});

// CODE FOR TOPIC 24

const show24Tab = document.getElementById('topicName24');
const open24Tabs = document.querySelectorAll('.content24');
show24Tab.addEventListener('click', function () {
  open24Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret24 = document.getElementById('pointer24');
show24Tab.addEventListener('click', function () {
  caret24.classList.toggle('caretD');
});
const ar0431 = [slides[69], slides[71]];
document.getElementById('c0431').addEventListener('click', function () {
  createSlideshow(ar0431);
});
const ar0432 = [slides[97], slides[98]];
document.getElementById('c0432').addEventListener('click', function () {
  createSlideshow(ar0432);
});
const ar0433 = [slides[229], slides[230]];
document.getElementById('c0433').addEventListener('click', function () {
  createSlideshow(ar0433);
});
const ar0434 = [slides[343], slides[344]];
document.getElementById('c0434').addEventListener('click', function () {
  createSlideshow(ar0434);
});
const ar0435 = [slides[407], slides[408]];
document.getElementById('c0435').addEventListener('click', function () {
  createSlideshow(ar0435);
});
const ar0436 = [slides[541]];
document.getElementById('c0436').addEventListener('click', function () {
  createSlideshow(ar0436);
});
const ar0437 = [slides[605], slides[606]];
document.getElementById('c0437').addEventListener('click', function () {
  createSlideshow(ar0437);
});
const ar0438 = [slides[633]];
document.getElementById('c0438').addEventListener('click', function () {
  createSlideshow(ar0438);
});
const ar0439 = [slides[659]];
document.getElementById('c0439').addEventListener('click', function () {
  createSlideshow(ar0439);
});
const ar0440 = [slides[697]];
document.getElementById('c0440').addEventListener('click', function () {
  createSlideshow(ar0440);
});
const ar0441 = [slides[732]];
document.getElementById('c0441').addEventListener('click', function () {
  createSlideshow(ar0441);
});
const ar0442 = [slides[814]];
document.getElementById('c0442').addEventListener('click', function () {
  createSlideshow(ar0442);
});
const ar0443 = [slides[835]];
document.getElementById('c0443').addEventListener('click', function () {
  createSlideshow(ar0443);
});
const arCompRef024 = [slides[69], slides[71], slides[97], slides[98], slides[229], slides[230], slides[343], slides[344], slides[407], slides[408], slides[541], slides[605], slides[606], slides[633], slides[659], slides[697], slides[732], slides[814], slides[835]];
document.getElementById('compRef024').addEventListener('click', function () {
  createSlideshow(arCompRef024);
});
// CODE FOR TOPIC 25

const show25Tab = document.getElementById('topicName25');
const open25Tabs = document.querySelectorAll('.content25');
show25Tab.addEventListener('click', function () {
  open25Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret25 = document.getElementById('pointer25');
show25Tab.addEventListener('click', function () {
  caret25.classList.toggle('caretD');
});
const ar0444 = [slides[2]];
document.getElementById('c0444').addEventListener('click', function () {
  createSlideshow(ar0444);
});
const ar0445 = [slides[30]];
document.getElementById('c0445').addEventListener('click', function () {
  createSlideshow(ar0445);
});
const ar0446 = [slides[733], slides[734]];
document.getElementById('c0446').addEventListener('click', function () {
  createSlideshow(ar0446);
});
const arCompRef025 = [slides[2], slides[30], slides[733], slides[734]];
document.getElementById('compRef025').addEventListener('click', function () {
  createSlideshow(arCompRef025);
})

// CODE FOR TOPIC 26

const show26Tab = document.getElementById('topicName26');
const open26Tabs = document.querySelectorAll('.content26');
show26Tab.addEventListener('click', function () {
  open26Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret26 = document.getElementById('pointer26');
show26Tab.addEventListener('click', function () {
  caret26.classList.toggle('caretD');
});
const ar0447 = [slides[18], slides[32]];
document.getElementById('c0447').addEventListener('click', function () {
  createSlideshow(ar0447);
});
const ar0448 = [slides[97]];
document.getElementById('c0448').addEventListener('click', function () {
  createSlideshow(ar0448);
});
const ar0449 = [slides[291], slides[292]];
document.getElementById('c0449').addEventListener('click', function () {
  createSlideshow(ar0449);
});
const ar0450 = [slides[398]];
document.getElementById('c0450').addEventListener('click', function () {
  createSlideshow(ar0450);
});
const ar0451 = [slides[490]];
document.getElementById('c0451').addEventListener('click', function () {
  createSlideshow(ar0451);
});
const ar0452 = [slides[515]];
document.getElementById('c0452').addEventListener('click', function () {
  createSlideshow(ar0452);
});
const ar0453 = [slides[725]];
document.getElementById('c0453').addEventListener('click', function () {
  createSlideshow(ar0453);
});
const ar0454 = [slides[768]];
document.getElementById('c0454').addEventListener('click', function () {
  createSlideshow(ar0454);
});
const ar0455 = [slides[797]];
document.getElementById('c0455').addEventListener('click', function () {
  createSlideshow(ar0455);
});
const ar0456 = [slides[836]];
document.getElementById('c0456').addEventListener('click', function () {
  createSlideshow(ar0456);
});
const ar0457 = [slides[842]];
document.getElementById('c0457').addEventListener('click', function () {
  createSlideshow(ar0457);
});
const ar0458 = [slides[864]];
document.getElementById('c0458').addEventListener('click', function () {
  createSlideshow(ar0458);
});
const ar0459 = [slides[919]];
document.getElementById('c0459').addEventListener('click', function () {
  createSlideshow(ar0459);
});
const ar0460 = [slides[932], slides[933]];
document.getElementById('c0460').addEventListener('click', function () {
  createSlideshow(ar0460);
});
const arCompRef026 = [slides[18], slides[32], slides[97], slides[291], slides[292], slides[398], slides[490], slides[515], slides[725], slides[768], slides[797], slides[836], slides[842], slides[864], slides[919], slides[932], slides[933]];
document.getElementById('compRef026').addEventListener('click', function () {
  createSlideshow(arCompRef026);
});

// CODE FOR TOPIC 27

const show27Tab = document.getElementById('topicName27');
const open27Tabs = document.querySelectorAll('.content27');
show27Tab.addEventListener('click', function () {
  open27Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret27 = document.getElementById('pointer27');
show27Tab.addEventListener('click', function () {
  caret27.classList.toggle('caretD');
});
const ar0461 = [slides[515]];
document.getElementById('c0461').addEventListener('click', function () {
  createSlideshow(ar0461);
});
const ar0462 = [slides[557]];
document.getElementById('c0462').addEventListener('click', function () {
  createSlideshow(ar0462);
});
const ar0463 = [slides[725]];
document.getElementById('c0463').addEventListener('click', function () {
  createSlideshow(ar0463);
});
const ar0464 = [slides[834]];
document.getElementById('c0464').addEventListener('click', function () {
  createSlideshow(ar0464);
});
const ar0465 = [slides[923]];
document.getElementById('c0465').addEventListener('click', function () {
  createSlideshow(ar0465);
});
const arCompRef027 = [slides[515], slides[557], slides[725], slides[834], slides[923]];
document.getElementById('compRef027').addEventListener('click', function () {
  createSlideshow(arCompRef027);
});

// CODE FOR TOPIC 28

const show28Tab = document.getElementById('topicName28');
const open28Tabs = document.querySelectorAll('.content28');
show28Tab.addEventListener('click', function () {
  open28Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret28 = document.getElementById('pointer28');
show28Tab.addEventListener('click', function () {
  caret28.classList.toggle('caretD');
});
const ar0466 = [slides[81], slides[82], slides[116]];
document.getElementById('c0466').addEventListener('click', function () {
  createSlideshow(ar0466);
});
const ar0467 = [slides[133]];
document.getElementById('c0467').addEventListener('click', function () {
  createSlideshow(ar0467);
});
const ar0468 = [slides[226], slides[229]];
document.getElementById('c0468').addEventListener('click', function () {
  createSlideshow(ar0468);
});
const ar0469 = [slides[243]];
document.getElementById('c0469').addEventListener('click', function () {
  createSlideshow(ar0469);
});
const ar0470 = [slides[340]];
document.getElementById('c0470').addEventListener('click', function () {
  createSlideshow(ar0470);
});
const ar0471 = [slides[370], slides[373]];
document.getElementById('c0471').addEventListener('click', function () {
  createSlideshow(ar0471);
});
const ar0472 = [slides[398]];
document.getElementById('c0472').addEventListener('click', function () {
  createSlideshow(ar0472);
});
const ar0473 = [slides[441], slides[442]];
document.getElementById('c0473').addEventListener('click', function () {
  createSlideshow(ar0473);
});
const ar0474 = [slides[519]];
document.getElementById('c0474').addEventListener('click', function () {
  createSlideshow(ar0474);
});
const ar0475 = [slides[531]];
document.getElementById('c0475').addEventListener('click', function () {
  createSlideshow(ar0475);
});
const ar0476 = [slides[750]];
document.getElementById('c0476').addEventListener('click', function () {
  createSlideshow(ar0476);
});
const ar0477 = [slides[768]];
document.getElementById('c0477').addEventListener('click', function () {
  createSlideshow(ar0477);
});
const ar0478 = [slides[829]];
document.getElementById('c0478').addEventListener('click', function () {
  createSlideshow(ar0478);
});
const arCompRef028 = [slides[81], slides[82], slides[116], slides[133], slides[226], slides[229], slides[243], slides[340], slides[370], slides[373], slides[398], slides[441], slides[442], slides[519], slides[531], slides[750], slides[768], slides[829]];
document.getElementById('compRef028').addEventListener('click', function () {
  createSlideshow(arCompRef028);
});

// CODE FOR TOPIC 29

const show29Tab = document.getElementById('topicName29');
const open29Tabs = document.querySelectorAll('.content29');
show29Tab.addEventListener('click', function () {
  open29Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret29 = document.getElementById('pointer29');
show29Tab.addEventListener('click', function () {
  caret29.classList.toggle('caretD');
});
const ar0479 = [slides[58], slides[77], slides[78]];
document.getElementById('c0479').addEventListener('click', function () {
  createSlideshow(ar0479);
});
const ar0480 = [slides[235]];
document.getElementById('c0480').addEventListener('click', function () {
  createSlideshow(ar0480);
});
const ar0481 = [slides[246]];
document.getElementById('c0481').addEventListener('click', function () {
  createSlideshow(ar0481);
});
const ar0482 = [slides[552]];
document.getElementById('c0482').addEventListener('click', function () {
  createSlideshow(ar0482);
});
const ar0483 = [slides[892]];
document.getElementById('c0483').addEventListener('click', function () {
  createSlideshow(ar0483);
});
const arCompRef029 = [slides[58], slides[77], slides[78], slides[235], slides[246], slides[552], slides[892]];
document.getElementById('compRef029').addEventListener('click', function () {
  createSlideshow(arCompRef029);
});
// CODE FOR TOPIC 30

const show30Tab = document.getElementById('topicName30');
const open30Tabs = document.querySelectorAll('.content30');
show30Tab.addEventListener('click', function () {
  open30Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret30 = document.getElementById('pointer30');
show30Tab.addEventListener('click', function () {
  caret30.classList.toggle('caretD');
});
const ar0484 = [slides[141], slides[142]];
document.getElementById('c0484').addEventListener('click', function () {
  createSlideshow(ar0484);
});
const ar0485 = [slides[847]];
document.getElementById('c0485').addEventListener('click', function () {
  createSlideshow(ar0485);
});
const arCompRef030 = [slides[141], slides[142], slides[847]];
document.getElementById('compRef030').addEventListener('click', function () {
  createSlideshow(arCompRef030);
});

// CODE FOR TOPIC 31

const show31Tab = document.getElementById('topicName31');
const open31Tabs = document.querySelectorAll('.content31');
show31Tab.addEventListener('click', function () {
  open31Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret31 = document.getElementById('pointer31');
show31Tab.addEventListener('click', function () {
  caret31.classList.toggle('caretD');
});
const ar0486 = [slides[214]];
document.getElementById('c0486').addEventListener('click', function () {
  createSlideshow(ar0486);
});
const ar0487 = [slides[847]];
document.getElementById('c0487').addEventListener('click', function () {
  createSlideshow(ar0487);
});
const ar0488 = [slides[863]];
document.getElementById('c0488').addEventListener('click', function () {
  createSlideshow(ar0488);
});
const ar0489 = [slides[930]];
document.getElementById('c0489').addEventListener('click', function () {
  createSlideshow(ar0489);
});
const ar0490 = [slides[943]];
document.getElementById('c0490').addEventListener('click', function () {
  createSlideshow(ar0490);
});
const arCompRef031 = [slides[214], slides[847], slides[863], slides[930], slides[943]];
document.getElementById('compRef031').addEventListener('click', function () {
  createSlideshow(arCompRef031);
});

// CODE FOR TOPIC 32

const show32Tab = document.getElementById('topicName32');
const open32Tabs = document.querySelectorAll('.content32');
show32Tab.addEventListener('click', function () {
  open32Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret32 = document.getElementById('pointer32');
show32Tab.addEventListener('click', function () {
  caret32.classList.toggle('caretD');
});
const ar0491 = [slides[6], slides[10], slides[11], slides[28]];
document.getElementById('c0491').addEventListener('click', function () {
  createSlideshow(ar0491);
});
const ar0492 = [slides[169], slides[170], slides[172], slides[173], slides[176]];
document.getElementById('c0492').addEventListener('click', function () {
  createSlideshow(ar0492);
});
const ar0493 = [slides[240], slides[242]];
document.getElementById('c0493').addEventListener('click', function () {
  createSlideshow(ar0493);
});
const ar0494 = [slides[286]];
document.getElementById('c0494').addEventListener('click', function () {
  createSlideshow(ar0494);
});
const ar0495 = [slides[413]];
document.getElementById('c0495').addEventListener('click', function () {
  createSlideshow(ar0495);
});
const ar0496 = [slides[426], slides[428], slides[436], slides[437], slides[438], slides[439], slides[440]];
document.getElementById('c0496').addEventListener('click', function () {
  createSlideshow(ar0496);
});
const ar0497 = [slides[541], slides[542]];
document.getElementById('c0497').addEventListener('click', function () {
  createSlideshow(ar0497);
});
const ar0498 = [slides[546], slides[547]];
document.getElementById('c0498').addEventListener('click', function () {
  createSlideshow(ar0498);
});
const ar0499 = [slides[612]];
document.getElementById('c0499').addEventListener('click', function () {
  createSlideshow(ar0499);
});
const ar0500 = [slides[644]];
document.getElementById('c0500').addEventListener('click', function () {
  createSlideshow(ar0500);
});
const ar0501 = [slides[660]];
document.getElementById('c0501').addEventListener('click', function () {
  createSlideshow(ar0501);
});
const ar0502 = [slides[666]];
document.getElementById('c0502').addEventListener('click', function () {
  createSlideshow(ar0502);
});
const ar0503 = [slides[668]];
document.getElementById('c0503').addEventListener('click', function () {
  createSlideshow(ar0503);
});
const ar0504 = [slides[694], slides[698], slides[699]];
document.getElementById('c0504').addEventListener('click', function () {
  createSlideshow(ar0504);
});
const ar0505 = [slides[706], slides[707]];
document.getElementById('c0505').addEventListener('click', function () {
  createSlideshow(ar0505);
});
const ar0506 = [slides[735]];
document.getElementById('c0506').addEventListener('click', function () {
  createSlideshow(ar0506);
});
const ar0507 = [slides[774], slides[775]];
document.getElementById('c0507').addEventListener('click', function () {
  createSlideshow(ar0507);
});
const ar0508 = [slides[843]];
document.getElementById('c0508').addEventListener('click', function () {
  createSlideshow(ar0508);
});
const ar0509 = [slides[848], slides[849], slides[850], slides[851], slides[852]];
document.getElementById('c0509').addEventListener('click', function () {
  createSlideshow(ar0509);
});
const ar0510 = [slides[855], slides[856]];
document.getElementById('c0510').addEventListener('click', function () {
  createSlideshow(ar0510);
});
const ar0511 = [slides[863]];
document.getElementById('c0511').addEventListener('click', function () {
  createSlideshow(ar0511);
});
const ar0512 = [slides[934], slides[935]];
document.getElementById('c0512').addEventListener('click', function () {
  createSlideshow(ar0512);
});
const arCompRef032 = [slides[6], slides[10], slides[11], slides[28], slides[169], slides[170], slides[172], slides[173], slides[176], slides[240], slides[242], slides[286], slides[413], slides[426], slides[428], slides[436], slides[437], slides[438], slides[439], slides[440], slides[541], slides[542], slides[546], slides[547], slides[612], slides[644], slides[660], slides[666], slides[668], slides[694], slides[698], slides[699], slides[706], slides[707], slides[735], slides[774], slides[775], slides[843], slides[848], slides[849], slides[850], slides[851], slides[852], slides[855], slides[856], slides[863], slides[934], slides[935]];
document.getElementById('compRef032').addEventListener('click', function () {
  createSlideshow(arCompRef032);
});

// CODE FOR TOPIC 33

const show33Tab = document.getElementById('topicName33');
const open33Tabs = document.querySelectorAll('.content33');
show33Tab.addEventListener('click', function () {
  open33Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret33 = document.getElementById('pointer33');
show33Tab.addEventListener('click', function () {
  caret33.classList.toggle('caretD');
});
const ar0513 = [slides[37], slides[38]];
document.getElementById('c0513').addEventListener('click', function () {
  createSlideshow(ar0513);
});
const ar0514 = [slides[80], slides[105], slides[106], slides[118], slides[119]];
document.getElementById('c0514').addEventListener('click', function () {
  createSlideshow(ar0514);
});
const ar0515 = [slides[204]];
document.getElementById('c0515').addEventListener('click', function () {
  createSlideshow(ar0515);
});
const ar0516 = [slides[239], slides[277]];
document.getElementById('c0516').addEventListener('click', function () {
  createSlideshow(ar0516);
});
const ar0517 = [slides[314], slides[315]];
document.getElementById('c0517').addEventListener('click', function () {
  createSlideshow(ar0517);
});
const ar0518 = [slides[333], slides[350]];
document.getElementById('c0518').addEventListener('click', function () {
  createSlideshow(ar0518);
});
const ar0519 = [slides[373]];
document.getElementById('c0519').addEventListener('click', function () {
  createSlideshow(ar0519);
});
const ar0520 = [slides[394]];
document.getElementById('c0520').addEventListener('click', function () {
  createSlideshow(ar0520);
});
const ar0521 = [slides[405]];
document.getElementById('c0521').addEventListener('click', function () {
  createSlideshow(ar0521);
});
const ar0522 = [slides[408]];
document.getElementById('c0522').addEventListener('click', function () {
  createSlideshow(ar0522);
});
const ar0523 = [slides[417]];
document.getElementById('c0523').addEventListener('click', function () {
  createSlideshow(ar0523);
});
const ar0524 = [slides[429], slides[433]];
document.getElementById('c0524').addEventListener('click', function () {
  createSlideshow(ar0524);
});
const ar0525 = [slides[451], slides[452], slides[458]];
document.getElementById('c0525').addEventListener('click', function () {
  createSlideshow(ar0525);
});
const ar0526 = [slides[478]];
document.getElementById('c0526').addEventListener('click', function () {
  createSlideshow(ar0526);
});
const ar0527 = [slides[495], slides[497]];
document.getElementById('c0527').addEventListener('click', function () {
  createSlideshow(ar0527);
});
const ar0528 = [slides[497], slides[498], slides[508], slides[509], slides[512]];
document.getElementById('c0528').addEventListener('click', function () {
  createSlideshow(ar0528);
});
const ar0529 = [slides[513], slides[514], slides[515]];
document.getElementById('c0529').addEventListener('click', function () {
  createSlideshow(ar0529);
});
const ar0530 = [slides[538]];
document.getElementById('c0530').addEventListener('click', function () {
  createSlideshow(ar0530);
});
const ar0531 = [slides[567], slides[568]];
document.getElementById('c0531').addEventListener('click', function () {
  createSlideshow(ar0531);
});
const ar0532 = [slides[580]];
document.getElementById('c0532').addEventListener('click', function () {
  createSlideshow(ar0532);
});
const ar0533 = [slides[585], slides[598]];
document.getElementById('c0533').addEventListener('click', function () {
  createSlideshow(ar0533);
});
const ar0534 = [slides[610]];
document.getElementById('c0534').addEventListener('click', function () {
  createSlideshow(ar0534);
});
const ar0535 = [slides[625], slides[626], slides[628]];
document.getElementById('c0535').addEventListener('click', function () {
  createSlideshow(ar0535);
});
const ar0536 = [slides[635], slides[640], slides[643], slides[644]];
document.getElementById('c0536').addEventListener('click', function () {
  createSlideshow(ar0536);
});
const ar0537 = [slides[646], slides[647], slides[648], slides[649], slides[651], slides[652]];
document.getElementById('c0537').addEventListener('click', function () {
  createSlideshow(ar0537);
});
const ar0538 = [slides[658], slides[659], slides[660]];
document.getElementById('c0538').addEventListener('click', function () {
  createSlideshow(ar0538);
});
const ar0539 = [slides[665]];
document.getElementById('c0539').addEventListener('click', function () {
  createSlideshow(ar0539);
});
const ar0540 = [slides[684]];
document.getElementById('c0540').addEventListener('click', function () {
  createSlideshow(ar0540);
});
const ar0541 = [slides[702]];
document.getElementById('c0541').addEventListener('click', function () {
  createSlideshow(ar0541);
});
const ar0542 = [slides[705], slides[706], slides[707], slides[710], slides[711]];
document.getElementById('c0542').addEventListener('click', function () {
  createSlideshow(ar0542);
});
const ar0543 = [slides[723]];
document.getElementById('c0543').addEventListener('click', function () {
  createSlideshow(ar0543);
});
const ar0544 = [slides[748], slides[755], slides[759], slides[760]];
document.getElementById('c0544').addEventListener('click', function () {
  createSlideshow(ar0544);
});
const ar0545 = [slides[766], slides[767], slides[770]];
document.getElementById('c0545').addEventListener('click', function () {
  createSlideshow(ar0545);
});
const ar0546 = [slides[776]];
document.getElementById('c0546').addEventListener('click', function () {
  createSlideshow(ar0546);
});
const ar0547 = [slides[780]];
document.getElementById('c0547').addEventListener('click', function () {
  createSlideshow(ar0547);
});
const ar0548 = [slides[793]];
document.getElementById('c0548').addEventListener('click', function () {
  createSlideshow(ar0548);
});
const ar0549 = [slides[795]];
document.getElementById('c0549').addEventListener('click', function () {
  createSlideshow(ar0549);
});
const ar0550 = [slides[806]];
document.getElementById('c0550').addEventListener('click', function () {
  createSlideshow(ar0550);
});
const ar0551 = [slides[809], slides[810]];
document.getElementById('c0551').addEventListener('click', function () {
  createSlideshow(ar0551);
});
const ar0552 = [slides[826], slides[827], slides[829], slides[830]];
document.getElementById('c0552').addEventListener('click', function () {
  createSlideshow(ar0552);
});
const ar0553 = [slides[832]];
document.getElementById('c0553').addEventListener('click', function () {
  createSlideshow(ar0553);
});
const ar0554 = [slides[847]];
document.getElementById('c0554').addEventListener('click', function () {
  createSlideshow(ar0554);
});
const ar0555 = [slides[848], slides[849]];
document.getElementById('c0555').addEventListener('click', function () {
  createSlideshow(ar0555);
});
const ar0556 = [slides[887], slides[888]];
document.getElementById('c0556').addEventListener('click', function () {
  createSlideshow(ar0556);
});
const ar0557 = [slides[892]];
document.getElementById('c0557').addEventListener('click', function () {
  createSlideshow(ar0557);
});
const ar0558 = [slides[897], slides[899]];
document.getElementById('c0558').addEventListener('click', function () {
  createSlideshow(ar0558);
});
const ar0559 = [slides[911]];
document.getElementById('c0559').addEventListener('click', function () {
  createSlideshow(ar0559);
});
const ar0560 = [slides[923]];
document.getElementById('c0560').addEventListener('click', function () {
  createSlideshow(ar0560);
});
const ar0561 = [slides[927]];
document.getElementById('c0561').addEventListener('click', function () {
  createSlideshow(ar0561);
});
const ar0562 = [slides[929]];
document.getElementById('c0562').addEventListener('click', function () {
  createSlideshow(ar0562);
});
const ar0563 = [slides[932]];
document.getElementById('c0563').addEventListener('click', function () {
  createSlideshow(ar0563);
});
const ar0564 = [slides[941]];
document.getElementById('c0564').addEventListener('click', function () {
  createSlideshow(ar0564);
});
const ar0565 = [slides[946]];
document.getElementById('c0565').addEventListener('click', function () {
  createSlideshow(ar0565);
});
const ar0566 = [slides[948]];
document.getElementById('c0566').addEventListener('click', function () {
  createSlideshow(ar0566);
});
const arCompRef033 = [slides[37], slides[38], slides[80], slides[105], slides[106], slides[118], slides[119], slides[204], slides[239], slides[277], slides[314], slides[315], slides[333], slides[350], slides[373], slides[394], slides[405], slides[408], slides[417], slides[429], slides[433], slides[451], slides[452], slides[485], slides[478], slides[495], slides[497], slides[498], slides[508], slides[509], slides[512], slides[513], slides[514], slides[515], slides[538], slides[567], slides[568], slides[580], slides[585], slides[598], slides[610], slides[625], slides[626], slides[628], slides[635], slides[640], slides[643], slides[644], slides[646], slides[647], slides[648], slides[649], slides[651], slides[652], slides[658], slides[659], slides[660], slides[665], slides[684], slides[702], slides[705], slides[706], slides[707], slides[710], slides[711], slides[723], slides[748], slides[755], slides[759], slides[760], slides[766], slides[767], slides[770], slides[776], slides[780], slides[793], slides[795], slides[806], slides[809], slides[810], slides[826], slides[827], slides[829], slides[830], slides[832], slides[847], slides[848], slides[849], slides[887], slides[888], slides[892], slides[897], slides[899], slides[911], slides[923], slides[927], slides[929], slides[932], slides[941], slides[946], slides[948]];
document.getElementById('compRef033').addEventListener('click', function () {
  createSlideshow(arCompRef033);
});

// CODE FOR TOPIC 34

const show34Tab = document.getElementById('topicName34');
const open34Tabs = document.querySelectorAll('.content34');
show34Tab.addEventListener('click', function () {
  open34Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret34 = document.getElementById('pointer34');
show34Tab.addEventListener('click', function () {
  caret34.classList.toggle('caretD');
});
const ar0567 = [slides[2]];
document.getElementById('c0567').addEventListener('click', function () {
  createSlideshow(ar0567);
});
const ar0568 = [slides[203], slides[211]];
document.getElementById('c0568').addEventListener('click', function () {
  createSlideshow(ar0568);
});
const ar0569 = [slides[247]];
document.getElementById('c0569').addEventListener('click', function () {
  createSlideshow(ar0569);
});
const ar0570 = [slides[332]];
document.getElementById('c0570').addEventListener('click', function () {
  createSlideshow(ar0570);
});
const ar0571 = [slides[398]];
document.getElementById('c0571').addEventListener('click', function () {
  createSlideshow(ar0571);
});
const ar0572 = [slides[414]];
document.getElementById('c0572').addEventListener('click', function () {
  createSlideshow(ar0572);
});
const ar0573 = [slides[425]];
document.getElementById('c0573').addEventListener('click', function () {
  createSlideshow(ar0573);
});
const ar0574 = [slides[438]];
document.getElementById('c0574').addEventListener('click', function () {
  createSlideshow(ar0574);
});
const ar0575 = [slides[449], slides[455], slides[456], slides[457], slides[467]];
document.getElementById('c0575').addEventListener('click', function () {
  createSlideshow(ar0575);
});
const ar0576 = [slides[467], slides[468]];
document.getElementById('c0576').addEventListener('click', function () {
  createSlideshow(ar0576);
});
const ar0577 = [slides[548]];
document.getElementById('c0577').addEventListener('click', function () {
  createSlideshow(ar0577);
});
const ar0578 = [slides[573], slides[575], slides[581], slides[582]];
document.getElementById('c0578').addEventListener('click', function () {
  createSlideshow(ar0578);
});
const ar0579 = [slides[608], slides[614]];
document.getElementById('c0579').addEventListener('click', function () {
  createSlideshow(ar0579);
});
const ar0580 = [slides[628]];
document.getElementById('c0580').addEventListener('click', function () {
  createSlideshow(ar0580);
});
const ar0581 = [slides[644]];
document.getElementById('c0581').addEventListener('click', function () {
  createSlideshow(ar0581);
});
const ar0582 = [slides[647]];
document.getElementById('c0582').addEventListener('click', function () {
  createSlideshow(ar0582);
});
const ar0583 = [slides[659]];
document.getElementById('c0583').addEventListener('click', function () {
  createSlideshow(ar0583);
});
const ar0584 = [slides[664]];
document.getElementById('c0584').addEventListener('click', function () {
  createSlideshow(ar0584);
});
const ar0585 = [slides[683]];
document.getElementById('c0585').addEventListener('click', function () {
  createSlideshow(ar0585);
});
const ar0586 = [slides[693], slides[699], slides[700]];
document.getElementById('c0586').addEventListener('click', function () {
  createSlideshow(ar0586);
});
const ar0587 = [slides[706], slides[711]];
document.getElementById('c0587').addEventListener('click', function () {
  createSlideshow(ar0587);
});
const ar0588 = [slides[720], slides[722]];
document.getElementById('c0588').addEventListener('click', function () {
  createSlideshow(ar0588);
});
const ar0589 = [slides[736], slides[744]];
document.getElementById('c0589').addEventListener('click', function () {
  createSlideshow(ar0589);
});
const ar0590 = [slides[754], slides[756]];
document.getElementById('c0590').addEventListener('click', function () {
  createSlideshow(ar0590);
});
const ar0591 = [slides[772], slides[789], slides[790]];
document.getElementById('c0591').addEventListener('click', function () {
  createSlideshow(ar0591);
});
const ar0592 = [slides[800]];
document.getElementById('c0592').addEventListener('click', function () {
  createSlideshow(ar0592);
});
const ar0593 = [slides[852]];
document.getElementById('c0593').addEventListener('click', function () {
  createSlideshow(ar0593);
});
const ar0594 = [slides[859], slides[860]];
document.getElementById('c0594').addEventListener('click', function () {
  createSlideshow(ar0594);
});
const ar0595 = [slides[870], slides[875]];
document.getElementById('c0595').addEventListener('click', function () {
  createSlideshow(ar0595);
});
const ar0596 = [slides[880]];
document.getElementById('c0596').addEventListener('click', function () {
  createSlideshow(ar0596);
});
const ar0597 = [slides[882]];
document.getElementById('c0597').addEventListener('click', function () {
  createSlideshow(ar0597);
});
const ar0598 = [slides[887]];
document.getElementById('c0598').addEventListener('click', function () {
  createSlideshow(ar0598);
});
const ar0599 = [slides[897]];
document.getElementById('c0599').addEventListener('click', function () {
  createSlideshow(ar0599);
});
const ar0600 = [slides[907]];
document.getElementById('c0600').addEventListener('click', function () {
  createSlideshow(ar0600);
});
const ar0601 = [slides[944]];
document.getElementById('c0601').addEventListener('click', function () {
  createSlideshow(ar0601);
});
const arCompRef034 = [slides[2], slides[203], slides[211], slides[247], slides[332], slides[398], slides[414], slides[425], slides[438], slides[449], slides[455], slides[456], slides[457], slides[467], slides[467], slides[468], slides[548], slides[573], slides[575], slides[581], slides[582], slides[608], slides[614], slides[628], slides[644], slides[647], slides[659], slides[664], slides[683], slides[693], slides[699], slides[700], slides[706], slides[711], slides[720], slides[722], slides[736], slides[744], slides[754], slides[756], slides[772], slides[789], slides[790], slides[800], slides[852], slides[859], slides[860], slides[870], slides[875], slides[880], slides[882], slides[887], slides[897], slides[907], slides[944]];
document.getElementById('compRef034').addEventListener('click', function () {
  createSlideshow(arCompRef034);
});

// CODE FOR TOPIC 35

const show35Tab = document.getElementById('topicName35');
const open35Tabs = document.querySelectorAll('.content35');
show35Tab.addEventListener('click', function () {
  open35Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret35 = document.getElementById('pointer35');
show35Tab.addEventListener('click', function () {
  caret35.classList.toggle('caretD');
});
const ar0602 = [slides[8], slides[9], slides[23]];
document.getElementById('c0602').addEventListener('click', function () {
  createSlideshow(ar0602);
});
const ar0603 = [slides[214], slides[221]];
document.getElementById('c0603').addEventListener('click', function () {
  createSlideshow(ar0603);
});
const ar0604 = [slides[279]];
document.getElementById('c0604').addEventListener('click', function () {
  createSlideshow(ar0604);
});
const ar0605 = [slides[334], slides[335]];
document.getElementById('c0605').addEventListener('click', function () {
  createSlideshow(ar0605);
});
const ar0606 = [slides[398], slides[401]];
document.getElementById('c0606').addEventListener('click', function () {
  createSlideshow(ar0606);
});
const ar0607 = [slides[417]];
document.getElementById('c0607').addEventListener('click', function () {
  createSlideshow(ar0607);
});
const ar0608 = [slides[433], slides[434]];
document.getElementById('c0608').addEventListener('click', function () {
  createSlideshow(ar0608);
});
const ar0609 = [slides[494]];
document.getElementById('c0609').addEventListener('click', function () {
  createSlideshow(ar0609);
});
const ar0610 = [slides[515], slides[516]];
document.getElementById('c0610').addEventListener('click', function () {
  createSlideshow(ar0610);
});
const ar0611 = [slides[577]];
document.getElementById('c0611').addEventListener('click', function () {
  createSlideshow(ar0611);
});
const ar0612 = [slides[597], slides[598]];
document.getElementById('c0612').addEventListener('click', function () {
  createSlideshow(ar0612);
});
const ar0613 = [slides[687], slides[688]];
document.getElementById('c0613').addEventListener('click', function () {
  createSlideshow(ar0613);
});
const ar0614 = [slides[693]];
document.getElementById('c0614').addEventListener('click', function () {
  createSlideshow(ar0614);
});
const ar0615 = [slides[720], slides[721]];
document.getElementById('c0615').addEventListener('click', function () {
  createSlideshow(ar0615);
});
const ar0616 = [slides[729]];
document.getElementById('c0616').addEventListener('click', function () {
  createSlideshow(ar0616);
});
const ar0617 = [slides[744]];
document.getElementById('c0617').addEventListener('click', function () {
  createSlideshow(ar0617);
});
const ar0618 = [slides[746]];
document.getElementById('c0618').addEventListener('click', function () {
  createSlideshow(ar0618);
});
const ar0619 = [slides[767]];
document.getElementById('c0619').addEventListener('click', function () {
  createSlideshow(ar0619);
});
const ar0620 = [slides[771]];
document.getElementById('c0620').addEventListener('click', function () {
  createSlideshow(ar0620);
});
const ar0621 = [slides[781], slides[782]];
document.getElementById('c0621').addEventListener('click', function () {
  createSlideshow(ar0621);
});
const ar0622 = [slides[828]];
document.getElementById('c0622').addEventListener('click', function () {
  createSlideshow(ar0622);
});
const ar0623 = [slides[839], slides[840]];
document.getElementById('c0623').addEventListener('click', function () {
  createSlideshow(ar0623);
});
const ar0624 = [slides[894], slides[895]];
document.getElementById('c0624').addEventListener('click', function () {
  createSlideshow(ar0624);
});
const ar0625 = [slides[936]];
document.getElementById('c0625').addEventListener('click', function () {
  createSlideshow(ar0625);
});
const ar0626 = [slides[937]];
document.getElementById('c0626').addEventListener('click', function () {
  createSlideshow(ar0626);
});
const ar0627 = [slides[943]];
document.getElementById('c0627').addEventListener('click', function () {
  createSlideshow(ar0627);
});
const ar0628 = [slides[954]];
document.getElementById('c0628').addEventListener('click', function () {
  createSlideshow(ar0628);
});
const ar0629 = [slides[954], slides[955]];
document.getElementById('c0629').addEventListener('click', function () {
  createSlideshow(ar0629);
});
const arCompRef035 = [slides[8], slides[9], slides[23], slides[214], slides[221], slides[279], slides[334], slides[335], slides[398], slides[401], slides[417], slides[433], slides[434], slides[494], slides[515], slides[516], slides[577], slides[597], slides[598], slides[687], slides[688], slides[693], slides[720], slides[721], slides[729], slides[744], slides[746], slides[767], slides[771], slides[781], slides[782], slides[828], slides[839], slides[840], slides[894], slides[895], slides[936], slides[937], slides[943], slides[954], slides[955]];
document.getElementById('compRef035').addEventListener('click', function () {
  createSlideshow(arCompRef035);
});

// CODE FOR TOPIC 36

const show36Tab = document.getElementById('topicName36');
const open36Tabs = document.querySelectorAll('.content36');
show36Tab.addEventListener('click', function () {
  open36Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret36 = document.getElementById('pointer36');
show36Tab.addEventListener('click', function () {
  caret36.classList.toggle('caretD');
});
const ar0630 = [slides[50], slides[51], slides[64], slides[65]];
document.getElementById('c0630').addEventListener('click', function () {
  createSlideshow(ar0630);
});
const ar0631 = [slides[94], slides[95]];
document.getElementById('c0631').addEventListener('click', function () {
  createSlideshow(ar0631);
});
const ar0632 = [slides[133], slides[164], slides[165]];
document.getElementById('c0632').addEventListener('click', function () {
  createSlideshow(ar0632);
});
const ar0633 = [slides[209], slides[210], slides[211]];
document.getElementById('c0633').addEventListener('click', function () {
  createSlideshow(ar0633);
});
const ar0634 = [slides[245], slides[258], slides[259]];
document.getElementById('c0634').addEventListener('click', function () {
  createSlideshow(ar0634);
});
const ar0635 = [slides[340]];
document.getElementById('c0635').addEventListener('click', function () {
  createSlideshow(ar0635);
});
const ar0636 = [slides[368]];
document.getElementById('c0636').addEventListener('click', function () {
  createSlideshow(ar0636);
});
const ar0637 = [slides[394], slides[395]];
document.getElementById('c0637').addEventListener('click', function () {
  createSlideshow(ar0637);
});
const ar0638 = [slides[405]];
document.getElementById('c0638').addEventListener('click', function () {
  createSlideshow(ar0638);
});
const ar0639 = [slides[407], slides[408], slides[409]];
document.getElementById('c0639').addEventListener('click', function () {
  createSlideshow(ar0639);
});
const ar0640 = [slides[417]];
document.getElementById('c0640').addEventListener('click', function () {
  createSlideshow(ar0640);
});
const ar0641 = [slides[425], slides[426], slides[431], slides[432], slides[433], slides[436], slides[440], slides[441]];
document.getElementById('c0641').addEventListener('click', function () {
  createSlideshow(ar0641);
});
const ar0642 = [slides[451], slides[457], slides[458]];
document.getElementById('c0642').addEventListener('click', function () {
  createSlideshow(ar0642);
});
const ar0643 = [slides[479]];
document.getElementById('c0643').addEventListener('click', function () {
  createSlideshow(ar0643);
});
const ar0644 = [slides[514], slides[516]];
document.getElementById('c0644').addEventListener('click', function () {
  createSlideshow(ar0644);
});
const ar0645 = [slides[539]];
document.getElementById('c0645').addEventListener('click', function () {
  createSlideshow(ar0645);
});
const ar0646 = [slides[548], slides[549], slides[550]];
document.getElementById('c0646').addEventListener('click', function () {
  createSlideshow(ar0646);
});
const ar0647 = [slides[576], slides[580]];
document.getElementById('c0647').addEventListener('click', function () {
  createSlideshow(ar0647);
});
const ar0648 = [slides[688]];
document.getElementById('c0648').addEventListener('click', function () {
  createSlideshow(ar0648);
});
const ar0649 = [slides[715], slides[716]];
document.getElementById('c0649').addEventListener('click', function () {
  createSlideshow(ar0649);
});
const ar0650 = [slides[758]];
document.getElementById('c0650').addEventListener('click', function () {
  createSlideshow(ar0650);
});
const ar0651 = [slides[770], slides[779]];
document.getElementById('c0651').addEventListener('click', function () {
  createSlideshow(ar0651);
});
const ar0652 = [slides[843]];
document.getElementById('c0652').addEventListener('click', function () {
  createSlideshow(ar0652);
});
const ar0653 = [slides[863]];
document.getElementById('c0653').addEventListener('click', function () {
  createSlideshow(ar0653);
});
const ar0654 = [slides[910], slides[911], slides[912]];
document.getElementById('c0654').addEventListener('click', function () {
  createSlideshow(ar0654);
});
const arCompRef036 = [slides[50], slides[51], slides[64], slides[65], slides[94], slides[95], slides[133], slides[164], slides[165], slides[209], slides[210], slides[211], slides[245], slides[258], slides[259], slides[340], slides[368], slides[394], slides[395], slides[405], slides[407], slides[408], slides[409], slides[417], slides[425], slides[426], slides[431], slides[432], slides[433], slides[436], slides[440], slides[441], slides[451], slides[457], slides[458], slides[479], slides[514], slides[516], slides[539], slides[548], slides[549], slides[550], slides[576], slides[580], slides[688], slides[715], slides[716], slides[758], slides[770], slides[779], slides[843], slides[863], slides[910], slides[911], slides[912]];
document.getElementById('compRef036').addEventListener('click', function () {
  createSlideshow(arCompRef036);
});

// CODE FOR TOPIC 37

const show37Tab = document.getElementById('topicName37');
const open37Tabs = document.querySelectorAll('.content37');
show37Tab.addEventListener('click', function () {
  open37Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret37 = document.getElementById('pointer37');
show37Tab.addEventListener('click', function () {
  caret37.classList.toggle('caretD');
});
const ar0655 = [slides[8], slides[12], slides[30], slides[65]];
document.getElementById('c0655').addEventListener('click', function () {
  createSlideshow(ar0655);
});
const ar0656 = [slides[85], slides[94], slides[95]];
document.getElementById('c0656').addEventListener('click', function () {
  createSlideshow(ar0656);
});
const ar0657 = [slides[136], slides[162], slides[164]];
document.getElementById('c0657').addEventListener('click', function () {
  createSlideshow(ar0657);
});
const ar0658 = [slides[183]];
document.getElementById('c0658').addEventListener('click', function () {
  createSlideshow(ar0658);
});
const ar0659 = [slides[218], slides[219], slides[220]];
document.getElementById('c0659').addEventListener('click', function () {
  createSlideshow(ar0659);
});
const ar0660 = [slides[378]];
document.getElementById('c0660').addEventListener('click', function () {
  createSlideshow(ar0660);
});
const ar0661 = [slides[447]];
document.getElementById('c0661').addEventListener('click', function () {
  createSlideshow(ar0661);
});
const ar0662 = [slides[461], slides[462]];
document.getElementById('c0662').addEventListener('click', function () {
  createSlideshow(ar0662);
});
const ar0663 = [slides[487], slides[489], slides[490], slides[491], slides[492], slides[493]];
document.getElementById('c0663').addEventListener('click', function () {
  createSlideshow(ar0663);
});
const ar0664 = [slides[519], slides[520], slides[522], slides[523], slides[524]];
document.getElementById('c0664').addEventListener('click', function () {
  createSlideshow(ar0664);
});
const ar0665 = [slides[543], slides[544]];
document.getElementById('c0665').addEventListener('click', function () {
  createSlideshow(ar0665);
});
const ar0666 = [slides[616]];
document.getElementById('c0666').addEventListener('click', function () {
  createSlideshow(ar0666);
});
const ar0667 = [slides[637]];
document.getElementById('c0667').addEventListener('click', function () {
  createSlideshow(ar0667);
});
const ar0668 = [slides[652], slides[653]];
document.getElementById('c0668').addEventListener('click', function () {
  createSlideshow(ar0668);
});
const ar0669 = [slides[668]];
document.getElementById('c0669').addEventListener('click', function () {
  createSlideshow(ar0669);
});
const ar0670 = [slides[685]];
document.getElementById('c0670').addEventListener('click', function () {
  createSlideshow(ar0670);
});
const ar0671 = [slides[721]];
document.getElementById('c0671').addEventListener('click', function () {
  createSlideshow(ar0671);
});
const ar0672 = [slides[725]];
document.getElementById('c0672').addEventListener('click', function () {
  createSlideshow(ar0672);
});
const ar0673 = [slides[747]];
document.getElementById('c0673').addEventListener('click', function () {
  createSlideshow(ar0673);
});
const ar0674 = [slides[780]];
document.getElementById('c0674').addEventListener('click', function () {
  createSlideshow(ar0674);
});
const ar0675 = [slides[797]];
document.getElementById('c0675').addEventListener('click', function () {
  createSlideshow(ar0675);
});
const ar0676 = [slides[863], slides[864]];
document.getElementById('c0676').addEventListener('click', function () {
  createSlideshow(ar0676);
});
const arCompRef037 = [slides[85], slides[94], slides[95], slides[136], slides[162], slides[164], slides[183], slides[218], slides[219], slides[220], slides[378], slides[447], slides[461], slides[462], slides[487], slides[489], slides[490], slides[491], slides[492], slides[493], slides[519], slides[520], slides[522], slides[523], slides[524], slides[543], slides[544], slides[616], slides[637], slides[652], slides[653], slides[668], slides[685], slides[721], slides[725], slides[747], slides[780], slides[797], slides[863], slides[864]];
document.getElementById('compRef037').addEventListener('click', function () {
  createSlideshow(arCompRef037);
});

// CODE FOR TOPIC 38

const show38Tab = document.getElementById('topicName38');
const open38Tabs = document.querySelectorAll('.content38');
show38Tab.addEventListener('click', function () {
  open38Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret38 = document.getElementById('pointer38');
show38Tab.addEventListener('click', function () {
  caret38.classList.toggle('caretD');
});
const ar0677 = [slides[29]];
document.getElementById('c0677').addEventListener('click', function () {
  createSlideshow(ar0677);
});
const ar0678 = [slides[420]];
document.getElementById('c0678').addEventListener('click', function () {
  createSlideshow(ar0678);
});
const ar0679 = [slides[459], slides[460]];
document.getElementById('c0679').addEventListener('click', function () {
  createSlideshow(ar0679);
});
const ar0680 = [slides[522], slides[523], slides[524], slides[525]];
document.getElementById('c0680').addEventListener('click', function () {
  createSlideshow(ar0680);
});
const ar0681 = [slides[687]];
document.getElementById('c0681').addEventListener('click', function () {
  createSlideshow(ar0681);
});
const ar0682 = [slides[728]];
document.getElementById('c0682').addEventListener('click', function () {
  createSlideshow(ar0682);
});
const ar0683 = [slides[914], slides[915]];
document.getElementById('c0683').addEventListener('click', function () {
  createSlideshow(ar0683);
});
const arCompRef038 = [slides[29], slides[420], slides[459], slides[460], slides[522], slides[523], slides[524], slides[525], slides[687], slides[728], slides[914], slides[915]];
document.getElementById('compRef038').addEventListener('click', function () {
  createSlideshow(arCompRef038);
});

// CODE FOR TOPIC 39

const show39Tab = document.getElementById('topicName39');
const open39Tabs = document.querySelectorAll('.content39');
show39Tab.addEventListener('click', function () {
  open39Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret39 = document.getElementById('pointer39');
show39Tab.addEventListener('click', function () {
  caret39.classList.toggle('caretD');
});
const ar0684 = [slides[28], slides[34], slides[35], slides[64]];
document.getElementById('c0684').addEventListener('click', function () {
  createSlideshow(ar0684);
});
const ar0685 = [slides[90], slides[107], slides[112]];
document.getElementById('c0685').addEventListener('click', function () {
  createSlideshow(ar0685);
});
const ar0686 = [slides[133], slides[142], slides[151], slides[152], slides[164], slides[165], slides[166]];
document.getElementById('c0686').addEventListener('click', function () {
  createSlideshow(ar0686);
});
const ar0687 = [slides[189], slides[196]];
document.getElementById('c0687').addEventListener('click', function () {
  createSlideshow(ar0687);
});
const ar0688 = [slides[206]];
document.getElementById('c0688').addEventListener('click', function () {
  createSlideshow(ar0688);
});
const ar0689 = [slides[270], slides[271]];
document.getElementById('c0689').addEventListener('click', function () {
  createSlideshow(ar0689);
});
const ar0690 = [slides[305], slides[312], slides[329]];
document.getElementById('c0690').addEventListener('click', function () {
  createSlideshow(ar0690);
});
const ar0691 = [slides[330]];
document.getElementById('c0691').addEventListener('click', function () {
  createSlideshow(ar0691);
});
const ar0692 = [slides[393], slides[394]];
document.getElementById('c0692').addEventListener('click', function () {
  createSlideshow(ar0692);
});
const ar0693 = [slides[397], slides[402], slides[405]];
document.getElementById('c0693').addEventListener('click', function () {
  createSlideshow(ar0693);
});
const ar0694 = [slides[433], slides[441]];
document.getElementById('c0694').addEventListener('click', function () {
  createSlideshow(ar0694);
});
const ar0695 = [slides[464], slides[465]];
document.getElementById('c0695').addEventListener('click', function () {
  createSlideshow(ar0695);
});
const ar0696 = [slides[519], slides[528]];
document.getElementById('c0696').addEventListener('click', function () {
  createSlideshow(ar0696);
});
const ar0697 = [slides[538], slides[539], slides[540]];
document.getElementById('c0697').addEventListener('click', function () {
  createSlideshow(ar0697);
});
const ar0698 = [slides[573], slides[578], slides[581]];
document.getElementById('c0698').addEventListener('click', function () {
  createSlideshow(ar0698);
});
const ar0699 = [slides[668], slides[676], slides[677], slides[678]];
document.getElementById('c0699').addEventListener('click', function () {
  createSlideshow(ar0699);
});
const ar0700 = [slides[688]];
document.getElementById('c0700').addEventListener('click', function () {
  createSlideshow(ar0700);
});
const ar0701 = [slides[697], slides[698]];
document.getElementById('c0701').addEventListener('click', function () {
  createSlideshow(ar0701);
});
const ar0702 = [slides[703]];
document.getElementById('c0702').addEventListener('click', function () {
  createSlideshow(ar0702);
});
const ar0703 = [slides[816], slides[821]];
document.getElementById('c0703').addEventListener('click', function () {
  createSlideshow(ar0703);
});
const ar0704 = [slides[839], slides[840], slides[843]];
document.getElementById('c0704').addEventListener('click', function () {
  createSlideshow(ar0704);
});
const ar0705 = [slides[859]];
document.getElementById('c0705').addEventListener('click', function () {
  createSlideshow(ar0705);
});
const ar0706 = [slides[880], slides[881]];
document.getElementById('c0706').addEventListener('click', function () {
  createSlideshow(ar0706);
});
const ar0707 = [slides[882]];
document.getElementById('c0707').addEventListener('click', function () {
  createSlideshow(ar0707);
});
const ar0708 = [slides[892], slides[893]];
document.getElementById('c0708').addEventListener('click', function () {
  createSlideshow(ar0708);
});
const ar0709 = [slides[916]];
document.getElementById('c0709').addEventListener('click', function () {
  createSlideshow(ar0709);
});
const ar0710 = [slides[953]];
document.getElementById('c0710').addEventListener('click', function () {
  createSlideshow(ar0710);
});
const arCompRef039 = [slides[28], slides[34], slides[35], slides[64], slides[90], slides[107], slides[112], slides[133], slides[142], slides[151], slides[152], slides[164], slides[165], slides[166], slides[189], slides[196], slides[206], slides[270], slides[271], slides[305], slides[312], slides[329], slides[330], slides[393], slides[394], slides[397], slides[402], slides[405], slides[433], slides[441], slides[464], slides[465], slides[519], slides[528], slides[538], slides[539], slides[540], slides[573], slides[578], slides[581], slides[668], slides[676], slides[677], slides[678], slides[688], slides[697], slides[698], slides[703], slides[816], slides[821], slides[839], slides[840], slides[843], slides[859], slides[880], slides[881], slides[882], slides[892], slides[893], slides[916], slides[953]];
document.getElementById('compRef039').addEventListener('click', function () {
  createSlideshow(arCompRef039);
});

// CODE FOR TOPIC 40

const show40Tab = document.getElementById('topicName40');
const open40Tabs = document.querySelectorAll('.content40');
show40Tab.addEventListener('click', function () {
  open40Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret40 = document.getElementById('pointer40');
show40Tab.addEventListener('click', function () {
  caret40.classList.toggle('caretD');
});
const ar0711 = [slides[112]];
document.getElementById('c0711').addEventListener('click', function () {
  createSlideshow(ar0711);
});
const ar0712 = [slides[277]];
document.getElementById('c0712').addEventListener('click', function () {
  createSlideshow(ar0712);
});
const ar0713 = [slides[405]];
document.getElementById('c0713').addEventListener('click', function () {
  createSlideshow(ar0713);
});
const ar0714 = [slides[675]];
document.getElementById('c0714').addEventListener('click', function () {
  createSlideshow(ar0714);
});
const ar0715 = [slides[761]];
document.getElementById('c0715').addEventListener('click', function () {
  createSlideshow(ar0715);
});
const ar0716 = [slides[802]];
document.getElementById('c0716').addEventListener('click', function () {
  createSlideshow(ar0716);
});
const ar0717 = [slides[839]];
document.getElementById('c0717').addEventListener('click', function () {
  createSlideshow(ar0717);
});
const ar0718 = [slides[906], slides[907]];
document.getElementById('c0718').addEventListener('click', function () {
  createSlideshow(ar0718);
});
const ar0719 = [slides[936]];
document.getElementById('c0719').addEventListener('click', function () {
  createSlideshow(ar0719);
});
const ar0720 = [slides[943]];
document.getElementById('c0720').addEventListener('click', function () {
  createSlideshow(ar0720);
});
const ar0721 = [slides[951]];
document.getElementById('c0721').addEventListener('click', function () {
  createSlideshow(ar0721);
});
const ar0722 = [slides[955]];
document.getElementById('c0722').addEventListener('click', function () {
  createSlideshow(ar0722);
});
const arCompRef040 = [slides[112], slides[277], slides[405], slides[675], slides[761], slides[802], slides[839], slides[906], slides[907], slides[936], slides[943], slides[951], slides[955]];
document.getElementById('compRef040').addEventListener('click', function () {
  createSlideshow(arCompRef040);
});

// CODE FOR TOPIC 41

const show41Tab = document.getElementById('topicName41');
const open41Tabs = document.querySelectorAll('.content41');
show41Tab.addEventListener('click', function () {
  open41Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret41 = document.getElementById('pointer41');
show41Tab.addEventListener('click', function () {
  caret41.classList.toggle('caretD');
});
const ar0723 = [slides[270]];
document.getElementById('c0723').addEventListener('click', function () {
  createSlideshow(ar0723);
});

// CODE FOR TOPIC 42

const show42Tab = document.getElementById('topicName42');
const open42Tabs = document.querySelectorAll('.content42');
show42Tab.addEventListener('click', function () {
  open42Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret42 = document.getElementById('pointer42');
show42Tab.addEventListener('click', function () {
  caret42.classList.toggle('caretD');
});
const ar0724 = [slides[806]];
document.getElementById('c0724').addEventListener('click', function () {
  createSlideshow(ar0724);
});
const ar0725 = [slides[914]];
document.getElementById('c0725').addEventListener('click', function () {
  createSlideshow(ar0725);
});
const arCompRef042 = [slides[806], slides[914]];
document.getElementById('compRef042').addEventListener('click', function () {
  createSlideshow(arCompRef042);
});

// CODE FOR TOPIC 43

const show43Tab = document.getElementById('topicName43');
const open43Tabs = document.querySelectorAll('.content43');
show43Tab.addEventListener('click', function () {
  open43Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret43 = document.getElementById('pointer43');
show43Tab.addEventListener('click', function () {
  caret43.classList.toggle('caretD');
});
const ar0726 = [slides[270]];
document.getElementById('c0726').addEventListener('click', function () {
  createSlideshow(ar0726);
});
const ar0727 = [slides[641]];
document.getElementById('c0727').addEventListener('click', function () {
  createSlideshow(ar0727);
});
const ar0728 = [slides[779]];
document.getElementById('c0728').addEventListener('click', function () {
  createSlideshow(ar0728);
});
const ar0729 = [slides[882]];
document.getElementById('c0729').addEventListener('click', function () {
  createSlideshow(ar0729);
});
const arCompRef043 = [slides[270], slides[641], slides[779], slides[882]];
document.getElementById('compRef043').addEventListener('click', function () {
  createSlideshow(arCompRef043);
});

// CODE FOR TOPIC 44

const show44Tab = document.getElementById('topicName44');
const open44Tabs = document.querySelectorAll('.content44');
show44Tab.addEventListener('click', function () {
  open44Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret44 = document.getElementById('pointer44');
show44Tab.addEventListener('click', function () {
  caret44.classList.toggle('caretD');
});
const ar0730 = [slides[901]];
document.getElementById('c0730').addEventListener('click', function () {
  createSlideshow(ar0730);
});

// CODE FOR TOPIC 45

const show45Tab = document.getElementById('topicName45');
const open45Tabs = document.querySelectorAll('.content45');
show45Tab.addEventListener('click', function () {
  open45Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret45 = document.getElementById('pointer45');
show45Tab.addEventListener('click', function () {
  caret45.classList.toggle('caretD');
});
const ar0731 = [slides[676]];
document.getElementById('c0731').addEventListener('click', function () {
  createSlideshow(ar0731);
});

// CODE FOR TOPIC 46

const show46Tab = document.getElementById('topicName46');
const open46Tabs = document.querySelectorAll('.content46');
show46Tab.addEventListener('click', function () {
  open46Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret46 = document.getElementById('pointer46');
show46Tab.addEventListener('click', function () {
  caret46.classList.toggle('caretD');
});
const ar0732 = [slides[528]];
document.getElementById('c0732').addEventListener('click', function () {
  createSlideshow(ar0732);
});

// CODE FOR TOPIC 47

const show47Tab = document.getElementById('topicName47');
const open47Tabs = document.querySelectorAll('.content47');
show47Tab.addEventListener('click', function () {
  open47Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret47 = document.getElementById('pointer47');
show47Tab.addEventListener('click', function () {
  caret47.classList.toggle('caretD');
});
const ar0733 = [slides[176]];
document.getElementById('c0733').addEventListener('click', function () {
  createSlideshow(ar0733);
});
const ar0734 = [slides[354]];
document.getElementById('c0734').addEventListener('click', function () {
  createSlideshow(ar0734);
});
const ar0735 = [slides[397]];
document.getElementById('c0735').addEventListener('click', function () {
  createSlideshow(ar0735);
});
const ar0736 = [slides[424]];
document.getElementById('c0736').addEventListener('click', function () {
  createSlideshow(ar0736);
});
const ar0737 = [slides[538], slides[539]];
document.getElementById('c0737').addEventListener('click', function () {
  createSlideshow(ar0737);
});
const ar0738 = [slides[581]];
document.getElementById('c0738').addEventListener('click', function () {
  createSlideshow(ar0738);
});
const ar0739 = [slides[703]];
document.getElementById('c0739').addEventListener('click', function () {
  createSlideshow(ar0739);
});
const ar0740 = [slides[729]];
document.getElementById('c0740').addEventListener('click', function () {
  createSlideshow(ar0740);
});
const ar0741 = [slides[802]];
document.getElementById('c0741').addEventListener('click', function () {
  createSlideshow(ar0741);
});
const ar0742 = [slides[816]];
document.getElementById('c0742').addEventListener('click', function () {
  createSlideshow(ar0742);
});
const ar0743 = [slides[834]];
document.getElementById('c0743').addEventListener('click', function () {
  createSlideshow(ar0743);
});
const ar0744 = [slides[843]];
document.getElementById('c0744').addEventListener('click', function () {
  createSlideshow(ar0744);
});
const ar0745 = [slides[900]];
document.getElementById('c0745').addEventListener('click', function () {
  createSlideshow(ar0745);
});
const ar0746 = [slides[933]];
document.getElementById('c0746').addEventListener('click', function () {
  createSlideshow(ar0746);
});
const arCompRef047 = [slides[176], slides[354], slides[397], slides[424], slides[538], slides[539], slides[581], slides[703], slides[729], slides[802], slides[816], slides[834], slides[843], slides[900], slides[933]];
document.getElementById('compRef047').addEventListener('click', function () {
  createSlideshow(arCompRef047);
});

// CODE FOR TOPIC 48

const show48Tab = document.getElementById('topicName48');
const open48Tabs = document.querySelectorAll('.content48');
show48Tab.addEventListener('click', function () {
  open48Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret48 = document.getElementById('pointer48');
show48Tab.addEventListener('click', function () {
  caret48.classList.toggle('caretD');
});
const ar0747 = [slides[952]];
document.getElementById('c0747').addEventListener('click', function () {
  createSlideshow(ar0747);
});

// CODE FOR TOPIC 49

const show49Tab = document.getElementById('topicName49');
const open49Tabs = document.querySelectorAll('.content49');
show49Tab.addEventListener('click', function () {
  open49Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret49 = document.getElementById('pointer49');
show49Tab.addEventListener('click', function () {
  caret49.classList.toggle('caretD');
});
const ar0748 = [slides[6], slides[7]];
document.getElementById('c0748').addEventListener('click', function () {
  createSlideshow(ar0748);
});
const ar0749 = [slides[358]];
document.getElementById('c0749').addEventListener('click', function () {
  createSlideshow(ar0749);
});
const ar0750 = [slides[802]];
document.getElementById('c0750').addEventListener('click', function () {
  createSlideshow(ar0750);
});
const arCompRef049 = [slides[6], slides[7], slides[358], slides[802]];
document.getElementById('compRef049').addEventListener('click', function () {
  createSlideshow(arCompRef049);
});

// CODE FOR TOPIC 50

const show50Tab = document.getElementById('topicName50');
const open50Tabs = document.querySelectorAll('.content50');
show50Tab.addEventListener('click', function () {
  open50Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret50 = document.getElementById('pointer50');
show50Tab.addEventListener('click', function () {
  caret50.classList.toggle('caretD');
});
const ar0751 = [slides[111], slides[112]];
document.getElementById('c0751').addEventListener('click', function () {
  createSlideshow(ar0751);
});
const ar0752 = [slides[174], slides[175]];
document.getElementById('c0752').addEventListener('click', function () {
  createSlideshow(ar0752);
});
const ar0753 = [slides[307], slides[308], slides[312], slides[315], slides[316], slides[329]];
document.getElementById('c0753').addEventListener('click', function () {
  createSlideshow(ar0753);
});
const ar0754 = [slides[679]];
document.getElementById('c0754').addEventListener('click', function () {
  createSlideshow(ar0754);
});
const ar0755 = [slides[695]];
document.getElementById('c0755').addEventListener('click', function () {
  createSlideshow(ar0755);
});
const arCompRef050 = [slides[111], slides[112], slides[174], slides[175], slides[2307], slides[308], slides[212], slides[215], slides[216], slides[329], slides[679], slides[695]];
document.getElementById('compRef050').addEventListener('click', function () {
  createSlideshow(arCompRef050);
});

// CODE FOR TOPIC 51

const show51Tab = document.getElementById('topicName51');
const open51Tabs = document.querySelectorAll('.content51');
show51Tab.addEventListener('click', function () {
  open51Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret51 = document.getElementById('pointer51');
show51Tab.addEventListener('click', function () {
  caret51.classList.toggle('caretD');
});
const ar0756 = [slides[107]];
document.getElementById('c0756').addEventListener('click', function () {
  createSlideshow(ar0756);
});
const ar0757 = [slides[212], slides[213], slides[214]];
document.getElementById('c0757').addEventListener('click', function () {
  createSlideshow(ar0757);
});
const ar0758 = [slides[277], slides[278]];
document.getElementById('c0758').addEventListener('click', function () {
  createSlideshow(ar0758);
});
const ar0759 = [slides[340]];
document.getElementById('c0759').addEventListener('click', function () {
  createSlideshow(ar0759);
});
const ar0760 = [slides[424]];
document.getElementById('c0760').addEventListener('click', function () {
  createSlideshow(ar0760);
});
const ar0761 = [slides[528]];
document.getElementById('c0761').addEventListener('click', function () {
  createSlideshow(ar0761);
});
const ar0762 = [slides[681]];
document.getElementById('c0762').addEventListener('click', function () {
  createSlideshow(ar0762);
});
const ar0763 = [slides[802]];
document.getElementById('c0763').addEventListener('click', function () {
  createSlideshow(ar0763);
});
const ar0764 = [slides[914], slides[915]];
document.getElementById('c0764').addEventListener('click', function () {
  createSlideshow(ar0764);
});
const arCompRef051 = [slides[107], slides[212], slides[213], slides[214], slides[277], slides[278], slides[340], slides[424], slides[528], slides[681], slides[802], slides[914], slides[915]];
document.getElementById('compRef051').addEventListener('click', function () {
  createSlideshow(arCompRef051);
});

// CODE FOR TOPIC 52

const show52Tab = document.getElementById('topicName52');
const open52Tabs = document.querySelectorAll('.content52');
show52Tab.addEventListener('click', function () {
  open52Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret52 = document.getElementById('pointer52');
show52Tab.addEventListener('click', function () {
  caret52.classList.toggle('caretD');
});
const ar0765 = [slides[220]];
document.getElementById('c0765').addEventListener('click', function () {
  createSlideshow(ar0765);
});
const ar0766 = [slides[393], slides[394]];
document.getElementById('c0766').addEventListener('click', function () {
  createSlideshow(ar0766);
});
const ar0767 = [slides[553]];
document.getElementById('c0767').addEventListener('click', function () {
  createSlideshow(ar0767);
});
const ar0768 = [slides[581]];
document.getElementById('c0768').addEventListener('click', function () {
  createSlideshow(ar0768);
});
const ar0769 = [slides[692]];
document.getElementById('c0769').addEventListener('click', function () {
  createSlideshow(ar0769);
});
const ar0770 = [slides[730]];
document.getElementById('c0770').addEventListener('click', function () {
  createSlideshow(ar0770);
});
const ar0771 = [slides[838]];
document.getElementById('c0771').addEventListener('click', function () {
  createSlideshow(ar0771);
});
const arCompRef052 = [slides[220], slides[393], slides[394], slides[553], slides[581], slides[692], slides[730], slides[838]];
document.getElementById('compRef052').addEventListener('click', function () {
  createSlideshow(arCompRef052);
});

// CODE FOR TOPIC 53

const show53Tab = document.getElementById('topicName53');
const open53Tabs = document.querySelectorAll('.content53');
show53Tab.addEventListener('click', function () {
  open53Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret53 = document.getElementById('pointer53');
show53Tab.addEventListener('click', function () {
  caret53.classList.toggle('caretD');
});
const ar0772 = [slides[34]];
document.getElementById('c0772').addEventListener('click', function () {
  createSlideshow(ar0772);
});
const ar0773 = [slides[143]];
document.getElementById('c0773').addEventListener('click', function () {
  createSlideshow(ar0773);
});
const ar0774 = [slides[205]];
document.getElementById('c0774').addEventListener('click', function () {
  createSlideshow(ar0774);
});
const ar0775 = [slides[281]];
document.getElementById('c0775').addEventListener('click', function () {
  createSlideshow(ar0775);
});
const ar0776 = [slides[325], slides[326]];
document.getElementById('c0776').addEventListener('click', function () {
  createSlideshow(ar0776);
});
const ar0777 = [slides[349], slides[350], slides[351]];
document.getElementById('c0777').addEventListener('click', function () {
  createSlideshow(ar0777);
});
const ar0778 = [slides[372], slides[374]];
document.getElementById('c0778').addEventListener('click', function () {
  createSlideshow(ar0778);
});
const ar0779 = [slides[425]];
document.getElementById('c0779').addEventListener('click', function () {
  createSlideshow(ar0779);
});
const ar0780 = [slides[494]];
document.getElementById('c0780').addEventListener('click', function () {
  createSlideshow(ar0780);
});
const ar0781 = [slides[512]];
document.getElementById('c0781').addEventListener('click', function () {
  createSlideshow(ar0781);
});
const ar0782 = [slides[599]];
document.getElementById('c0782').addEventListener('click', function () {
  createSlideshow(ar0782);
});
const ar0783 = [slides[613], slides[614]];
document.getElementById('c0783').addEventListener('click', function () {
  createSlideshow(ar0783);
});
const ar0784 = [slides[652]];
document.getElementById('c0784').addEventListener('click', function () {
  createSlideshow(ar0784);
});
const ar0785 = [slides[666], slides[667], slides[678]];
document.getElementById('c0785').addEventListener('click', function () {
  createSlideshow(ar0785);
});
const ar0786 = [slides[731], slides[742]];
document.getElementById('c0786').addEventListener('click', function () {
  createSlideshow(ar0786);
});
const ar0787 = [slides[772]];
document.getElementById('c0787').addEventListener('click', function () {
  createSlideshow(ar0787);
});
const ar0788 = [slides[839]];
document.getElementById('c0788').addEventListener('click', function () {
  createSlideshow(ar0788);
});
const ar0789 = [slides[925]];
document.getElementById('c0789').addEventListener('click', function () {
  createSlideshow(ar0789);
});
const ar0790 = [slides[952]];
document.getElementById('c0790').addEventListener('click', function () {
  createSlideshow(ar0790);
});
const arCompRef053 = [slides[34], slides[143], slides[205], slides[281], slides[325], slides[326], slides[349], slides[350], slides[351], slides[372], slides[374], slides[425], slides[494], slides[512], slides[599], slides[613], slides[614], slides[652], slides[666], slides[667], slides[678], slides[731], slides[742], slides[772], slides[839], slides[925], slides[952]];
document.getElementById('compRef053').addEventListener('click', function () {
  createSlideshow(arCompRef053);
});

// CODE FOR TOPIC 54

const show54Tab = document.getElementById('topicName54');
const open54Tabs = document.querySelectorAll('.content54');
show54Tab.addEventListener('click', function () {
  open54Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret54 = document.getElementById('pointer54');
show54Tab.addEventListener('click', function () {
  caret54.classList.toggle('caretD');
});
const ar0791 = [slides[66]];
document.getElementById('c0791').addEventListener('click', function () {
  createSlideshow(ar0791);
});
const ar0792 = [slides[82]];
document.getElementById('c0792').addEventListener('click', function () {
  createSlideshow(ar0792);
});
const ar0793 = [slides[142]];
document.getElementById('c0793').addEventListener('click', function () {
  createSlideshow(ar0793);
});
const ar0794 = [slides[195], slides[196]];
document.getElementById('c0794').addEventListener('click', function () {
  createSlideshow(ar0794);
});
const ar0795 = [slides[440]];
document.getElementById('c0795').addEventListener('click', function () {
  createSlideshow(ar0795);
});
const ar0796 = [slides[773]];
document.getElementById('c0796').addEventListener('click', function () {
  createSlideshow(ar0796);
});
const ar0797 = [slides[830]];
document.getElementById('c0797').addEventListener('click', function () {
  createSlideshow(ar0797);
});
const ar0798 = [slides[889]];
document.getElementById('c0798').addEventListener('click', function () {
  createSlideshow(ar0798);
});
const ar0799 = [slides[946]];
document.getElementById('c0799').addEventListener('click', function () {
  createSlideshow(ar0799);
});
const ar0800 = [slides[951]];
document.getElementById('c0800').addEventListener('click', function () {
  createSlideshow(ar0800);
});
const arCompRef054 = [slides[66], slides[82], slides[142], slides[195], slides[196], slides[440], slides[773], slides[830], slides[889], slides[946], slides[951]];
document.getElementById('compRef054').addEventListener('click', function () {
  createSlideshow(arCompRef054);
});

// CODE FOR TOPIC 55

const show55Tab = document.getElementById('topicName55');
const open55Tabs = document.querySelectorAll('.content55');
show55Tab.addEventListener('click', function () {
  open55Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret55 = document.getElementById('pointer55');
show55Tab.addEventListener('click', function () {
  caret55.classList.toggle('caretD');
});
const ar0801 = [slides[84], slides[85], slides[104], slides[105]];
document.getElementById('c0801').addEventListener('click', function () {
  createSlideshow(ar0801);
});
const ar0802 = [slides[125], slides[126], slides[137], slides[138], slides[139], slides[142]];
document.getElementById('c0802').addEventListener('click', function () {
  createSlideshow(ar0802);
});
const ar0803 = [slides[195]];
document.getElementById('c0803').addEventListener('click', function () {
  createSlideshow(ar0803);
});
const ar0804 = [slides[270], slides[271]];
document.getElementById('c0804').addEventListener('click', function () {
  createSlideshow(ar0804);
});
const ar0805 = [slides[281], slides[285], slides[290]];
document.getElementById('c0805').addEventListener('click', function () {
  createSlideshow(ar0805);
});
const ar0806 = [slides[569], slides[570]];
document.getElementById('c0806').addEventListener('click', function () {
  createSlideshow(ar0806);
});
const ar0807 = [slides[671], slides[682]];
document.getElementById('c0807').addEventListener('click', function () {
  createSlideshow(ar0807);
});
const ar0808 = [slides[813]];
document.getElementById('c0808').addEventListener('click', function () {
  createSlideshow(ar0808);
});
const ar0809 = [slides[818]];
document.getElementById('c0809').addEventListener('click', function () {
  createSlideshow(ar0809);
});
const ar0810 = [slides[825]];
document.getElementById('c0810').addEventListener('click', function () {
  createSlideshow(ar0810);
});
const ar0811 = [slides[868]];
document.getElementById('c0811').addEventListener('click', function () {
  createSlideshow(ar0811);
});
const ar0812 = [slides[872]];
document.getElementById('c0812').addEventListener('click', function () {
  createSlideshow(ar0812);
});
const ar0813 = [slides[889]];
document.getElementById('c0813').addEventListener('click', function () {
  createSlideshow(ar0813);
});
const arCompRef055 = [slides[84], slides[85], slides[104], slides[105], slides[125], slides[126], slides[137], slides[138], slides[139], slides[142], slides[195], slides[270], slides[271], slides[281], slides[285], slides[290], slides[569], slides[570], slides[671], slides[682], slides[813], slides[818], slides[825], slides[868], slides[872], slides[889]];
document.getElementById('compRef055').addEventListener('click', function () {
  createSlideshow(arCompRef055);
});

// CODE FOR TOPIC 56

const show56Tab = document.getElementById('topicName56');
const open56Tabs = document.querySelectorAll('.content56');
show56Tab.addEventListener('click', function () {
  open56Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret56 = document.getElementById('pointer56');
show56Tab.addEventListener('click', function () {
  caret56.classList.toggle('caretD');
});
const ar0814 = [slides[126], slides[152]];
document.getElementById('c0814').addEventListener('click', function () {
  createSlideshow(ar0814);
});
const ar0815 = [slides[283], slides[284]];
document.getElementById('c0815').addEventListener('click', function () {
  createSlideshow(ar0815);
});
const ar0816 = [slides[313]];
document.getElementById('c0816').addEventListener('click', function () {
  createSlideshow(ar0816);
});
const ar0817 = [slides[572]];
document.getElementById('c0817').addEventListener('click', function () {
  createSlideshow(ar0817);
});
const ar0818 = [slides[674]];
document.getElementById('c0818').addEventListener('click', function () {
  createSlideshow(ar0818);
});
const ar0819 = [slides[915]];
document.getElementById('c0819').addEventListener('click', function () {
  createSlideshow(ar0819);
});
const arCompRef056 = [slides[126], slides[152], slides[283], slides[284], slides[313], slides[572], slides[674], slides[915]];
document.getElementById('compRef056').addEventListener('click', function () {
  createSlideshow(arCompRef056);
});

// CODE FOR TOPIC 57

const show57Tab = document.getElementById('topicName57');
const open57Tabs = document.querySelectorAll('.content57');
show57Tab.addEventListener('click', function () {
  open57Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret57 = document.getElementById('pointer57');
show57Tab.addEventListener('click', function () {
  caret57.classList.toggle('caretD');
});
const ar0820 = [slides[39], slides[40], slides[43], slides[44], slides[46], slides[47], slides[53], slides[55], slides[77], slides[78]];
document.getElementById('c0820').addEventListener('click', function () {
  createSlideshow(ar0820);
});
const ar0821 = [slides[84]];
document.getElementById('c0821').addEventListener('click', function () {
  createSlideshow(ar0821);
});
const ar0822 = [slides[130], slides[148]];
document.getElementById('c0822').addEventListener('click', function () {
  createSlideshow(ar0822);
});
const ar0823 = [slides[172]];
document.getElementById('c0823').addEventListener('click', function () {
  createSlideshow(ar0823);
});
const ar0824 = [slides[226]];
document.getElementById('c0824').addEventListener('click', function () {
  createSlideshow(ar0824);
});
const ar0825 = [slides[244]];
document.getElementById('c0825').addEventListener('click', function () {
  createSlideshow(ar0825);
});
const ar0826 = [slides[320]];
document.getElementById('c0826').addEventListener('click', function () {
  createSlideshow(ar0826);
});
const ar0827 = [slides[444], slides[445]];
document.getElementById('c0827').addEventListener('click', function () {
  createSlideshow(ar0827);
});
const ar0828 = [slides[544]];
document.getElementById('c0828').addEventListener('click', function () {
  createSlideshow(ar0828);
});
const ar0829 = [slides[552]];
document.getElementById('c0829').addEventListener('click', function () {
  createSlideshow(ar0829);
});
const ar0830 = [slides[667]];
document.getElementById('c0830').addEventListener('click', function () {
  createSlideshow(ar0830);
});
const ar0831 = [slides[727]];
document.getElementById('c0831').addEventListener('click', function () {
  createSlideshow(ar0831);
});
const ar0832 = [slides[818]];
document.getElementById('c0832').addEventListener('click', function () {
  createSlideshow(ar0832);
});
const ar0833 = [slides[892]];
document.getElementById('c0833').addEventListener('click', function () {
  createSlideshow(ar0833);
});
const ar0834 = [slides[917]];
document.getElementById('c0834').addEventListener('click', function () {
  createSlideshow(ar0834);
});
const arCompRef057 = [slides[39], slides[40], slides[43], slides[44], slides[46], slides[47], slides[53], slides[55], slides[77], slides[78], slides[84], slides[130], slides[148], slides[172], slides[226], slides[244], slides[320], slides[444], slides[445], slides[544], slides[552], slides[667], slides[727], slides[818], slides[892], slides[917]];
document.getElementById('compRef057').addEventListener('click', function () {
  createSlideshow(arCompRef057);
});
/*
const ar083 = [slides[]];
document.getElementById('c083').addEventListener('click', function () {
  createSlideshow(ar083);
});
const ar083 = [slides[]];
document.getElementById('c083').addEventListener('click', function () {
  createSlideshow(ar083);
});
const ar083 = [slides[]];
document.getElementById('c083').addEventListener('click', function () {
  createSlideshow(ar083);
});
const ar083 = [slides[]];
document.getElementById('c083').addEventListener('click', function () {
  createSlideshow(ar083);
});
const ar083 = [slides[]];
document.getElementById('c083').addEventListener('click', function () {
  createSlideshow(ar083);
});
const ar084 = [slides[]];
document.getElementById('c084').addEventListener('click', function () {
  createSlideshow(ar084);
});
// CODE FOR TOPIC 5

const show5Tab = document.getElementById('topicName5');
const open5Tabs = document.querySelectorAll('.content5');
show5Tab.addEventListener('click', function () {
  open5Tabs.forEach(openTab => {
    openTab.classList.toggle('show-content');
  });
});
const caret5 = document.getElementById('pointer5');
show5Tab.addEventListener('click', function () {
  caret5.classList.toggle('caretD');
});
*/

