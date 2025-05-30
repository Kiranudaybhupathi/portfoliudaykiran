<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bhupathi Uday Kiran | Full Stack Developer</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  </head>
  <body class="bg-gray-50 text-gray-800 font-sans leading-relaxed">
    <!-- Header -->
    <header class="bg-white shadow sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">Uday Kiran</h1>
        <nav>
          <ul class="flex space-x-6 text-sm font-semibold">
            <li><a href="#about" class="hover:text-blue-600">About</a></li>
            <li><a href="#projects" class="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" class="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 text-center">
      <img
        src="profile.jpg"
        alt="Bhupathi Uday Kiran"
        class="mx-auto w-32 h-32 rounded-full border-4 border-white shadow-md"
      />
      <h2 class="text-4xl font-bold mt-6">Bhupathi Uday Kiran</h2>
      <p class="text-lg mt-2">Full Stack Developer | MERN & Java | E-commerce Specialist</p>
      <div class="mt-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/uday-kiran-8a9781235/"
          target="_blank"
          class="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 font-medium"
        >LinkedIn</a>
        <a
          href="https://github.com/Kiranudaybhupathi"
          target="_blank"
          class="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 font-medium"
        >GitHub</a>
        <a
          href="mailto:udaykiranbhupathi5@gmail.com"
          class="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 font-medium"
        >Email</a>
      </div>
    </section>

    <!-- About -->
    <section class="max-w-4xl mx-auto px-6 py-12" id="about">
      <h3 class="text-3xl font-semibold mb-6 border-b pb-2 border-blue-600 inline-block">About Me</h3>
      <p class="text-gray-700 text-lg">
        I am a dedicated Full Stack Developer with a strong command of the MERN stack and Java.
        My expertise lies in crafting scalable and responsive e-commerce platforms and web applications
        that offer seamless user experiences. I believe in clean code, strong architecture, and continuous learning.
      </p>
    </section>

    <!-- Projects -->
    <section class="bg-gray-100 py-12" id="projects">
      <div class="max-w-6xl mx-auto px-6">
        <h3 class="text-3xl font-semibold mb-8 text-center text-blue-700">Projects</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h4 class="text-xl font-semibold mb-2">Ecommerce Platform</h4>
            <p class="text-gray-600">
              A complete ecommerce site with cart, user auth, payment integration, and admin features using React, Node.js, MongoDB.
            </p>
            <a
              href="https://github.com/Kiranudaybhupathi"
              target="_blank"
              class="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >GitHub Repo</a>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <h4 class="text-xl font-semibold mb-2">Inventory System</h4>
            <p class="text-gray-600">
              A Java and Swing-based desktop application for managing inventory, billing, and reporting for small businesses.
            </p>
            <a
              href="https://github.com/Kiranudaybhupathi"
              target="_blank"
              class="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >GitHub Repo</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="max-w-4xl mx-auto px-6 py-12" id="contact">
      <h3 class="text-3xl font-semibold mb-6 text-blue-700">Let's Connect</h3>
      <p class="text-gray-700 text-lg mb-4">
        I’m always open to discussing exciting new projects or freelance opportunities. Reach out and let's build something great together.
      </p>
      <a
        href="mailto:udaykiranbhupathi5@gmail.com"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition"
      >
        📧 udaykiranbhupathi5@gmail.com
      </a>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t text-center py-6 text-sm text-gray-500">
      <div class="flex justify-center space-x-6 mb-2">
        <a href="https://linkedin.com/in/uday-kiran-8a9781235" target="_blank"><i class="fab fa-linkedin text-xl hover:text-blue-600"></i></a>
        <a href="https://github.com/Kiranudaybhupathi" target="_blank"><i class="fab fa-github text-xl hover:text-gray-800"></i></a>
        <a href="mailto:udaykiranbhupathi5@gmail.com"><i class="fas fa-envelope text-xl hover:text-red-600"></i></a>
      </div>
      <p>&copy; 2025 Bhupathi Uday Kiran. All rights reserved.</p>
    </footer>
  </body>
</html>
