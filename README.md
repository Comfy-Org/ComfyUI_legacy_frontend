# ComfyUI_legacy_frontend

[ComfyUI](https://github.com/comfyanonymous/ComfyUI) legacy JS frontend captured on <https://github.com/comfyanonymous/ComfyUI/pull/2666>.
This repo is for users to fall back on in case something goes wrong on [the new frontend](<https://github.com/Comfy-Org/ComfyUI_frontend>).

## How To Use

Add command line argument `--front-end-version Comfy-Org/ComfyUI_legacy_frontend@latest` to your
ComfyUI launch script.

For Windows stand-alone build users, please edit the `run_cpu.bat` / `run_nvidia_gpu.bat` file as following

```bat
.\python_embeded\python.exe -s ComfyUI\main.py --windows-standalone-build --front-end-version Comfy-Org/ComfyUI_legacy_frontend@latest
pause
```
