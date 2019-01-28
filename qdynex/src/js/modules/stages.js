module.exports = (stages) => {
    const arrElemStages = stages.querySelectorAll('.stages_list .stages_elem');
    const stagesPreviewData = stages.querySelector('.stages_top .stages_preview_data');
    const stagesTop = stages.querySelector('.stages_top');
    const stagesContent = stages.querySelector('.stages_top .stages_content');
    const stagesPreviewCount = stages.querySelector('.stages_preview_count');
    const stagesRight = stages.querySelector('.stages_move_right');
    const stagesLeft = stages.querySelector('.stages_move_left');
    const progressLine = stages.querySelector('.stages_line_progress .s_l_p_line');
    const setActive = require('./functions/setActive');
    let startCount = 0, lengthElem = arrElemStages.length, timeout = null, yak = true;
    let lineOne = 100 / lengthElem;

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function moveLine(int) {
        progressLine.style.width = `${lineOne * (int + 1)}%`;
    }

    function setData(elem) {
        stagesContent.innerHTML = elem.querySelector('.stages_elem_content').innerHTML;
        stagesPreviewData.innerHTML = elem.querySelector('.stages_elem_target').innerHTML;
    }

    function changeableContent(elem, int) {
        clearTimeout(timeout);
        stagesTop.classList.add('change');
        timeout = setTimeout(() => {
            setData(elem);
            setActive(arrElemStages, int);
            stagesPreviewCount.innerHTML = `${int + 1}`;
            moveLine(int);
            stagesTop.classList.remove('change');
            yak = true;
        }, 500);
    }

    for (let i = 0; i < lengthElem; i++) {
        arrElemStages[i].addEventListener('click', (even) => {
            even.preventDefault();
            if (startCount !== i && yak) {
                yak = false;
                changeableContent(arrElemStages[i], i);
                startCount = i;
            }
        });
    }

    changeableContent(arrElemStages[startCount], startCount);

    stagesRight.addEventListener('click', (even) => {
        even.preventDefault();
        if (yak) {
            yak = false;
            startCount = lastElem(arrElemStages, startCount, true);
            changeableContent(arrElemStages[startCount], startCount);
        }
    });

    stagesLeft.addEventListener('click', (even) => {
        even.preventDefault();
        if (yak) {
            yak = false;
            startCount = lastElem(arrElemStages, startCount, false);
            changeableContent(arrElemStages[startCount], startCount);
        }
    });
};