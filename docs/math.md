# 题设重现及部分解决方案推理

## 第一问

**假设检验**是一种在统计学中用来**做决策**的方法，简单来说就是通过数据来判断某个说法是否有道理。

我们可以用一个日常例子来解释：

场景假设：

假设你认为你最喜欢的咖啡店的咖啡每杯都有 200 毫升（这是咖啡店的“ **标称量** ”）。但是有一天，你喝了一杯觉得好像少了，于是你决定做个 **测试** ，看看他们的咖啡是不是真的总是有 200 毫升。

假设检验步骤：

1. **提出假设** ：

* **原假设（H₀）** ：咖啡店的每杯咖啡确实有 200 毫升。
* **备择假设（H₁）** ：咖啡店的每杯咖啡少于 200 毫升。

1. **收集数据** ：
   你每天去买咖啡，并测量出几杯咖啡的实际容量，比如 198 毫升、199 毫升、201 毫升等等。
2. **进行计算** ：
   你拿这些数据和“200 毫升”对比，看看这些数据是不是和 200 毫升差太多了。统计学家通常用一些数学工具来帮你判断这种差异是否显著。
3. **做出决定** ：

* 如果这些数据和 200 毫升非常接近，差得不多，你就可以说：“这些杯子大致都是 200 毫升。” 这意味着 **接受原假设** ，认为咖啡店没有问题。
* 如果数据显示很多杯的咖啡都明显少于 200 毫升，你就可以说：“这家咖啡店的咖啡量确实比 200 毫升少。” 这意味着你 **拒绝原假设** ，采信备择假设，认为咖啡店给的量少了

结论：

假设检验的核心是： **通过数据来判断原来的说法（假设）是否站得住脚** 。如果数据支持这个说法，就接受它；如果不支持，就拒绝它。

假设检验的步骤可以分为以下几个清晰的步骤，用来判断数据是否支持某个假设（通常称为 **原假设** ）。这里是通俗易懂的解释：

### 1. **提出假设**

* **原假设（H₀）** ：这是你要检验的“默认”说法，通常表示“没有差异”或“没有显著效果”。你希望通过数据来检验它是否成立。
* **备择假设（H₁ 或 Hₐ）** ：这是与原假设相对立的说法，通常表示“有差异”或“有显著效果”。

 **例子** ：你认为咖啡店的咖啡量是200毫升。

* 原假设 H0H₀**H**0：每杯咖啡的平均量为 200 毫升。
* 备择假设 H1H₁**H**1：每杯咖啡的平均量**不是**200毫升（可以是更少或更多）。

### 2. **选择显著性水平（α\alpha**α**）**

显著性水平决定了你允许犯错的概率，通常选择  **α=0.05\alpha = 0.05**α**=**0.05**** ，即你愿意承受5%的概率来误判。

* **常见的 α\alpha**α** 值** ：0.05（5%），0.01（1%）。

### 3. **收集数据**

从你关心的群体中 **收集样本** ，并测量出相关的统计数据。样本数据用来帮助判断原假设是否成立。

 **例子** ：你随机购买了几杯咖啡，测量了它们的容量，比如分别是：198 毫升、201 毫升、199 毫升……

### 4. **选择检验方法**

根据你要检验的问题和数据的类型，选择合适的 **假设检验方法** 。常见的检验方法包括：

* **t 检验** ：用于小样本的均值比较。
* **z 检验** ：用于大样本的均值比较。
* **卡方检验** ：用于频率数据的独立性或拟合优度检验。

 **例子** ：如果你想比较样本均值和200毫升的差异，且样本量小，可以选择 **t 检验** 。

### 5. **计算检验统计量**

通过你选择的检验方法，计算一个 **检验统计量** （如 t 值或 z 值），并根据这个统计量决定是否拒绝原假设。

 **例子** ：你通过 t 检验计算出一个 t 值，比如 t = 2.3。

### 6. **计算或查找临界值或 p 值**

* **p 值** ：这是你实际观察到的数据和原假设相符的概率。如果 p 值小于显著性水平 α\alpha**α**，我们认为观察到的结果不太可能发生，因此 **拒绝原假设** 。
* **临界值法** ：可以查表找到检验的临界值（比如 t 表或 z 表），如果计算出的检验统计量超过临界值，拒绝原假设。

 **例子** ：你计算出 p 值为 0.02。因为 p=0.02<α=0.05p = 0.02 < \alpha = 0.05**p**=**0.02**<**α**=**0.05**，所以你拒绝原假设。

### 7. **做出结论**

* 如果 **p 值小于显著性水平 α\alpha**α**** ，我们 **拒绝原假设** ，认为数据提供了足够的证据表明原假设不成立。
* 如果 **p 值大于显著性水平 α\alpha**α**** ，我们 **接受原假设** ，认为数据不足以推翻原假设。

 **例子** ：你拒绝原假设，得出结论：咖啡店的咖啡量不是200毫升，可能偏离了这一数值。

---

### 总结假设检验的七个步骤：

1. 提出原假设 H0H₀**H**0 和备择假设 H1H₁**H**1。
2. 选择显著性水平 α\alpha**α**。
3. 收集样本数据。
4. 选择适当的检验方法。
5. 计算检验统计量。
6. 计算或查找 p 值或临界值。
7. 根据 p 值做出结论，决定是否拒绝原假设。

通过这七个步骤，你可以判断一个数据是否支持你的原假设

在假设检验中，选择合适的检验方法取决于数据的类型、样本量、变量的分布以及你想要检验的假设。常见的假设检验方法有以下几种：

### 1. **t 检验（t-test）**

用于比较均值的检验，特别是当样本量较小（通常小于 30）且总体方差未知时使用。

#### 常见的 t 检验类型：

* **单样本 t 检验** ：用于检验样本均值是否与给定的总体均值有显著差异。
* **独立样本 t 检验** ：用于检验两个独立样本的均值是否显著不同。
* **配对样本 t 检验** ：用于检验配对样本（如同一组人的前后测量）的均值是否显著不同。

#### 计算过程：

 **单样本 t 检验为例** ：

* **假设** ：H0H_0**H**0（原假设）：样本均值等于总体均值。
* **公式** ：
  t=xˉ−μs/nt = \frac{\bar{x} - \mu}{s / \sqrt{n}}**t**=**s**/**n****x**ˉ**−**μ****
* xˉ\bar{x}**x**ˉ 是样本均值。
* μ\mu**μ** 是总体假设的均值。
* ss**s** 是样本标准差。
* nn**n** 是样本数量。
* **步骤** ：

1. 提出原假设 H0H_0**H**0 和备择假设 H1H_1**H**1。
2. 计算样本均值 xˉ\bar{x}**x**ˉ 和标准差 ss**s**。
3. 计算 t 统计量。
4. 查 t 分布表，使用自由度 df=n−1df = n - 1**df**=**n**−**1** 找到临界值，或计算 p 值。
5. 比较 p 值与显著性水平 α\alpha**α**，决定是否拒绝原假设。

#### 例子：

假设你想检验一个样本平均值 xˉ=50\bar{x} = 50**x**ˉ**=**50 是否显著不同于总体均值 μ=52\mu = 52**μ**=**52**，样本标准差 s=5s = 5**s**=**5**，样本数量 n=10n = 10**n**=**10**。

t=50−525/10=−1.264t = \frac{50 - 52}{5 / \sqrt{10}} = -1.264**t**=**5/**10****50**−**52****=**−**1.264查表或计算 p 值，决定是否拒绝 H0H_0**H**0****。

---

### 2. **z 检验（z-test）**

用于比较均值的检验，当样本量较大（通常大于 30）或总体方差已知时使用。

#### 计算过程：

* **假设** ：H0H_0**H**0（原假设）：样本均值等于总体均值。
* **公式** ：
  z=xˉ−μσ/nz = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}}**z**=**σ**/**n****x**ˉ**−**μ****
* xˉ\bar{x}**x**ˉ 是样本均值。
* μ\mu**μ** 是总体假设的均值。
* σ\sigma**σ** 是总体标准差（已知）。
* nn**n** 是样本数量。

#### 例子：

假设你想检验某产品的平均重量 μ=100g\mu = 100g**μ**=**100**g，有一组样本平均值为 xˉ=98g\bar{x} = 98g**x**ˉ**=**98**g**，样本量 n=40n = 40**n**=**40**，已知总体标准差 σ=3g\sigma = 3g**σ**=**3**g。

z=98−1003/40=−4.22z = \frac{98 - 100}{3 / \sqrt{40}} = -4.22**z**=**3/**40****98**−**100****=**−**4.22查 z 分布表或计算 p 值，判断是否拒绝原假设。

---

### 3. **卡方检验（Chi-Square Test）**

用于 **分类数据** ，主要用于检验观察数据是否与期望数据一致（拟合优度检验），或者用于两个分类变量之间的 **独立性检验** 。

#### 计算过程：

* **假设** ：H0H_0**H**0（原假设）：观测频率与期望频率没有显著差异。
* **公式** ：
  χ2=∑(Oi−Ei)2Ei\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}**χ**2**=**∑**E**i****(**O**i−**E**i)**2**
* OiO_i**O**i 是观测频率。
* EiE_i**E**i 是期望频率。

#### 例子：

假设你想检验某商店顾客的性别分布是否符合总体分布（50%男性，50%女性）。你观察到 60 个男性和 40 个女性，而期望是 50 男性、50 女性。计算卡方值：

χ2=(60−50)250+(40−50)250=4\chi^2 = \frac{(60 - 50)^2}{50} + \frac{(40 - 50)^2}{50} = 4**χ**2**=**50**(**60**−**50**)**2****+**50**(**40**−**50**)**2****=**4查卡方分布表，使用自由度 1 和显著性水平 α=0.05\alpha = 0.05**α**=**0.05**，临界值为 3.84，因 4>3.844 > 3.84**4**>**3.84**，我们拒绝原假设，认为性别分布与预期不同。

为了为企业设计最优的抽样检测方案，我们可以运用**统计学中的假设检验**方法，具体来说是使用**二项分布**进行检验。以下是详细的步骤和计算方法：

### 问题 1: 设计检测方案

企业希望根据供应商声称的零配件次品率来进行抽样检测。假设供应商声称的次品率（即标称值）为 \( p_0 = 0.10 \)。

我们需要确定在以下两种情境下的抽样检测方案：

1. **在 95%的信度下认定零配件次品率超过标称值，则拒收这批零配件。**
2. **在 90%的信度下认定零配件次品率不超过标称值，则接收这批零配件。**

### 方法概述

1. **设定假设**：

   - **零假设（\( H_0 \)）**: 次品率 \( p \le 0.10 \)
   - **备择假设（\( H_1 \)）**: 次品率 \( p > 0.10 \)
2. **确定抽样方案**：

   - 设定样本容量 \( n \) 和最大允许的次品数 \( k \)。
   - 计算在给定的显著性水平和信度下，这个方案能否满足要求。

### 1. 在 95%的信度下认定次品率超过标称值

- **目标**：在 95% 的信度下，如果次品率确实超过 10%，我们希望能检测到这一点并拒绝该批次。
- **显著性水平**：\(\alpha = 0.05\)。
- **样本容量**：计算样本容量 \( n \) 和容许的次品数 \( k \) 使得在次品率超过 10% 的情况下，拒绝 \( H_0 \) 的概率达到 95%。

#### 计算步骤：

1. **确定容许的最大次品数 \( k \)**：

   - 在 95% 信度下，计算使得次品率 \( p = 0.10 \) 时，容许的最大次品数 \( k \) 可以使用二项分布的临界值。我们可以使用统计软件或表格来找出。

   使用 **R** 代码计算：

   ```R
   qbinom(0.95, size=n, prob=0.10)
   ```

   使用 **Python** 代码计算：

   ```python
   from scipy.stats import binom

   # 计算容许的最大次品数
   n = 100  # 假设样本容量为100
   k = binom.ppf(0.95, n, 0.10)
   print(f"允许的最大次品数 k: {k}")
   ```
2. **计算样本容量 \( n \)**：

   - 确定样本容量 \( n \) 使得在 \( p = 0.10 \) 时，\( P(X \le k) \) 的概率大于 95%。
   - 这可以通过调整 \( n \) 并计算 \( k \) 的值来进行。

   使用 **R** 代码计算：

   ```R
   n = 20  # 示例
   k = qbinom(0.95, size=n, prob=0.10)
   ```

   使用 **Python** 代码计算：

   ```python
   from scipy.stats import binom

   n = 20  # 示例
   k = binom.ppf(0.95, n, 0.10)
   print(f"允许的最大次品数 k: {k}")
   ```

   **示例结果**（假设样本容量为 20）：

   - \( k = 3 \)（即如果在20个样本中发现超过3个次品，则拒收）。

### 2. 在 90%的信度下认定次品率不超过标称值

- **目标**：在 90% 的信度下，如果次品率不超过 10%，我们希望能检测到并接收该批次。
- **显著性水平**：\(\alpha = 0.10\)。
- **样本容量**：计算样本容量 \( n \) 和最大次品数 \( k \) 使得在次品率不超过 10% 的情况下，接受 \( H_0 \) 的概率达到 90%。

#### 计算步骤：

1. **确定最大次品数 \( k \)**：

   - 在 90% 信度下，计算使得次品率 \( p = 0.10 \) 时，最大允许的次品数 \( k \) 可以使用二项分布的临界值。

   使用 **R** 代码计算：

   ```R
   qbinom(0.90, size=n, prob=0.10)
   ```

   使用 **Python** 代码计算：

   ```python
   from scipy.stats import binom

   # 计算容许的最大次品数
   n = 100  # 假设样本容量为100
   k = binom.ppf(0.90, n, 0.10)
   print(f"允许的最大次品数 k: {k}")
   ```
2. **计算样本容量 \( n \)**：

   - 确定样本容量 \( n \) 使得在 \( p = 0.10 \) 时，\( P(X \le k) \) 的概率大于 90%。
   - 这可以通过调整 \( n \) 并计算 \( k \) 的值来进行。

   使用 **R** 代码计算：

   ```R
   n = 20  # 示例
   k = qbinom(0.90, size=n, prob=0.10)
   ```

   使用 **Python** 代码计算：

   ```python
   from scipy.stats import binom

   n = 20  # 示例
   k = binom.ppf(0.90, n, 0.10)
   print(f"允许的最大次品数 k: {k}")
   ```

   **示例结果**（假设样本容量为 20）：

   - \( k = 1 \)（即如果在20个样本中发现超过1个次品，则不接收）。

### 总结

1. **95%信度下拒收方案**：

   - 选择合适的样本容量 \( n \) 和最大次品数 \( k \)，例如：样本容量为 20，最大次品数 \( k = 3 \)。
2. **90%信度下接收方案**：

   - 选择合适的样本容量 \( n \) 和最大次品数 \( k \)，例如：样本容量为 20，最大次品数 \( k = 1 \)。

具体的样本容量和最大次品数 \( k \) 会根据实际应用中选择的 \( n \) 和所需的准确度而有所不同。上述示例仅供参考，实际计算应使用适当的统计工具进行精确计算。


## 第二问

要为这个问题制定合理的决策方案，我们可以将企业的生产过程进行分解，并根据不同的次品率、成本、利润以及检测和拆解的成本来构建模型。这个模型将帮助企业在每个阶段作出最优决策，从而最小化次品的产生和处理成本，最大化企业的效益。

### 决策步骤与思路：

1. **零配件检测决策** ：

* 首先判断零配件 1 和零配件 2 的次品率。如果次品率较高，并且检测成本较低，通常可以选择对这两种零配件进行检测，以避免次品进入装配环节。如果次品率较低且检测成本较高，可以考虑不检测直接装配。

1. **成品检测决策** ：

* 对成品是否进行检测取决于成品的次品率和市场接受不合格品的风险。如果次品率高并且不合格品流入市场会导致企业的信誉损失、售后成本高，则应选择对成品进行检测。如果次品率较低，可以考虑不检测。

1. **不合格品拆解决策** ：

* 对不合格的成品是否拆解，主要看拆解的成本与重复使用零配件所带来的收益。若拆解后的零配件能再次装配，且拆解成本低于直接丢弃的损失，则应选择拆解。否则，可以直接丢弃不合格成品。

1. **用户退货处理决策** ：

* 企业如果遇到用户购买不合格品而退货，通常会无条件予以调换。对退回的不合格成品，可考虑重复执行前面步骤的拆解和再利用，减少浪费。

### 决策的依据与指标：

每一个决策的制定都可以通过对以下几个核心指标的分析来得出最优解：

* **次品率（Defect Rate）** ：零配件及成品的次品率直接影响是否检测。
* **检测成本** ：每一次检测的成本，包括人工成本和设备成本。
* **拆解成本** ：成品拆解的费用。
* **重组价值** ：拆解后的零配件重新利用的价值。
* **售后服务成本** ：售后换货及物流的费用。
* **企业信誉损失** ：次品进入市场对企业品牌的潜在负面影响。

### 表 1 决策方案示例：

| 阶段           | 决策             | 依据与指标                        |
| -------------- | ---------------- | --------------------------------- |
| 零配件检测     | 零配件 1：检测   | 零配件 1 的次品率高、检测成本较低 |
|                | 零配件 2：不检测 | 零配件 2 的次品率低、检测成本高   |
| 成品检测       | 检测             | 成品次品率高、市场不接受不合格品  |
| 拆解不合格成品 | 拆解             | 拆解成本低于直接丢弃的损失        |
| 用户退货处理   | 拆解             | 退货后重复使用可降低材料浪费      |

### 计算过程与结果：

为了得出具体的数字结果，建议构建一个成本收益模型，通过设置参数（如检测成本、次品率、拆解成本、售后成本等）来模拟不同方案下的成本和收益，从而得出最优解。

如果需要更具体的模型和计算方式，可以提供更详细的次品率、检测和拆解成本数据，我可以帮助设计更精确的数学模型或决策树。

### 决策树

**决策树**是一种常用于决策分析和机器学习中的图形化工具。它以树状结构表示决策过程，其中每个节点代表一个决策或条件，每个分支代表不同的选择或结果，最终的叶节点则代表决策的结果或结论。

决策树特别适合用于解决需要在多个步骤中进行选择的问题。它可以帮助我们清晰地展示在每个决策点上可能的选择，以及这些选择可能带来的结果。

### 决策树的基本结构：

1. **根节点** （Root Node）：这是决策树的起点，通常表示问题的初始状态或需要做出的第一个决策。
2. **内部节点** （Internal Node）：每个内部节点代表一个条件或决策。根据条件的不同，内部节点将分成多个分支。
3. **分支** （Branch）：分支表示不同的选择或决策路径。
4. **叶节点** （Leaf Node）：叶节点代表最终结果或结论。

### 创建决策树的步骤：

1. **定义问题** ：首先，明确需要解决的决策问题。例如，在生产过程中，你要决定是否对零配件或成品进行检测、是否对不合格品进行拆解等。
2. **识别决策点** ：找出问题中的关键决策点。这些决策点是你需要考虑的条件或选择。例如：

* 是否检测零配件 1？
* 是否检测零配件 2？
* 是否检测成品？
* 是否拆解不合格成品？

1. **定义可能的选择** ：为每个决策点确定可能的选择。通常，选择是“是”或“否”这种二元的，也可以有更多选项。例如：

* 是否检测零配件 1：检测 / 不检测
* 是否拆解不合格成品：拆解 / 丢弃

1. **估算结果** ：为每个选择的结果分支定义可能的结果。这些结果可以是：

* 成本（例如检测成本、拆解成本、物流成本）
* 风险（例如不合格品进入市场的风险）
* 利润（成品销售的收入）

1. **构建决策树** ：根据决策点和选择，逐步创建决策树，使用条件或问题来构建分支。
2. **计算各路径的价值** ：对不同的路径进行分析，计算成本和收益，找到总成本最低或收益最高的路径。

### 示例：生产过程中的决策树

假设你要为零配件检测和成品检测建立决策树。

1. **根节点** ：是否检测零配件 1？

* 如果“是”，则进入下一步：是否检测零配件 2？
* 如果“否”，直接进入成品装配环节。

1. **内部节点** ：是否检测零配件 2？

* 如果“是”，则进入成品装配环节。
* 如果“否”，则直接进入装配环节。

1. **内部节点** ：是否检测成品？

* 如果“是”，则只将检测合格的成品进入市场。
* 如果“否”，直接进入市场，但可能产生退货。

1. **叶节点** ：结果是成本和收益分析。例如：

* 检测零配件、成品的总成本是多少？不检测的损失是多少？

### 决策树的可视化

可以使用 Python 的 `sklearn` 或者 `graphviz` 库来创建和可视化决策树。示例代码如下：

```python
from sklearn import tree
import matplotlib.pyplot as plt

# 定义决策特征和对应的结果
features = [[1, 1], [1, 0], [0, 1], [0, 0]]  # 是否检测零配件1，是否检测零配件2
labels = [1, 0, 0, 1]  # 对应的决策结果 (1: 成本低, 0: 成本高)

# 创建决策树模型
clf = tree.DecisionTreeClassifier()
clf = clf.fit(features, labels)

# 可视化决策树
plt.figure(figsize=(10, 8))
tree.plot_tree(clf, feature_names=['零配件1', '零配件2'], class_names=['成本高', '成本低'], filled=True)
plt.show()
```

这个简单的决策树示例说明了如何通过不同的决策点来决定生产流程中每一步的选择。


## 最终解决

经过不懈努力终于是搞出了程序，不过是最简单的暴力枚举


### 问题一第一问

```python
import numpy as np 
from sympy import sqrt,solve
import pandas as pd
import math
import matplotlib.pyplot as plt
from sympy.abc import x,y
pd.set_option('display.max_rows', None) # 展示所有行
pd.set_option('display.max_columns', None) # 展示所有列

__p1__ = 0.1
__res__ = 1.64 #由信度计算得 0.05
__min_n__ = 99999
p0s = []
ns = []
__b__ = []
#枚举p0
for __p0__ in np.arange(0.01, 0.1, 0.01):
  result = solve([(x - y * __p0__) / sqrt(y*__p0__ * (1 - __p0__))-__res__,
                  -((x - y * __p1__) / sqrt(y*__p1__ * (1 - __p1__)))-__res__ ],
                 [x,y])
  __b__.append(result[0][0])
  ns.append(result[0][1])
  p0s.append(__p0__) 
#构建二维表
df = pd.DataFrame({'n':ns,'p':p0s,'b':__b__},index=p0s)
df.to_excel('D:\\quest_one_1.xlsx', sheet_name='2024B1', index=True)
print(df)
#求导
dn_dp = np.gradient(ns, p0s)
diffs = []
print('数值导数为',dn_dp)

#计算绝对值
for i in range(0,len(dn_dp)-1):
    j = i + 1 
    diff = math.fabs(dn_dp[j] - dn_dp[i])
    diffs.append(diff)
print('绝对值',diffs) 
dn_dp_two = np.gradient(dn_dp, p0s)
print('二阶导数为',dn_dp_two)
dn_dp_three = np.gradient(dn_dp_two, p0s)
print('三阶导数为',dn_dp_three)
  
plt.plot(p0s,ns)
plt.xlabel('p')  # x 轴标签
plt.ylabel('n')  # y 轴标签
plt.grid(True)
plt.show()
```



### 问题一第二问

```python
import numpy as np 
import math 
from sympy import sqrt,solve
import matplotlib.pyplot as plt
import pandas as pd
from sympy.abc import x,y
pd.set_option('display.max_rows', None) # 展示所有行
pd.set_option('display.max_columns', None) # 展示所有列

__res__ = 1.28 #由信度计算得
__min_n__ = 99999
__p0__ = 0.1
p1s = []
ns = []
__b__ = []
for __p1__ in np.arange(0.9, 0.1, -0.01): 
  result = solve([(x - y * __p0__) / sqrt(y*__p0__ * (1 - __p0__))-__res__,
                  -((x - y * __p1__) / sqrt(y*__p1__ * (1 - __p1__)))-__res__ ],
                 [x,y])
  ns.append(result[0][1])
  __b__.append(result[0][0])
  p1s.append(__p1__)

#构建二维表
df = pd.DataFrame({'n':ns,'p':p1s,'b':__b__},index=p1s)
# df.to_excel('D:\\question_one_2.xlsx', sheet_name='2024B2', index=True)
print(df)

dn_dp = np.gradient(ns, p1s)
diffs = []
print('数值导数为',dn_dp)
for i in range(0,len(dn_dp)-1):
    j = i + 1 
    diff = math.fabs(dn_dp[j] - dn_dp[i])
    diffs.append(diff)

print('绝对值',diffs) 
dn_dp_two = np.gradient(dn_dp, p1s)
print('二阶导数为',dn_dp_two)
dn_dp_three = np.gradient(dn_dp_two, p1s)
print('三阶导数为',dn_dp_three)
  
plt.plot(p1s,ns)
# 4. 添加标签和标题
plt.xlabel('p')  # x 轴标签
plt.ylabel('n')  # y 轴标签
plt.grid(True)
plt.show()
```


### 问题二

```python
import pandas as pd
import numpy as np
from decimal import Decimal, getcontext
import random
import itertools
# 设置精度
getcontext().prec = 10  # 设置全局精度
#定义常量
SALES = 56  #成品的市场售价
PRICE_A = 4 #零件1和2的单价
PRICE_B = 18
COST = 6  #装配成本
#结果
results = []
  
def init():
  #零件
  DATA = {'A':[
    [0.1,PRICE_A,2],[0.2,PRICE_A,2],[0.1,PRICE_A,2],[0.2,PRICE_A,1],[0.1,4,8],[0.05,PRICE_A,2]
  ],'B':[
    [0.1,PRICE_B,3],[0.2,PRICE_B,3],[0.1,PRICE_B,3],[0.2,PRICE_B,1],[0.2,PRICE_B,1],[0.05,PRICE_B,3]
  ]}
  #成品
  PRODUCTS = [[0.1,COST,3,SALES],[0.2,COST,3,SALES],[0.1,COST,3,SALES],[0.2,COST,2,SALES],[0.1,COST,2,SALES],[0.05,COST,3,SALES]]
  #不合格成品
  BELOWS = [[6,5],[6,5],[30,5],[30,5],[10,5],[10,40]]
  DATA_COL = ['次品率','购买单价','检测成本']
  PRODUCTS_COL = ['次品率','装配成本','检测成本','市场售价']
  BELOWS_COL = ['调换损失','拆解费用']
  return {
    'MODS_A':pd.DataFrame(data=DATA['A'],columns=DATA_COL),
    'MODS_B':pd.DataFrame(data=DATA['B'],columns=DATA_COL),
    'PRODUCTS':pd.DataFrame(data=PRODUCTS,columns=PRODUCTS_COL),
    'BELOWS':pd.DataFrame(BELOWS,columns=BELOWS_COL)
  }
  
#计算实际成品率和实际次品率
# x1、x2为决策，data为零件数据 products为成品数据 i为哪个零件取A或B j为第几种情况
def ActualYield(x1, x2, dataA, dataB, products, j):
    # 使用 Decimal 进行精度控制
    actual = {'实际次品率': None, '实际成品率': None}
  
    #决策
    if x1 == 1 and x2 == 1:
        actual['实际成品率'] = Decimal(1) -Decimal(products['次品率'][j])
    if x1 == 0 and x2 == 1:
        actual['实际成品率'] = (Decimal(1) - Decimal(dataA['次品率'][j])) * Decimal(1) * (Decimal(1) - Decimal(products['次品率'][j]))
    if x1 == 1 and x2 == 0:
        actual['实际成品率'] = Decimal(1) * (Decimal(1) - Decimal(dataB['次品率'][j])) * (Decimal(1) - Decimal(products['次品率'][j]))
    if x1 == 0 and x2 == 0:
        actual['实际成品率'] = (Decimal(1) - Decimal(dataA['次品率'][j])) * (Decimal(1) - Decimal(dataB['次品率'][j])) * (Decimal(1) - Decimal(products['次品率'][j]))
  
    # 计算实际次品率
    actual['实际次品率'] = Decimal(1) - actual['实际成品率']
    return actual

#计算零件检测损失 purchase:购买单价 defective:次品率 cost检测成本
def CalculatingPartLoss(data,j):
  purchase,defective,cost = data['购买单价'][j],data['次品率'][j],data['检测成本'][j]
  return purchase * Decimal(defective) + cost

#cost检测成本 __MODS_DISMANTLE__决策变量是否要拆解 below不合格品
# dismantle拆解费用 x1 x2分别是两个零件是否检测 testing_cost检测费用 rate是实际次品率
def CalculateTheLossOfFinishedProductInspection(data,below,j,choice,x1,x2,testing_cost,rate):
  inspection = 0
  cost,dismantle = data['检测成本'][j],below['拆解费用'][j]
  #在检测中 如果检测出次品 做出决策 判断是否要拆
  __MODS_DISMANTLE_AFTER__ = choice
  #拆
  if __MODS_DISMANTLE_AFTER__ == 1:
    print('是否拆解决策->如果检测不合格(即次品)拆解')
    inspection = cost + (rate * (dismantle + COST + x1 * testing_cost[0] + x2 * testing_cost[1]) )
  #不拆
  else:
    print('是否拆解决策->如果检测出次品不拆解(直接丢弃)')
    inspection = cost + rate * (PRICE_A + PRICE_B + COST + dismantle + x1 * testing_cost[0] + x2 * testing_cost[1]) 
  return inspection,__MODS_DISMANTLE_AFTER__

#不检测
#below 不合格成品
def CalculateTheLossOfFinishedProductInspectionWithout(below,j,x1,x2,choice,testing_cost,rate):
  inspection = 0
  change,dismantle = below['调换损失'][j], below['拆解费用'][j]
  #做出决策
  __MODS_DISMANTLE_BACK__ = choice
  #拆
  if __MODS_DISMANTLE_BACK__ == 1:
    print('是否拆解决策->市场调回的不合格品拆解')
    inspection = change * rate + __MODS_DISMANTLE_BACK__ * (dismantle + COST  + x1 * testing_cost[0] + x2 * testing_cost[1]) * rate
  #不拆
  else:
    print('是否拆解决策->市场调回的不合格品不拆解(直接丢弃)')
    inspection = change * rate + rate * (PRICE_A + PRICE_B + COST + x1 * testing_cost[0] + x2 * testing_cost[1])
  return inspection,__MODS_DISMANTLE_BACK__

#笛卡尔积
def IterTools():
  # 枚举五个变量，每个变量的取值是 0 或 1
  variables = [0, 1]
  all_combinations = list(itertools.product(variables, repeat=4))
  return all_combinations
   
   
   
def Decision(__MODS_A__,__MODS_B__,__MODS_PRODUCTS__,results):
  # 产生决策
  iter = IterTools()
  MODS_A = init()['MODS_A']
  MODS_B = init()['MODS_B']
  PRODUCTS = init()['PRODUCTS']
  BELOWS = init()['BELOWS']
  
  # 遍历六种情况 
  for j in range(0,6):
      # 利润
      PROFIT = [0,0,0,0,0,0] 
      print('******第一种情况******')
      # 每种情况不断循环决策 从笛卡尔积中拿出来一种决策
      for making_choice in iter:
        print('决策数:',making_choice)
        #零件做出决策
        decisionA = making_choice[0] 
        decisionB = making_choice[1]
        print('---零件检测决策---')
        res = ActualYield(decisionA,decisionB,dataA=MODS_A,dataB=MODS_B,products=PRODUCTS,j=j)
        #检测费用
        testing_cost = [0,0]
        print('零件检测决策-> 零件A:',__MODS_A__[decisionA],',','零件B:',__MODS_B__[decisionB],',','决策结果产出的实际次品率:',res['实际次品率'])
        #决策后，根据decisionA 和 decisionB 来计算损失
        if __MODS_A__[decisionA] == 1 and __MODS_B__[decisionB] == 0:
          testing_cost[0] = CalculatingPartLoss(MODS_A,j) #
        elif __MODS_A__[decisionA] == 0 and __MODS_B__[decisionB] == 1:
          testing_cost[1] = CalculatingPartLoss(MODS_B,j) #检测B但是不检测A
        elif __MODS_A__[decisionA] == 1 and __MODS_B__[decisionB] == 1:
          testing_cost[0] = CalculatingPartLoss(MODS_A,j) 
          testing_cost[1] = CalculatingPartLoss(MODS_B,j)
        else:
          testing_cost[0] = 0
          testing_cost[1] = 0
        print('该决策下的检测费用为:',testing_cost[0]+testing_cost[1]) #检测费用
      
        #成品做出决策
        print('---成品检测决策---')
        decisionProducts = making_choice[2]
        finished_product_inspection = 0
        #如果成品检测
        if __MODS_PRODUCTS__[decisionProducts] == 1:
          #计算成品检测损失
          print('---是否拆解决策---')
          finished_product_inspection,after = CalculateTheLossOfFinishedProductInspection(PRODUCTS,BELOWS,
                                                      j=j,choice=making_choice[3],
                                                      x1=__MODS_A__[decisionA],x2=__MODS_B__[decisionB],
                                                      testing_cost=testing_cost,rate=res['实际次品率'])
          print('成品检测决策->成品检测')
        #不检测
        else:
          print('成品检测决策->成品不检测')
        
          finished_product_inspection,back = CalculateTheLossOfFinishedProductInspectionWithout(BELOWS,j
                                                                                          ,x1=__MODS_A__[decisionA],
                                                                                          x2=__MODS_B__[decisionB],
                                                                                          choice=making_choice[3],
                                                                                          testing_cost=testing_cost,
                                                                                          rate=res['实际次品率'])
        print('成品检测损失费用为:',finished_product_inspection)
        #计算利润
        CONST = SALES - (PRICE_A + PRICE_B + COST) 
        TIME_PROFIT = CONST - (testing_cost[0]+testing_cost[1]) - finished_product_inspection
        #保存结果
        results.append([f'情况{j+1}',{'决策数':making_choice,'利润':TIME_PROFIT}])
      
        print('第一种情况下该道利润为:',TIME_PROFIT)
        PROFIT[j] = max(PROFIT[j],TIME_PROFIT)
        print('第一种情况最大利润为:',PROFIT[j])
        print('===做出的决策===')
        #保存该次做出的决策
        print('1.零件决策:','零件A:',__MODS_A__[decisionA],'零件B',__MODS_B__[decisionB])
        print('2.成品检验决策:',__MODS_PRODUCTS__[decisionProducts])
        if __MODS_PRODUCTS__[decisionProducts] == 1:
          print('3.如果成品检验下，检测出次品，拆与不拆的决策:',after)
        else:
          print('3.如果成品不检验下，市场发现次品调回后，拆与不拆的决策:',back)
      
        print('\n')
      print('第',j,'种情况下最大利润:',PROFIT[j])
      print('******第',j,'种情况结束******')
      print('\n')

if __name__ == '__main__':
  #开始随机决策
  MODS_A = init()['MODS_A']
  #定义决策变量
  __MODS_A__ = (0,1)  #零件12是否检测
  __MODS_B__ = (0,1)
  __MODS_PRODUCTS__ = (0,1) #成品是否检验
  Decision(__MODS_A__,__MODS_B__,__MODS_PRODUCTS__,results)
  # print(results)
  df = pd.DataFrame(results,columns=['情况','决策情况'])
  df.to_excel('D:\\results.xlsx', sheet_name='利润和决策数', index=True)
```


### 问题三

```python
import itertools
from decimal import Decimal, getcontext
import pandas as pd
import numpy as np
from functools import reduce
getcontext().prec = 10  # 设置全局精度
# inspection_cost 检测成本
# purchase_cost 购买单价
# defective_rate 次品率
# assembly_cost 装配成品
# dismantling_cost 拆解费用
# market_price 市场售价
# exchange_loss 调换损失
PARTS = [
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 2, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 8, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 12, 'inspection_cost': 2},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 2, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 8, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 12, 'inspection_cost': 2},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 8, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 12, 'inspection_cost': 2}
]

SEMIFINISHED_PRODUCTS = [
    {'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 4, 'dismantling_cost': 6},
    {'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 4, 'dismantling_cost': 6},
    {'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 4, 'dismantling_cost': 6}
]

FINISHED_PRODUCT = {
    'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 6, 'dismantling_cost': 10,
    'market_price': 200, 'exchange_loss': 40
}



# 计算利润 parts_decisions是决策变量 如(1,1,1) 代表 三个零件全部检测 第j个半成品 

# 零件的检测会影响半成品的成品率
#                             8是第一个半成品是否检测  10是第二个半成品是否检测  12是第三个产品是否检测  14是成品是否检测

#                              0 1 2 3 4 5 6 7   8 9 10 11  12 13  14 15
# 用一个hash数组 来存储状态 例如 0 1 0 0 1 0 0 0   1 1  1 1    0 0    1 0
# decision[0~3) -> 计算出第一个产品的次品率 保存在hash[0]中 根据 decision[step,step+len(decision)]) 来算出一个半成品的检测损失 保存在 hash[j]中 
# j取1 2 3
# 如果 8 ,10, 12 为 0 则 9 11 13 无效 即不决策是否拆解
# 否则 要根据 decision[8] decision[10] decision[12] 来计算成品的检测损失 根据hash[j] j=1,2,3 来计算 第j个半成品的次品率 保存在 hash[j++]中
# 根据 hash[j = 4,5,6]来计算成品的检测损失 保存在 hash[j++]
# 成品不检测会有调回拆解费用



# parts_decisions 当前决策
def calculate_profit(parts_decisions):
    print('当前的决策为:',parts_decisions)

    # 利润
    PROFIT = 0
    # 零件购买成本花费
    total_costs = []
  
  
    decision = parts_decisions # 当前决策
    # hash = [None] * len(parts_decisions)
    hash = {}
    ass_defective_rates = [Decimal(1),Decimal(1),Decimal(1)] # 三个半成品次品率
    ass_access_rates = [Decimal(1),Decimal(1),Decimal(1)] # 三个半成品成品率
  
    part_testing_cost = [0,0,0] # 零件检测损失
    ass_testing_cost = [] # 半成品检测损失
    finish_testing_cost = [] # 成品检测损失
  
    # 汇总
    res_part_testing_cost = 0
    res_ass_testing_cost = 0
    res_finish_testing_cost = 0
  
    finish_defective_rates = Decimal(1) # 成品的次品率
    finish_access_rates = Decimal(1)     # 成品的成品率
    step = 0
    counter = 0 
  
    # 检测成本
    PART_COST = [0,0,0]
    ASS_COST = [0,0,0]
  
    # 零件成固定本
    FIXED = 0
    for m in PARTS:
        FIXED += m['purchase_cost']
  
    print('===1.开始对零件进行检测===')
    # 对零件的检测
    while step < len(decision):
        if step >= 8:
            break
        # 前两个半成品
        else:
            if step < 6:
                cost = 0
                # 遍历某个半成品的每一位 如 0 0 1 是 组成一个半成品 他的每一位
                for choice in range( step , step + 3):
                  
                    # 计算固定购买成本 每一组是一个半成品
                    cost += Decimal(PARTS[choice]['purchase_cost']) 
                  
                    # 零件如果不检测
                    if decision[choice] == 0 :
                        print('零件不检测')
                        ass_access_rates[counter] *= (Decimal(1) - Decimal(PARTS[choice]['defective_rate']))
                      
                    # 零件如果检测
                    else:
                        print('零件检测')
                        # 检测成本
                        PART_COST[counter] += PARTS[choice]['inspection_cost']
                        # 零件检测损失
                        part_testing_cost[counter] += (Decimal(PARTS[choice]['inspection_cost']) + PARTS[choice]['defective_rate'] * Decimal(PARTS[choice]['purchase_cost']))
                        print('零件检测损失:',part_testing_cost)
                        ass_access_rates[counter] *= Decimal(1)
              
              
                # 半成品也有可能是次品
                ass_access_rates[counter] *= (Decimal(1) - SEMIFINISHED_PRODUCTS[counter]['defective_rate'])
              
                # 计算次品率
                ass_defective_rates[counter] = Decimal(1) - ass_access_rates[counter]
              
                # 添加购买成本
                total_costs.append(cost)
                step += 3  
                counter += 1
          
            #最后一个半成品  
            else:
                cost = 0
                # 遍历某个半成品的每一位
              
                for choice in range( step , step + 2):
                    # 计算固定成本
                    cost += Decimal(PARTS[choice]['inspection_cost'])
                  
                    # 如果不检测 
                    if decision[choice] == 0 :
                        print('零件不检测')
                        ass_access_rates[counter] *= (Decimal(1) - Decimal(PARTS[choice]['defective_rate']))
                    # 如果检测
                    else:
                        print('零件检测')
                        # 计算检测成本
                        PART_COST[counter] += PARTS[choice]['inspection_cost']
                      
                        # 计算检测损失
                        part_testing_cost[counter] += (Decimal(PARTS[choice]['inspection_cost']) + PARTS[choice]['defective_rate'] * Decimal(PARTS[choice]['purchase_cost']))
                        ass_access_rates[counter] *= Decimal(1)
                        print('零件检测损失:',part_testing_cost)
                      
                  
                ass_access_rates[counter] *= (Decimal(1) - SEMIFINISHED_PRODUCTS[counter]['defective_rate'])
                ass_defective_rates[counter] = Decimal(1) - ass_access_rates[counter]    # 计算次品率
              
                #添加购买成本
                total_costs.append(cost)
                step += 2
                counter += 1
       
    # 计算总的零件检测成本     
    for part_testing_cost_item in part_testing_cost:
        res_part_testing_cost += part_testing_cost_item     
  
  
    # 对半成品 1 2 3 分别进行 检测拆解的决策: step = 8  counter = 3 
    print('step=',step,'counter=',counter)
    print('===2.开始对半成品检测===')
    counter = 0
  
    # 开始对半成品是否检测  并且计算成品的成品率 检测成本
    while step <= 12:
        # 半成品1 要检测 有检测损失  
        if decision[step] == 1:
          
            # 如果半成品检测， 成品率就是产品本身成品率
            finish_access_rates = Decimal(1) - FINISHED_PRODUCT['defective_rate']
          
            print('半成品检测')
            ASS_COST[counter] += SEMIFINISHED_PRODUCTS[counter]['inspection_cost']   
          
            # 如果拆解 有拆解费用
            if decision[step + 1] == 1:
                print('半成品拆解')
              
                # p = vi + f(x1,x2,x3) + (ui + ni + sum(xi * li) )
                res = SEMIFINISHED_PRODUCTS[counter]['inspection_cost'] + ass_defective_rates[counter] * (SEMIFINISHED_PRODUCTS[counter]['assembly_cost'] + SEMIFINISHED_PRODUCTS[counter]['dismantling_cost'] + PART_COST[counter]) 
                print('半成品的检测损失:',res)
                # 半成品的检测损失
                ass_testing_cost.append(res)
              
            # 如果不拆解
            else:
                print('半成品不拆解')
                  
                  
                # total_costs 第i 个半成品的零件成本  
                res = SEMIFINISHED_PRODUCTS[counter]['inspection_cost'] + ass_defective_rates[counter] * (total_costs[counter] + PART_COST[counter] ) 
                print('半成品的检测损失:',res)
                ass_testing_cost.append(res)
          
        # 如果不检测 无拆解费用 无检测费用 但是要计算成品的次品率
        else:
            finish_access_rates *= ass_access_rates[counter]
             
            finish_access_rates *= Decimal(1) - FINISHED_PRODUCT['defective_rate']  
            print('该半成品不检测') 
          
        step += 2
        counter += 1
 
      
  
    # 计算总的半成品检测损失
    for ass_testing_cost_item in ass_testing_cost:
        res_ass_testing_cost += ass_testing_cost_item
  
  
  
  
    print('===开始对成品进行检测===')
    # step = 12
    print('step=',step)

    # 成品检测 乘以 1 算检测损失
    if decision[step] == 1:
        print('成品检测')
      
        # 如果拆
        if decision[step+1] == 1:
            print('成品检测后 拆掉')
            finish_testing_cost = 6 + (Decimal(1) - finish_access_rates) * (8 + 10 + 6 * 3 + 8 * 3  + sum(ASS_COST) + sum(PART_COST))
            print('零件检测成本:',sum(PART_COST),'半成品的检测成本:',sum(ASS_COST))
            print('成品的检测损失',finish_testing_cost)
          
        # 如果不拆
        else:
            print('成品检测后 不拆扔掉')
            finish_testing_cost = 6 + (Decimal(1) - finish_access_rates) * (8 + 8 * 3 + sum(ASS_COST) + FIXED + sum(PART_COST))
            print('成品的检测损失',finish_testing_cost)
      
        # 计算利润
      
        PROFIT = 200 - (FIXED + sum(part_testing_cost) + 8 * 3 + 8 + sum(ass_testing_cost) + finish_testing_cost)
      
    # 不检测 要计算次品率 还有调回成本
    else:
        print('成品不检测')
        if decision[step+1] == 1:
            print('成品不检测 拆掉')
            finish_testing_cost = (Decimal(1) - finish_access_rates) * (40 + (8 + 10 + 6 * 3 + 8 * 3  + sum(ASS_COST) + sum(PART_COST)))
            print('成品的检测损失',finish_testing_cost)
        # 如果不拆
        else:
            print('成品不检测 且 不拆扔掉')
            finish_testing_cost = (Decimal(1) - finish_access_rates) * (40 + (8 + 8 * 3 + sum(ASS_COST) + FIXED + sum(PART_COST)))
      
      

        PROFIT = 200 - (FIXED + sum(part_testing_cost) + 8 * 3 + 8  + sum(ass_testing_cost) + finish_testing_cost )

  
    # 保存
    hash = {'决策':decision,'决策零件总成本':FIXED,'零件的检测损失':part_testing_cost,'半成品的检测成本:':sum(ASS_COST),'半成品成品率':ass_access_rates,'半成品检测损失':ass_testing_cost,'成品的成品率':finish_access_rates,'成品的总损失':finish_testing_cost,'利润':PROFIT}
  
    print('工序结果:',hash)
    print('工序利润:',PROFIT)
    print('===计算完毕===')

    return hash



# 决策过程
def enumerate_decision_scenarios():

    all_combinations = list(itertools.product([0,1], repeat=16))
    # 最大利润 默认是最小值
    best_profit = Decimal('-inf')
    # 最佳选择
    best_decision = None
    hashes = []
    print('===开始计算===')
    for decision in all_combinations:
        # part_ABC_decision = decision[:3]
        # part_DEF_decision = decision[3:6]
        # part_GH_decision = decision[6:8]
        # print('---零件决策方案---')
        # print('1 2 3 零件的检测决策:',part_ABC_decision)
        # print('4 5 6 零件的检测决策:',part_DEF_decision)
        # print('7 8 零件的检测决策:',part_GH_decision)
        # print('该次决策:',decision)
        # print('-----------------')
  
        hash = calculate_profit(parts_decisions=decision)
        hashes.append(hash)
      
    df = pd.DataFrame(hashes)
    df.to_excel('D:\\question_three.xlsx', sheet_name='res', index=True)
if __name__ == '__main__':
    enumerate_decision_scenarios()



```


### 第四问

挣扎了很久，第四问只计算了对于第二问的最好情况与最坏情况


计算置信区间

```python
import itertools
from decimal import Decimal, getcontext
import pandas as pd
import numpy as np
from functools import reduce
getcontext().prec = 10  # 设置全局精度

SALES = 56  #成品的市场售价
PRICE_A = 4 #零件1和2的单价
PRICE_B = 18
COST = 6  #装配成本

DATA = {'A':[
  [0.1,PRICE_A,2],[0.2,PRICE_A,2],[0.1,PRICE_A,2],[0.2,PRICE_A,1],[0.1,4,8],[0.05,PRICE_A,2]
],'B':[
  [0.1,PRICE_B,3],[0.2,PRICE_B,3],[0.1,PRICE_B,3],[0.2,PRICE_B,1],[0.2,PRICE_B,1],[0.05,PRICE_B,3]
]}
#成品
PRODUCTS = [[0.1,COST,3,SALES],[0.2,COST,3,SALES],[0.1,COST,3,SALES],[0.2,COST,2,SALES],[0.1,COST,2,SALES],[0.05,COST,3,SALES]]


PARTS = [
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 2, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 8, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 12, 'inspection_cost': 2},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 2, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 8, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 12, 'inspection_cost': 2},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 8, 'inspection_cost': 1},
    {'defective_rate': Decimal('0.1'), 'purchase_cost': 12, 'inspection_cost': 2}
]

SEMIFINISHED_PRODUCTS = [
    {'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 4, 'dismantling_cost': 6},
    {'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 4, 'dismantling_cost': 6},
    {'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 4, 'dismantling_cost': 6}
]

FINISHED_PRODUCT = {
    'defective_rate': Decimal('0.1'), 'assembly_cost': 8, 'inspection_cost': 6, 'dismantling_cost': 10,
    'market_price': 200, 'exchange_loss': 40
}


# 给定单次样品抽样结果的次品率p 和 样本容量n 计算

def calculate_result():
    # 0.95 和 0.9 信度下 Z = 1.96 和 Z = 1.64
    n_95 = 82
    n_90 = 81
    Z95 = 1.96
    Z90 = 1.64
  
    # MODS_A = init()['MODS_A']
    # MODS_B = init()['MODS_B']
  
    # 枚举次品率
    result = []
  
    # 0.95 
    for p in DATA['A']:
      # 右边界
      RIGHT =  p[0] + ( Z95 * np.sqrt(n_95 *  p[0] * (1 -  p[0])) / n_95 )
      LEFT =  p[0] - ( Z95 * np.sqrt(n_95 *  p[0] * (1 -  p[0])) / n_95 )
      result.append({'P':p[0],'置信区间':[LEFT,RIGHT]})
    
    
    
    for p in DATA['B']:
      # 右边界
      RIGHT =  p[0] + ( Z95 * np.sqrt(n_95 *  p[0] * (1 -  p[0])) / n_95 )
      LEFT =  p[0] - ( Z95 * np.sqrt(n_95 *  p[0] * (1 -  p[0])) / n_95 )
      result.append({'P':p[0],'置信区间':[LEFT,RIGHT]})

  
    for p in PRODUCTS:
      RIGHT =  p[0] + ( Z95 * np.sqrt(n_95 *  p[0] * (1 -  p[0])) / n_95 )
      LEFT =  p[0] - ( Z95 * np.sqrt(n_95 *  p[0] * (1 -  p[0])) / n_95 )
      result.append({'P':p[0],'置信区间':[LEFT,RIGHT]})
    
    
  
    df = pd.DataFrame(result)  
    df.to_excel('D:\\question_four.xlsx', sheet_name='利润和决策数', index=True)
  
if __name__ == '__main__':
    calculate_result()


```


计算最好情况

```python
import pandas as pd
import numpy as np
from decimal import Decimal, getcontext
import random
import itertools
# 设置精度
getcontext().prec = 10  # 设置全局精度
#定义常量
SALES = 56  #成品的市场售价
PRICE_A = 4 #零件1和2的单价
PRICE_B = 18
COST = 6  #装配成本
#结果
results = []
  
def init():
  #零件
  DATA = {'A':[
    [0.03506626266799023,PRICE_A,2],[0.11342168355732031,PRICE_A,2],[0.03506626266799023,PRICE_A,2],[0.11342168355732031,PRICE_A,1],[0.03506626266799023,4,8],[0.0028267334905591746,PRICE_A,2]
  ],'B':[
    [0.03506626266799023,PRICE_B,3],[0.11342168355732031,PRICE_B,3],[0.03506626266799023,PRICE_B,3],[0.11342168355732031,PRICE_B,1],[0.11342168355732031,PRICE_B,1],[0.0028267334905591746,PRICE_B,3]
  ]}
  #成品
  PRODUCTS = [[0.03506626266799023,COST,3,SALES],[0.11342168355732031,COST,3,SALES],[0.03506626266799023,COST,3,SALES],[0.11342168355732031,COST,2,SALES],[0.03506626266799023,COST,2,SALES],[0.0028267334905591746,COST,3,SALES]]
  #不合格成品
  BELOWS = [[6,5],[6,5],[30,5],[30,5],[10,5],[10,40]]
  DATA_COL = ['次品率','购买单价','检测成本']
  PRODUCTS_COL = ['次品率','装配成本','检测成本','市场售价']
  BELOWS_COL = ['调换损失','拆解费用']
  return {
    'MODS_A':pd.DataFrame(data=DATA['A'],columns=DATA_COL),
    'MODS_B':pd.DataFrame(data=DATA['B'],columns=DATA_COL),
    'PRODUCTS':pd.DataFrame(data=PRODUCTS,columns=PRODUCTS_COL),
    'BELOWS':pd.DataFrame(BELOWS,columns=BELOWS_COL)
  }
  
#计算实际成品率和实际次品率
# x1、x2为决策，data为零件数据 products为成品数据 i为哪个零件取A或B j为第几种情况
def ActualYield(x1, x2, dataA, dataB, products, j):
    # 使用 Decimal 进行精度控制
    actual = {'实际次品率': None, '实际成品率': None}
  
    #决策
    if x1 == 1 and x2 == 1:
        actual['实际成品率'] = Decimal(1) - Decimal(products['次品率'][j])
    if x1 == 0 and x2 == 1:
        actual['实际成品率'] = (Decimal(1) - Decimal(dataA['次品率'][j])) * Decimal(1) * (Decimal(1) - Decimal(products['次品率'][j]))
    if x1 == 1 and x2 == 0:
        actual['实际成品率'] = Decimal(1) * (Decimal(1) - Decimal(dataB['次品率'][j])) * (Decimal(1) - Decimal(products['次品率'][j]))
    if x1 == 0 and x2 == 0:
        actual['实际成品率'] = (Decimal(1) - Decimal(dataA['次品率'][j])) * (Decimal(1) - Decimal(dataB['次品率'][j])) * (Decimal(1) - Decimal(products['次品率'][j]))
  
    # 计算实际次品率
    actual['实际次品率'] = Decimal(1) - actual['实际成品率']
    return actual

#计算零件检测损失 purchase:购买单价 defective:次品率 cost检测成本
def CalculatingPartLoss(data,j):
  purchase,defective,cost = data['购买单价'][j],data['次品率'][j],data['检测成本'][j]
  return purchase * Decimal(defective) + cost

#cost检测成本 __MODS_DISMANTLE__决策变量是否要拆解 below不合格品
# dismantle拆解费用 x1 x2分别是两个零件是否检测 testing_cost检测费用 rate是实际次品率
def CalculateTheLossOfFinishedProductInspection(data,below,j,choice,x1,x2,testing_cost,rate):
  inspection = 0
  cost,dismantle = data['检测成本'][j],below['拆解费用'][j]
  #在检测中 如果检测出次品 做出决策 判断是否要拆
  __MODS_DISMANTLE_AFTER__ = choice
  #拆
  if __MODS_DISMANTLE_AFTER__ == 1:
    print('是否拆解决策->如果检测不合格(即次品)拆解')
    inspection = cost + (rate * (dismantle + COST + x1 * testing_cost[0] + x2 * testing_cost[1]) )
  #不拆
  else:
    print('是否拆解决策->如果检测出次品不拆解(直接丢弃)')
    inspection = cost + rate * (PRICE_A + PRICE_B + COST + dismantle + x1 * testing_cost[0] + x2 * testing_cost[1]) 
  return inspection,__MODS_DISMANTLE_AFTER__

#不检测
#below 不合格成品
def CalculateTheLossOfFinishedProductInspectionWithout(below,j,x1,x2,choice,testing_cost,rate):
  inspection = 0
  change,dismantle = below['调换损失'][j], below['拆解费用'][j]
  #做出决策
  __MODS_DISMANTLE_BACK__ = choice
  #拆
  if __MODS_DISMANTLE_BACK__ == 1:
    print('是否拆解决策->市场调回的不合格品拆解')
    inspection = change * rate + __MODS_DISMANTLE_BACK__ * (dismantle + COST  + x1 * testing_cost[0] + x2 * testing_cost[1]) * rate
  #不拆
  else:
    print('是否拆解决策->市场调回的不合格品不拆解(直接丢弃)')
    inspection = change * rate + rate * (PRICE_A + PRICE_B + COST + x1 * testing_cost[0] + x2 * testing_cost[1])
  return inspection,__MODS_DISMANTLE_BACK__

#笛卡尔积
def IterTools():
  # 枚举五个变量，每个变量的取值是 0 或 1
  variables = [0, 1]
  all_combinations = list(itertools.product(variables, repeat=4))
  return all_combinations
   
   
   
def Decision(__MODS_A__,__MODS_B__,__MODS_PRODUCTS__,results):
  # 产生决策
  iter = IterTools()
  MODS_A = init()['MODS_A']
  MODS_B = init()['MODS_B']
  PRODUCTS = init()['PRODUCTS']
  BELOWS = init()['BELOWS']
  
  # 遍历六种情况 
  for j in range(0,6):
      # 利润
      PROFIT = [0,0,0,0,0,0] 
      print('******第一种情况******')
      # 每种情况不断循环决策 从笛卡尔积中拿出来一种决策
      for making_choice in iter:
        print('决策数:',making_choice)
        #零件做出决策
        decisionA = making_choice[0] 
        decisionB = making_choice[1]
        print('---零件检测决策---')
        res = ActualYield(decisionA,decisionB,dataA=MODS_A,dataB=MODS_B,products=PRODUCTS,j=j)
        #检测费用
        testing_cost = [0,0]
        print('零件检测决策-> 零件A:',__MODS_A__[decisionA],',','零件B:',__MODS_B__[decisionB],',','决策结果产出的实际次品率:',res['实际次品率'])
        #决策后，根据decisionA 和 decisionB 来计算损失
        if __MODS_A__[decisionA] == 1 and __MODS_B__[decisionB] == 0:
          testing_cost[0] = CalculatingPartLoss(MODS_A,j) #
        elif __MODS_A__[decisionA] == 0 and __MODS_B__[decisionB] == 1:
          testing_cost[1] = CalculatingPartLoss(MODS_B,j) #检测B但是不检测A
        elif __MODS_A__[decisionA] == 1 and __MODS_B__[decisionB] == 1:
          testing_cost[0] = CalculatingPartLoss(MODS_A,j) 
          testing_cost[1] = CalculatingPartLoss(MODS_B,j)
        else:
          testing_cost[0] = 0
          testing_cost[1] = 0
        print('该决策下的检测费用为:',testing_cost[0]+testing_cost[1]) #检测费用
      
        #成品做出决策
        print('---成品检测决策---')
        decisionProducts = making_choice[2]
        finished_product_inspection = 0
        #如果成品检测
        if __MODS_PRODUCTS__[decisionProducts] == 1:
          #计算成品检测损失
          print('---是否拆解决策---')
          finished_product_inspection,after = CalculateTheLossOfFinishedProductInspection(PRODUCTS,BELOWS,
                                                      j=j,choice=making_choice[3],
                                                      x1=__MODS_A__[decisionA],x2=__MODS_B__[decisionB],
                                                      testing_cost=testing_cost,rate=res['实际次品率'])
          print('成品检测决策->成品检测')
        #不检测
        else:
          print('成品检测决策->成品不检测')
        
          finished_product_inspection,back = CalculateTheLossOfFinishedProductInspectionWithout(BELOWS,j
                                                                                          ,x1=__MODS_A__[decisionA],
                                                                                          x2=__MODS_B__[decisionB],
                                                                                          choice=making_choice[3],
                                                                                          testing_cost=testing_cost,
                                                                                          rate=res['实际次品率'])
        print('成品检测损失费用为:',finished_product_inspection)
        #计算利润
        CONST = SALES - (PRICE_A + PRICE_B + COST) 
        TIME_PROFIT = CONST - (testing_cost[0]+testing_cost[1]) - finished_product_inspection
        #保存结果
        results.append([f'情况{j+1}',{'决策数':making_choice,'利润':TIME_PROFIT}])
      
        print('第一种情况下该道利润为:',TIME_PROFIT)
        PROFIT[j] = max(PROFIT[j],TIME_PROFIT)
        print('第一种情况最大利润为:',PROFIT[j])
        print('===做出的决策===')
        #保存该次做出的决策
        print('1.零件决策:','零件A:',__MODS_A__[decisionA],'零件B',__MODS_B__[decisionB])
        print('2.成品检验决策:',__MODS_PRODUCTS__[decisionProducts])
        if __MODS_PRODUCTS__[decisionProducts] == 1:
          print('3.如果成品检验下，检测出次品，拆与不拆的决策:',after)
        else:
          print('3.如果成品不检验下，市场发现次品调回后，拆与不拆的决策:',back)
      
        print('\n')
      print('第',j,'种情况下最大利润:',PROFIT[j])
      print('******第',j,'种情况结束******')
      print('\n')

if __name__ == '__main__':
  #开始随机决策
  MODS_A = init()['MODS_A']
  #定义决策变量
  __MODS_A__ = (0,1)  #零件12是否检测
  __MODS_B__ = (0,1)
  __MODS_PRODUCTS__ = (0,1) #成品是否检验
  Decision(__MODS_A__,__MODS_B__,__MODS_PRODUCTS__,results)
  # print(results)
  df = pd.DataFrame(results,columns=['情况','决策情况'])
  # df.to_excel('D:\\question4best.xlsx', sheet_name='利润和决策数', index=True)
```


对于最坏情况 

和上面的代码无区别，只是替换了最差的次品率

```python
import pandas as pd
import numpy as np
from decimal import Decimal, getcontext
import random
import itertools
# 设置精度
getcontext().prec = 10  # 设置全局精度
#定义常量
SALES = 56  #成品的市场售价
PRICE_A = 4 #零件1和2的单价
PRICE_B = 18
COST = 6  #装配成本
#结果
results = []
  
def init():
  #零件
  DATA = {'A':[
    [0.16493373733200978,PRICE_A,2],[0.2865783164426797,PRICE_A,2],[0.16493373733200978,PRICE_A,2],[0.2865783164426797,PRICE_A,1],[0.16493373733200978,4,8],[0.09717326650944083,PRICE_A,2]
  ],'B':[
    [0.16493373733200978,PRICE_B,3],[0.2865783164426797,PRICE_B,3],[0.16493373733200978,PRICE_B,3],[0.2865783164426797,PRICE_B,1],[0.2865783164426797,PRICE_B,1],[0.09717326650944083,PRICE_B,3]
  ]}
  #成品
  PRODUCTS = [[0.16493373733200978,COST,3,SALES],[0.2865783164426797,COST,3,SALES],[0.16493373733200978,COST,3,SALES],[0.2865783164426797,COST,2,SALES],[0.16493373733200978,COST,2,SALES],[0.09717326650944083,COST,3,SALES]]
  #不合格成品
  BELOWS = [[6,5],[6,5],[30,5],[30,5],[10,5],[10,40]]
  DATA_COL = ['次品率','购买单价','检测成本']
  PRODUCTS_COL = ['次品率','装配成本','检测成本','市场售价']
  BELOWS_COL = ['调换损失','拆解费用']
  return {
    'MODS_A':pd.DataFrame(data=DATA['A'],columns=DATA_COL),
    'MODS_B':pd.DataFrame(data=DATA['B'],columns=DATA_COL),
    'PRODUCTS':pd.DataFrame(data=PRODUCTS,columns=PRODUCTS_COL),
    'BELOWS':pd.DataFrame(BELOWS,columns=BELOWS_COL)
  }
  
#计算实际成品率和实际次品率
# x1、x2为决策，data为零件数据 products为成品数据 i为哪个零件取A或B j为第几种情况
def ActualYield(x1, x2, dataA, dataB, products, j):
    # 使用 Decimal 进行精度控制
    actual = {'实际次品率': None, '实际成品率': None}
  
    #决策
    if x1 == 1 and x2 == 1:
        actual['实际成品率'] = Decimal(1) - Decimal(products['次品率'][j])
    if x1 == 0 and x2 == 1:
        actual['实际成品率'] = (Decimal(1) - Decimal(dataA['次品率'][j])) * Decimal(1) * (Decimal(1) - Decimal(products['次品率'][j]))
    if x1 == 1 and x2 == 0:
        actual['实际成品率'] = Decimal(1) * (Decimal(1) - Decimal(dataB['次品率'][j])) * (Decimal(1) - Decimal(products['次品率'][j]))
    if x1 == 0 and x2 == 0:
        actual['实际成品率'] = (Decimal(1) - Decimal(dataA['次品率'][j])) * (Decimal(1) - Decimal(dataB['次品率'][j])) * (Decimal(1) - Decimal(products['次品率'][j]))
  
    # 计算实际次品率
    actual['实际次品率'] = Decimal(1) - actual['实际成品率']
    return actual

#计算零件检测损失 purchase:购买单价 defective:次品率 cost检测成本
def CalculatingPartLoss(data,j):
  purchase,defective,cost = data['购买单价'][j],data['次品率'][j],data['检测成本'][j]
  return purchase * Decimal(defective) + cost

#cost检测成本 __MODS_DISMANTLE__决策变量是否要拆解 below不合格品
# dismantle拆解费用 x1 x2分别是两个零件是否检测 testing_cost检测费用 rate是实际次品率
def CalculateTheLossOfFinishedProductInspection(data,below,j,choice,x1,x2,testing_cost,rate):
  inspection = 0
  cost,dismantle = data['检测成本'][j],below['拆解费用'][j]
  #在检测中 如果检测出次品 做出决策 判断是否要拆
  __MODS_DISMANTLE_AFTER__ = choice
  #拆
  if __MODS_DISMANTLE_AFTER__ == 1:
    print('是否拆解决策->如果检测不合格(即次品)拆解')
    inspection = cost + (rate * (dismantle + COST + x1 * testing_cost[0] + x2 * testing_cost[1]) )
  #不拆
  else:
    print('是否拆解决策->如果检测出次品不拆解(直接丢弃)')
    inspection = cost + rate * (PRICE_A + PRICE_B + COST + dismantle + x1 * testing_cost[0] + x2 * testing_cost[1]) 
  return inspection,__MODS_DISMANTLE_AFTER__

#不检测
#below 不合格成品
def CalculateTheLossOfFinishedProductInspectionWithout(below,j,x1,x2,choice,testing_cost,rate):
  inspection = 0
  change,dismantle = below['调换损失'][j], below['拆解费用'][j]
  #做出决策
  __MODS_DISMANTLE_BACK__ = choice
  #拆
  if __MODS_DISMANTLE_BACK__ == 1:
    print('是否拆解决策->市场调回的不合格品拆解')
    inspection = change * rate + __MODS_DISMANTLE_BACK__ * (dismantle + COST  + x1 * testing_cost[0] + x2 * testing_cost[1]) * rate
  #不拆
  else:
    print('是否拆解决策->市场调回的不合格品不拆解(直接丢弃)')
    inspection = change * rate + rate * (PRICE_A + PRICE_B + COST + x1 * testing_cost[0] + x2 * testing_cost[1])
  return inspection,__MODS_DISMANTLE_BACK__

#笛卡尔积
def IterTools():
  # 枚举五个变量，每个变量的取值是 0 或 1
  variables = [0, 1]
  all_combinations = list(itertools.product(variables, repeat=4))
  return all_combinations
   
   
   
def Decision(__MODS_A__,__MODS_B__,__MODS_PRODUCTS__,results):
  # 产生决策
  iter = IterTools()
  MODS_A = init()['MODS_A']
  MODS_B = init()['MODS_B']
  PRODUCTS = init()['PRODUCTS']
  BELOWS = init()['BELOWS']
  
  # 遍历六种情况 
  for j in range(0,6):
      # 利润
      PROFIT = [0,0,0,0,0,0] 
      print('******第一种情况******')
      # 每种情况不断循环决策 从笛卡尔积中拿出来一种决策
      for making_choice in iter:
        print('决策数:',making_choice)
        #零件做出决策
        decisionA = making_choice[0] 
        decisionB = making_choice[1]
        print('---零件检测决策---')
        res = ActualYield(decisionA,decisionB,dataA=MODS_A,dataB=MODS_B,products=PRODUCTS,j=j)
        #检测费用
        testing_cost = [0,0]
        print('零件检测决策-> 零件A:',__MODS_A__[decisionA],',','零件B:',__MODS_B__[decisionB],',','决策结果产出的实际次品率:',res['实际次品率'])
        #决策后，根据decisionA 和 decisionB 来计算损失
        if __MODS_A__[decisionA] == 1 and __MODS_B__[decisionB] == 0:
          testing_cost[0] = CalculatingPartLoss(MODS_A,j) #
        elif __MODS_A__[decisionA] == 0 and __MODS_B__[decisionB] == 1:
          testing_cost[1] = CalculatingPartLoss(MODS_B,j) #检测B但是不检测A
        elif __MODS_A__[decisionA] == 1 and __MODS_B__[decisionB] == 1:
          testing_cost[0] = CalculatingPartLoss(MODS_A,j) 
          testing_cost[1] = CalculatingPartLoss(MODS_B,j)
        else:
          testing_cost[0] = 0
          testing_cost[1] = 0
        print('该决策下的检测费用为:',testing_cost[0]+testing_cost[1]) #检测费用
      
        #成品做出决策
        print('---成品检测决策---')
        decisionProducts = making_choice[2]
        finished_product_inspection = 0
        #如果成品检测
        if __MODS_PRODUCTS__[decisionProducts] == 1:
          #计算成品检测损失
          print('---是否拆解决策---')
          finished_product_inspection,after = CalculateTheLossOfFinishedProductInspection(PRODUCTS,BELOWS,
                                                      j=j,choice=making_choice[3],
                                                      x1=__MODS_A__[decisionA],x2=__MODS_B__[decisionB],
                                                      testing_cost=testing_cost,rate=res['实际次品率'])
          print('成品检测决策->成品检测')
        #不检测
        else:
          print('成品检测决策->成品不检测')
        
          finished_product_inspection,back = CalculateTheLossOfFinishedProductInspectionWithout(BELOWS,j
                                                                                          ,x1=__MODS_A__[decisionA],
                                                                                          x2=__MODS_B__[decisionB],
                                                                                          choice=making_choice[3],
                                                                                          testing_cost=testing_cost,
                                                                                          rate=res['实际次品率'])
        print('成品检测损失费用为:',finished_product_inspection)
        #计算利润
        CONST = SALES - (PRICE_A + PRICE_B + COST) 
        TIME_PROFIT = CONST - (testing_cost[0]+testing_cost[1]) - finished_product_inspection
        #保存结果
        results.append([f'情况{j+1}',{'决策数':making_choice,'利润':TIME_PROFIT}])
      
        print('第一种情况下该道利润为:',TIME_PROFIT)
        PROFIT[j] = max(PROFIT[j],TIME_PROFIT)
        print('第一种情况最大利润为:',PROFIT[j])
        print('===做出的决策===')
        #保存该次做出的决策
        print('1.零件决策:','零件A:',__MODS_A__[decisionA],'零件B',__MODS_B__[decisionB])
        print('2.成品检验决策:',__MODS_PRODUCTS__[decisionProducts])
        if __MODS_PRODUCTS__[decisionProducts] == 1:
          print('3.如果成品检验下，检测出次品，拆与不拆的决策:',after)
        else:
          print('3.如果成品不检验下，市场发现次品调回后，拆与不拆的决策:',back)
      
        print('\n')
      print('第',j,'种情况下最大利润:',PROFIT[j])
      print('******第',j,'种情况结束******')
      print('\n')

if __name__ == '__main__':
  #开始随机决策
  MODS_A = init()['MODS_A']
  #定义决策变量
  __MODS_A__ = (0,1)  #零件12是否检测
  __MODS_B__ = (0,1)
  __MODS_PRODUCTS__ = (0,1) #成品是否检验
  Decision(__MODS_A__,__MODS_B__,__MODS_PRODUCTS__,results)
  # print(results)
  df = pd.DataFrame(results,columns=['情况','决策情况'])
  # df.to_excel('D:\\question4lose.xlsx', sheet_name='利润和决策数', index=True)
```
