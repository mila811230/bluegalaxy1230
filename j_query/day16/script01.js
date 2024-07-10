
        // alt 값을 읽어서 이미지 하단에 제목으로 표시하기
        // picBox 구하기
        const picBoxEle = document.querySelector(".picBox");
        // 이미지태그요소 구하기
        const imgEle = document.querySelector(".picBox > img");
        // 이미지 alt 값 구하기
        const altString = imgEle.getAttribute("alt");
        // p 태그 만들기
        const pEle = document.createElement("p");
        // p 태그에 이미지 alt 값 텍스트로 적용하기
        pEle.textContent = altString;
        pEle.setAttribute("style","text-align:center; font-size:30px;");
        // p 태그를 picBox 에 등록하기
        picBoxEle.appendChild(pEle);