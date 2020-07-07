import React from "react"
import Layout from "../../components/layout"
export default () => (
    <Layout>
        <div class="content">
            <p>
                This is an emulator I developed over the summer to learn more
                about how emulation of hardware is achieved. I used a Java
                graphics library coupled with OpenGL to create it.
            </p>

            <p>
                This project was interesting, I learned a bit more about
                computer graphics and how they get rendered onto the screen. I
                was exposed to opcodes and debugging them. Part of this involved
                me opening the game binaries and reading the opcodes manually to
                figure out why my emulator was not processing them correctly.
            </p>

            <p>
                <a href="https://github.com/ngynkvn/chip8">
                    https://github.com/ngynkvn/chip8
                </a>
            </p>
        </div>
    </Layout>
)
