var cam = document.getElementById('cam')
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 95
})
Webcam.attach(cam)
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gD2SApvLB/model.json',modelloading)
function modelloading() 
{
    console.log('Moldelo carregado');

}
    function takeSnapshot()
    {
        Webcam.snap(function (dataUri){ 
            document.getElementById('foto').innerHTML = '<img id="fotoTirada" src="'+ dataUri + '">'
    }
    );
}
    function check() {
        var foto = document.getElementById('fotoTirada')
        classifier.classify(foto, gotresults)
    }
    function gotresults(error, results) {
        if (error) {
            console.error(error);
        }
        else {
            console.log(results)
            var nameObject = results[0].label;
            var precizao = results[0].confidence;
            precizao = Math.round(precizao * 100);
            document.getElementById('resultName').innerHTML = nameObject;
            document.getElementById('Presunto').innerHTML = precizao + '%';
        }
        
    }
    
