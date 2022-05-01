import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // 요청이 컨트롤러로 들어올 때 Dto에 잇는 유효성 조건에 맞게 체크를 해주려면 ValidationPipe를 추가!!!
  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  // 테스트 결과 요청 내부에 user 객체가 들어있지 않음
  @Post('/test')
  test(@Req() req) {
    console.log('req', req);
  }

  // MEMO: 요청 안에 유저 정보(유저 객체)가 들어가게 하는 방법
  // UseGuards 안에 @nestjs/passport에서 가져온 AuthGuard()를 사용하여 넣어줌
  // Guard는 인증을 위한 미들웨어! => API test 시 auth (Bearer)에 토큰값 넣어줘야 함
  @Post('/authTest')
  @UseGuards(AuthGuard())
  // authTest(@Req() req) {
  //   console.log('user', req.user);
  // }

  // Custom Decorator를 사용하여 req.user를 안써도 user 정보만 가져오게 함
  authTest(@GetUser() user: User) {
    console.log('user', user);
  }
}
