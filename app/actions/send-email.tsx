"use server"

export async function sendEmailAction(data: {
  name: string
  email: string
  issue: string
}) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@example.com",
        to: "telvintelvin75@gmail.com",
        replyTo: data.email,
        subject: `New Issue Report from ${data.name}`,
        html: `
          <h2>New Issue Report</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Issue Description:</strong></p>
          <p>${data.issue.replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    if (!response.ok) {
      return { success: false, message: "Failed to send email" }
    }

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, message: "Failed to send email" }
  }
}
