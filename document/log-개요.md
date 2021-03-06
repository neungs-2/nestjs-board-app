# Log 개요

## **log에 대해서**

- 에러 발생 시 문제 지점을 빠르게 파악하기 위해 log를 살핌
- 개발 시 하나의 기능이 개발 완료되면 관련된 로그를 남기는 코드도 작성
- Node.js에서는 **Winston** 사용
- Nest.js에서는 **logger** 사용 (built-in)

<br>

**_log의 종류_**

- **log**: 중요한 정보의 범용 로깅
- **warning**: 치명적이거나 파괴적이지 **않은** 처리되지 않은 문제
- **Error**: 치명적이거나 파괴적인 처리되지 않은 문제
- **Debug**: 오류 발생시 로직을 디버그하는데 도움이되는 유용한 정보 (개발자용)
- **Verbose**: 응용 프로그램의 동작에 대한 통찰력을 제공하는 정보 (운영자용)
