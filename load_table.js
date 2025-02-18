function createAudioHTML(path, flat) {
    if (flat) {
      return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
          path +
          ' type="audio/wav">Your browser does not support the audio element.</audio>';
    }
    return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
}
  
function generate_noise_vc(tableId, filenames, page) {
    let numPerPage = 4;
    let table = document.getElementById(tableId);
    let nrRows = table.rows.length;
    for (let i = 1; i < nrRows; i++) {
      table.deleteRow(1);
    }
    const end_idx = page * numPerPage;
    for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
        let row = table.insertRow(i % numPerPage + 1);
        row.style.height = '80px';
        if (i < filenames.length) {
            cell = row.insertCell(0);
            cell.innerHTML = createAudioHTML('noise_samples/reference/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(1);
            cell.innerHTML = createAudioHTML('noise_samples/source/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(2);
            cell.innerHTML = createAudioHTML('noise_samples/ICL-VC/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(3);
            cell.innerHTML = createAudioHTML('noise_samples/Denoise-VC/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(4);
            cell.innerHTML = createAudioHTML('noise_samples/E2E-BPVC/'+filenames[i], false);
            cell.style.textAlign = "center";
    
        } else {
            let cell = row.insertCell(0);
            cell.innerHTML = '<br>';
            cell = row.insertCell(1);
            cell.innerHTML = '<br>';
            cell.style.textAlign = "center";
            cell = row.insertCell(2);
            cell.innerHTML = '<br>';
            cell.style.textAlign = "center";
            cell = row.insertCell(3);
            cell.innerHTML = '<br>';
            cell.style.textAlign = "center";
            cell = row.insertCell(4);
            cell.innerHTML = '<br>';
            cell.style.textAlign = "center";
        }
    }
}
  
noise_filelist = [
    "noise_snr_12_1188_133604_000004_000005-1580_141083_000001_000002-noise-free-sound-0608.wav", 
    "noise_snr_12_1188_133604_000006_000000-8224_274384_000001_000000-noise-free-sound-0157.wav",
    "noise_snr_12_1320_122612_000002_000000-4992_41797_000004_000002-noise-sound-bible-0059.wav",
    "noise_snr_12_260_123286_000004_000000-7021_79759_000004_000004-noise-free-sound-0298.wav",
    "noise_snr_12_7021_85628_000002_000000-5683_32879_000007_000000-noise-free-sound-0772.wav",
    "noise_snr_7_1188_133604_000004_000005-1580_141083_000001_000002-noise-free-sound-0608.wav",
    "noise_snr_7_1188_133604_000006_000000-1320_122617_000029_000001-noise-free-sound-0259.wav",
    "noise_snr_7_1320_122612_000005_000001-5683_32879_000007_000000-noise-free-sound-0394.wav",
    "noise_snr_7_260_123286_000004_000000-5683_32879_000007_000000-noise-free-sound-0017.wav",
    "noise_snr_7_7127_75946_000002_000001-8224_274384_000001_000000-noise-free-sound-0421.wav",
]
    
generate_noise_vc('noise_vc', noise_filelist, 1);  
  
$(document).ready(function() {
    for (let i = 1; i <= 2; i++) {
      let id = '#noise_vc-' + i;
      $(id).click(function() {
        generate_noise_vc(
            'noise_vc', noise_filelist, i);
        $(id).parent().siblings().removeClass('active');
        $(id).parent().addClass('active');
        return false;
      });
    }
});
  