import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/user.entity'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email)
    if (user && user.password === password) {
      return user
    }
    return null
  }

  async login(user: User) {
    const payload = { email: user.email, name: user.fullName }
    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}
