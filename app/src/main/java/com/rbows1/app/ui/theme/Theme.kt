package com.rbows1.app.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable

private val RBOWSColorScheme = darkColorScheme(
    primary = NeonGreen,
    background = MidnightBlue,
    surface = SlateBlue,
    onPrimary = MidnightBlue,
    onBackground = SoftWhite,
    onSurface = SoftWhite
)

@Composable
fun RBOWS1Theme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = RBOWSColorScheme,
        typography = Typography,
        content = content
    )
}
