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

function generate_clean_vc(tableId, filenames, page) {
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
            cell.innerHTML = createAudioHTML('clean_samples/reference/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(1);
            cell.innerHTML = createAudioHTML('clean_samples/source/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(2);
            cell.innerHTML = createAudioHTML('clean_samples/ICL-VC/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(3);
            cell.innerHTML = createAudioHTML('clean_samples/Denoise-VC/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(4);
            cell.innerHTML = createAudioHTML('clean_samples/E2E-BPVC/'+filenames[i], false);
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

function generate_music_vc(tableId, filenames, page) {
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
            cell.innerHTML = createAudioHTML('music_samples/reference/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(1);
            cell.innerHTML = createAudioHTML('music_samples/source/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(2);
            cell.innerHTML = createAudioHTML('music_samples/ICL-VC/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(3);
            cell.innerHTML = createAudioHTML('music_samples/Denoise-VC/'+filenames[i], false);
            cell.style.textAlign = "center";
    
            cell = row.insertCell(4);
            cell.innerHTML = createAudioHTML('music_samples/E2E-BPVC/'+filenames[i], false);
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

clean_filelist = [
    "1320_122612_000002_000000-5683_32879_000007_000000.wav",
    "1320_122612_000002_000000-6829_68771_000009_000000.wav",
    "1320_122612_000002_000000-7021_79730_000044_000001.wav",
    "1320_122612_000005_000001-1580_141083_000001_000002.wav",
    "1320_122612_000005_000001-4507_16021_000021_000003.wav",
    "260_123286_000004_000000-4992_41797_000004_000002.wav",
    "260_123286_000004_000000-8224_274384_000001_000000.wav",
    "3570_5695_000000_000000-4992_41797_000004_000002.wav",
    // "7021_85628_000002_000000-5683_32879_000007_000000.wav",
    // "8463_294828_000013_000000-1580_141083_000001_000002.wav"
]

noise_filelist = [
    "noise_snr_7_1320_122612_000005_000001-5683_32879_000007_000000-noise-free-sound-0394.wav",
    "noise_snr_12_1188_133604_000004_000005-1580_141083_000001_000002-noise-free-sound-0608.wav", 
    "noise_snr_12_1188_133604_000006_000000-8224_274384_000001_000000-noise-free-sound-0157.wav",
    "noise_snr_12_1320_122612_000002_000000-4992_41797_000004_000002-noise-sound-bible-0059.wav",
    "noise_snr_12_7021_85628_000002_000000-5683_32879_000007_000000-noise-free-sound-0772.wav",
    "noise_snr_7_1188_133604_000004_000005-1580_141083_000001_000002-noise-free-sound-0608.wav",
    "noise_snr_7_1188_133604_000006_000000-1320_122617_000029_000001-noise-free-sound-0259.wav",
    "noise_snr_7_260_123286_000004_000000-5683_32879_000007_000000-noise-free-sound-0017.wav",
]

music_filelist = [
    "music_snr_12_260_123286_000004_000000-1580_141083_000001_000002-music-fma-wa-0007.wav",
    "music_snr_12_3570_5695_000000_000002-8224_274384_000001_000000-musdb_train_062_stream_3.wav",
    "music_snr_12_4970_29093_000002_000000-5683_32879_000007_000000-musdb_train_075_stream_3.wav",
    "music_snr_12_7021_85628_000002_000000-5683_32879_000007_000000-musdb_train_018_stream_3.wav",
    "music_snr_12_7021_85628_000002_000000-7021_79730_000044_000001-2zo5z1I0CeM.wav",
    "music_snr_7_1188_133604_000004_000005-1580_141083_000001_000002-BBSApRvkaqY.wav",
    "music_snr_7_1320_122612_000002_000000-6829_68771_000009_000000-musdb_train_011_stream_1.wav",
    "music_snr_7_3570_5695_000000_000002-8224_274384_000001_000000-musdb_train_062_stream_3.wav",
    // "music_snr_7_4970_29093_000002_000000-6829_68771_000009_000000-music-hd-0045.wav",
    // "music_snr_7_7021_85628_000002_000000-5683_32879_000007_000000-musdb_train_018_stream_3.wav"
]

generate_clean_vc('clean_vc', clean_filelist, 1);  
generate_noise_vc('noise_vc', noise_filelist, 1);  
generate_music_vc('music_vc', music_filelist, 1);  

$(document).ready(function() {
    for (let i = 1; i <= 2; i++) {
      let id = '#clean_vc-' + i;
      $(id).click(function() {
        generate_clean_vc(
            'clean_vc', clean_filelist, i);
        $(id).parent().siblings().removeClass('active');
        $(id).parent().addClass('active');
        return false;
      });
    }
});

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

$(document).ready(function() {
    for (let i = 1; i <= 2; i++) {
      let id = '#music_vc-' + i;
      $(id).click(function() {
        generate_music_vc(
            'music_vc', music_filelist, i);
        $(id).parent().siblings().removeClass('active');
        $(id).parent().addClass('active');
        return false;
      });
    }
});
  