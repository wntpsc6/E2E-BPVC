import os
import soundfile as sf
import numpy as np

output_base = {
    "a": "reference",
    "b": "source",
    "c": "ICL-VC",
    "d": "Denoise-VC",
    "e": "E2E-BPVC",
}

# NOISE_SNR_7_FILELIST = [
#     "260_123286_000004_000000-5683_32879_000007_000000-noise-free-sound-0017",
#     "1188_133604_000004_000005-1580_141083_000001_000002-noise-free-sound-0608",
#     "1188_133604_000006_000000-1320_122617_000029_000001-noise-free-sound-0259",
#     "1320_122612_000005_000001-5683_32879_000007_000000-noise-free-sound-0394",
#     "7127_75946_000002_000001-8224_274384_000001_000000-noise-free-sound-0421",
# ]

# NOISE_SNR_12_FILELIST = [
#     "260_123286_000004_000000-7021_79759_000004_000004-noise-free-sound-0298",
#     "1188_133604_000004_000005-1580_141083_000001_000002-noise-free-sound-0608",
#     "1188_133604_000006_000000-8224_274384_000001_000000-noise-free-sound-0157",
#     "1320_122612_000002_000000-4992_41797_000004_000002-noise-sound-bible-0059",
#     "7021_85628_000002_000000-5683_32879_000007_000000-noise-free-sound-0772",
# ]

# MUSIC_SNR_7_FILELIST = [
#     "1188_133604_000004_000005-1580_141083_000001_000002-BBSApRvkaqY",
#     "1320_122612_000002_000000-6829_68771_000009_000000-musdb_train_011_stream_1",
#     "3570_5695_000000_000002-8224_274384_000001_000000-musdb_train_062_stream_3",
#     "4970_29093_000002_000000-6829_68771_000009_000000-music-hd-0045",
#     "7021_85628_000002_000000-5683_32879_000007_000000-musdb_train_018_stream_3",
# ]

# MUSIC_SNR_12_FILELIST = [
#     "260_123286_000004_000000-1580_141083_000001_000002-music-fma-wa-0007",
#     "3570_5695_000000_000002-8224_274384_000001_000000-musdb_train_062_stream_3",
#     "4970_29093_000002_000000-5683_32879_000007_000000-musdb_train_075_stream_3",
#     "7021_85628_000002_000000-5683_32879_000007_000000-musdb_train_018_stream_3",
#     "7021_85628_000002_000000-7021_79730_000044_000001-2zo5z1I0CeM",
# ]


# dirs = {
#     "a": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/target/24k",
#     "b": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_12/24k/source",
#     "c": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_12/24k/baseline_iter_492800",
#     "d": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_12/24k/vc_enhanced_data_power_matched_with_noisy_source/vc_complete",
#     "e": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_12/24k/ours_with_new_snr_iter_547200",
# }

# for key in dirs.keys():
#     os.makedirs(os.path.join("music_samples", output_base[key]), exist_ok=True)

# for filename in MUSIC_SNR_12_FILELIST:
#     for key, dir_path in dirs.items():
#         if key == "a":
#             input_file = os.path.join(dir_path, filename.split('-')[1] + ".wav")
#         else:
#             input_file = os.path.join(dir_path, filename + ".wav")
#         output_file = os.path.join("music_samples", output_base[key], "music_snr_12_" + filename + ".wav")

#         if os.path.exists(input_file):
#             audio, sr = sf.read(input_file)
#             sf.write(output_file, audio, sr)
#             print(f"Processed: {output_file}")
#         else:
#             print(f"File not found: {input_file}")


# dirs = {
#     "a": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/target/24k",
#     "b": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_7/24k/source",
#     "c": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_7/24k/baseline_iter_492800",
#     "d": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_7/24k/vc_enhanced_data_power_matched_with_noisy_source/vc_complete",
#     "e": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/music_snr_7/24k/ours_with_new_snr_iter_547200",
# }

# for filename in MUSIC_SNR_7_FILELIST:
#     for key, dir_path in dirs.items():
#         if key == "a":
#             input_file = os.path.join(dir_path, filename.split('-')[1] + ".wav")
#         else:
#             input_file = os.path.join(dir_path, filename + ".wav")
#         output_file = os.path.join("music_samples", output_base[key], "music_snr_7_" + filename + ".wav")

#         if os.path.exists(input_file):
#             audio, sr = sf.read(input_file)
#             sf.write(output_file, audio, sr)
#             print(f"Processed: {output_file}")
#         else:
#             print(f"File not found: {input_file}")

# dirs = {
#     "a": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/target/24k",
#     "b": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_12/24k/source",
#     "c": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_12/24k/baseline_iter_492800",
#     "d": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_12/24k/vc_enhanced_data_power_matched_with_noisy_source/vc_complete",
#     "e": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_12/24k/ours_with_new_snr_iter_547200",
# }

# for key in dirs.keys():
#     os.makedirs(os.path.join("noise_samples", output_base[key]), exist_ok=True)

# for filename in NOISE_SNR_12_FILELIST:
#     for key, dir_path in dirs.items():
#         if key == "a":
#             input_file = os.path.join(dir_path, filename.split('-')[1] + ".wav")
#         else:
#             input_file = os.path.join(dir_path, filename + ".wav")
#         output_file = os.path.join("noise_samples", output_base[key], "noise_snr_12_" + filename + ".wav")

#         if os.path.exists(input_file):
#             audio, sr = sf.read(input_file)
#             sf.write(output_file, audio, sr)
#             print(f"Processed: {output_file}")
#         else:
#             print(f"File not found: {input_file}")


# dirs = {
#     "a": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/target/24k",
#     "b": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_7/24k/source",
#     "c": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_7/24k/baseline_iter_492800",
#     "d": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_7/24k/vc_enhanced_data_power_matched_with_noisy_source/vc_complete",
#     "e": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/noise_snr_7/24k/ours_with_new_snr_iter_547200",
# }

# for filename in NOISE_SNR_7_FILELIST:
#     for key, dir_path in dirs.items():
#         if key == "a":
#             input_file = os.path.join(dir_path, filename.split('-')[1] + ".wav")
#         else:
#             input_file = os.path.join(dir_path, filename + ".wav")
#         output_file = os.path.join("noise_samples", output_base[key], "noise_snr_7_" + filename + ".wav")

#         if os.path.exists(input_file):
#             audio, sr = sf.read(input_file)
#             sf.write(output_file, audio, sr)
#             print(f"Processed: {output_file}")
#         else:
#             print(f"File not found: {input_file}")


CLEAN_FILELIST = [
    "260_123286_000004_000000-4992_41797_000004_000002.wav",
    "260_123286_000004_000000-8224_274384_000001_000000.wav",
    "1320_122612_000002_000000-6829_68771_000009_000000.wav",
    "1320_122612_000002_000000-7021_79730_000044_000001.wav",
    "1320_122612_000005_000001-1580_141083_000001_000002.wav",
    "7021_85628_000002_000000-5683_32879_000007_000000.wav",
    "1320_122612_000005_000001-4507_16021_000021_000003.wav",
    "1320_122612_000002_000000-5683_32879_000007_000000.wav",
    "8463_294828_000013_000000-1580_141083_000001_000002.wav",
    "3570_5695_000000_000000-4992_41797_000004_000002.wav"
]


dirs = {
    "a": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/clean/24k/target",
    "b": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/clean/24k/source",
    "c": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/clean/24k/baseline_iter_492800",
    "d": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/clean/24k/vc_enhanced_data_power_matched_with_source/vc_complete",
    "e": "/home/yihan.liu/lab/voicebox-vc_code/train_script/evaluation/data/ours/clean/24k/ours_with_new_snr_iter_547200",
}

for key in dirs.keys():
    os.makedirs(os.path.join("clean_samples", output_base[key]), exist_ok=True)

for filename in CLEAN_FILELIST:
    for key, dir_path in dirs.items():
        if key == "a":
            input_file = os.path.join(dir_path, filename.split('-')[1])
        elif key == "b":
            input_file = os.path.join(dir_path, filename.split('-')[0] + ".wav")
        else:
            input_file = os.path.join(dir_path, filename)
        output_file = os.path.join("clean_samples", output_base[key], filename)

        if os.path.exists(input_file):
            audio, sr = sf.read(input_file)
            sf.write(output_file, audio, sr)
            print(f"Processed: {output_file}")
        else:
            print(f"File not found: {input_file}")
