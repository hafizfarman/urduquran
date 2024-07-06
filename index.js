const paras = document.querySelectorAll('.paraName');
paras.forEach(para => {
  para.addEventListener('click', function handleClick(event) {
    let pPage = document.getElementById('slides');
    pPage.style.display = 'block';
    let sName = document.getElementById('sName');
    sName.style.display = 'none';
    let pName = document.getElementById('pName');
    pName.style.display = 'none';
  });
});
const paraNames = document.querySelectorAll('.para');
paraNames.forEach(para => {
  para.addEventListener('click', function handleClick(event) {
    let pPage = document.getElementById('slides');
    pPage.style.display = 'none';
    let sName = document.getElementById('sName');
    sName.style.display = 'none';
    let pName = document.getElementById('pName');
    pName.style.display = 'block';
  });
});

const suras = document.querySelectorAll('.suraName');
suras.forEach(sura => {
  sura.addEventListener('click', function handleClick(event) {
    let pPage = document.getElementById('slides');
    pPage.style.display = 'block';
    let sName = document.getElementById('sName');
    sName.style.display = 'none';
    let pName = document.getElementById('pName');
    pName.style.display = 'none';
  });
});
const suraNames = document.querySelectorAll('.sura');
suraNames.forEach(sura => {
  sura.addEventListener('click', function handleClick(event) {
    let pPage = document.getElementById('slides');
    pPage.style.display = 'none';
    let sName = document.getElementById('sName');
    sName.style.display = 'block';
    let pName = document.getElementById('pName');
    pName.style.display = 'none';
  });
});

const slides = [
  'p000.jpg', 'p002.jpg', 'p003.jpg', 'p004.jpg', 'p005.jpg', 'p006.jpg', 'p007.jpg', 'p008.jpg', 'p009.jpg',
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
  'p920.jpg', 'p921.jpg', 'p922.jpg', 'p922.jpg', 'p924.jpg', 'p925.jpg', 'p926.jpg', 'p927.jpg', 'p928.jpg', 'p929.jpg',
  'p930.jpg', 'p931.jpg', 'p932.jpg', 'p933.jpg', 'p934.jpg', 'p935.jpg', 'p936.jpg', 'p937.jpg', 'p938.jpg', 'p939.jpg',
  'p940.jpg', 'p941.jpg', 'p942.jpg', 'p943.jpg', 'p944.jpg', 'p945.jpg', 'p946.jpg', 'p947.jpg', 'p948.jpg', 'p949.jpg',
  'p950.jpg', 'p951.jpg', 'p952.jpg', 'p953.jpg', 'p954.jpg', 'p955.jpg', 'p956.jpg', 'p957.jpg', 'p958.jpg', 'p959.jpg',
  'p960.jpg', 'p961.jpg', 'p962.jpg', 'p963.jpg', 'p964.jpg'
];

let slideIndex = 0;
const imageContainer = document.getElementById('slideBox');
const message = document.getElementById('message');
let pageNumber = document.getElementById('page').value;

// CODE FOR SEARCH FUNCTION

function searchPage() {
  pageNumber = document.getElementById('page').value;

  if (pageNumber < 0 || pageNumber > slides.length) {
    message.textContent = 'زیر نظر نسخہ ' + slides.length + 'صفحات پر مشتمل ہے۔';
  } else {
    let pageSource = slides[pageNumber - 1];
    imageContainer.innerHTML = `<img src="${pageSource}" alt="Image ${slideIndex + 1}">`;
    message.textContent = '';
  }
}

const searchBtn = document.getElementById('submit').addEventListener('click', function () {
  searchPage();
  showSlides(slideIndex = pageNumber - 1);
//  pageNumber.value = '';
});
const sBtn = document.getElementById('submit').addEventListener('click', function() {
  pageNumber.value = '';
});
// CODE FOR SLIDES DISPLAY

function displayCurrentSlide() {
  const slideUrl = slides[slideIndex];
  imageContainer.innerHTML = `<img src="${slideUrl}" alt="Image ${slideIndex + 1}">`;
}

function showSlides(index) {

  let paras = document.querySelectorAll('.paraName');
  let suras = document.querySelectorAll('.suraName');

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = slideIndex;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = displayCurrentSlide();
    paras[i].classList.remove('active-link');
    suras[i].classList.remove('active-link');
  }
  slides[slideIndex] = displayCurrentSlide();
  paras[slideIndex].classList.add('active-link');
  suras[slideIndex].classList.add('active-link');
};
displayCurrentSlide();

document.querySelectorAll('.paraName').forEach(function (element) {
  element.addEventListener('click', function () {
    let paras = Array.prototype.slice.call(this.parentElement.children);
    let paraIndex = paras.indexOf(element);
    showSlides(slideIndex = paraIndex);
  });
});
document.querySelectorAll('.suraName').forEach(function (element) {
  element.addEventListener('click', function () {
    let suras = Array.prototype.slice.call(this.parentElement.children);
    let suraIndex = suras.indexOf(element);
    showSlides(slideIndex = suraIndex);
  });
});

// CODE TO NAVIGATE NEXT & PREVIOUS SLIDES (FINGER TOUCH)

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
    showSlides(++slideIndex);
  }
  else if (deltaX <= -30 && deltaY <= 100 && deltaTime <= 300) {
    showSlides(--slideIndex);
  }
});

const topicLists = document.querySelectorAll('.topic');
topicLists.forEach(topic => {
  topic.addEventListener('click', function () {
    location.href = 'topic.html'
  });
});

/* function move() {
  window.location = "topic.html";
} */
/* function goURL() {
  destination = document.getElementById('slides');
  location.href = "topic.html"  // change url to your's
} */
/* const arrowsN = document.querySelectorAll('.next');
arrowsN.forEach(arrowN => {
  arrowN.addEventListener('click', function handleClick(event) {
    showSlides(++slideIndex);
  });
}); */

/* const arrowsP = document.querySelectorAll('.previous');
arrowsP.forEach(arrowP => {
  arrowP.addEventListener('click', function handleClick(event) {
    showSlides(--slideIndex);
  });
}); */



/* document.querySelector('#ex-cross').addEventListener('click', function () {
  closeSlide();
}); */

/* function closeSlide() {
  var pPage = document.querySelector('#container');
  pPage.style.display = 'block';
  var slideShow = document.querySelector('#slideShow');
  slideShow.style.display = 'none';
} */

/* const photos = document.querySelectorAll('.small');
photos.forEach(photo => {
  photo.addEventListener('click', function handleClick(event) {
    photo.classList.toggle('zoom');
    photo();
  });
}); */

